
const checkValidData = (email, password) => {

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\S+$).{8,20}$/.test(password);

    if (!isEmailValid) return "Please enter a valid email.";
    
    if (!isPasswordValid)  return "Please enter a valid password.";
    

    return null;



};
export { checkValidData };