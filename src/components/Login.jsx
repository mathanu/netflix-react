import { useRef, useState } from "react";
import { checkValidateData } from "../utils/loginValidate";
import HeaderCmp from "./HeaderCmp";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [ showErrMsg, setShowErrMsg] = useState(null)

    const email = useRef(null)
    const password = useRef(null)

    const toggleSigninForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    const handleFormClick = () => {
        const validation = checkValidateData(email.current.value, password.current.value)
        setShowErrMsg(validation)
        if(validation) return validation
        
        if(!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setShowErrMsg(errorCode+"-"+errorMessage)
                // ..
            });

        }else{

            signInWithEmailAndPassword(auth,  email.current.value,  password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                setShowErrMsg("Login Success"+user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setShowErrMsg(errorCode+"-"+errorMessage)
            });
            
        }

    }
    return (
        <div>
        <HeaderCmp />
           <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="mainpage" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-10 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
            <h1 className="font-bold  text-2xl py-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-600"/>}
                <input type="text" ref={email} placeholder="Email Address" className="p-4 my-4 w-full bg-gray-600"/>
                <input type="password" ref={password} placeholder="Password" className="p-4 my-4 w-full bg-gray-600"/>
                <p className="text-red-500 px-2">{showErrMsg}</p>
                <button className="p-4 my-6 bg-red-600 w-full rounded-lg" onClick={handleFormClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={toggleSigninForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login;