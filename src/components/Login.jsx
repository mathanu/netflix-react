import { useState } from "react";
import HeaderCmp from "./HeaderCmp";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const toggleSigninForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div>
        <HeaderCmp />
           <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="mainpage" />
            </div>
            <form className="w-3/12 absolute p-10 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
            <h1 className="font-bold  text-2xl py-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-600"/>}
            {!isSignInForm && <input type="text" placeholder="Phone Number" className="p-4 my-4 w-full bg-gray-600"/>}

                <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-600"/>
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-600"/>
                <button className="p-4 my-6 bg-red-600 w-full">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={toggleSigninForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login;