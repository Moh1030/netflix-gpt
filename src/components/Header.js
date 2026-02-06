import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_LOGO } from "../utils/constants";
//import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  const dispatch = useDispatch();
  //const user = useSelector((state) => state.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen px-12 pt-2 pb-4 flex justify-between items-center bg-gradient-to-b from-black/90 via-black/40 to-transparent z-50">


      <img
        className="w-32"
        src={LOGO}
        alt="Netflix Logo"
      />
      {location.pathname === "/browse" && (
        <div className="flex">
          <img
            className="w-10 h-10 rounded cursor-pointer float-right mt-2"
            src={USER_LOGO}
            alt="Profile"
          />
          <button
            onClick={handleSignOut}
            className="text-white bg-red-600 px-4 py-1 rounded ml-4 font-semibold hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>
      )}{" "}
    </div>
  );
};

export default Header;
