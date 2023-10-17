import { useRef, useState } from "react";
import { checkValidateData } from "../utils/loginValidate";
import HeaderCmp from "./HeaderCmp";
    import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
    import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { LOGIN_BG_IMG } from "../utils/constants"

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [ showErrMsg, setShowErrMsg] = useState(null)
    const dispatch = useDispatch()

    const email = useRef(null)
    const password = useRef(null)
    const displayName = useRef(null)

    const toggleSigninForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    const handleFormClick = (e) => {
        e.preventDefault()
        const validation = checkValidateData(email.current.value, password.current.value)
        setShowErrMsg(validation)
        if(validation) return validation
        
        if(!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                updateProfile(auth.currentUser, {
                    displayName: displayName?.current?.value
                  }).then(() => {
                    const { uid, email, displayName} = auth.currentUser
                    // Profile updated!
                    dispatch(addUser({uid: uid, email, displayName}))
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    // ...
                    console.log("errorerrorerrorerrorerror", error)
                  });                
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
                <img src={LOGIN_BG_IMG} alt="mainpage" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-10 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
            <h1 className="font-bold  text-2xl py-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type="text" ref={displayName} placeholder="Full Name" className="p-4 my-4 w-full bg-gray-600"/>}
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