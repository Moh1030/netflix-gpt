import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cc73e7c7-7860-4ef4-8fc8-1baf24569d2f/web/IN-en-20260126-TRIFECTA-perspective_90d714e8-acc9-4253-ab46-ca6b349c1989_large.jpg"
          alt="Netflix background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-3/12 mx-auto my-36 right-0 left-0 text-white  bg-opacity-80 rounded-lg"
      >
        <h1 className="font-bold text-3xl p-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="my-4 w-full p-4 bg-gray-800 text-white rounded-md"
          />
        )}
        <input
          type="email"
          placeholder="Email address"
          className="my-4 w-full p-4 bg-gray-800 text-white rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="my-4 w-full p-4 bg-gray-800 text-white rounded-md"
        />
        <button
          type="submit"
          className="my-4 w-full bg-red-600 text-white p-4 rounded-md hover:bg-red-700"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          onClick={toggleSignInForm}
          className="text-gray-400 p-4 cursor-pointer"
        >
          {isSignInForm ? "New to Netflix? " : "Already registered? "}
          <span className="text-white font-semibold hover:underline">
            {isSignInForm ? "Sign Up now." : "Sign In now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
