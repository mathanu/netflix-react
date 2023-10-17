import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/GPTSlice";
import { SUPPORTED_LANG } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const HeaderCmp = () => {

    const navigate = useNavigate()
    
    const dispatch = useDispatch()

    const user = useSelector((store)=> store.user);

    const showGpt = useSelector((store)=> store.gpt?.showGptSearch);

    const handleGPTBtnClick = () => {
      dispatch(toggleGptSearchView())
    }

    const handleLangSelect = (e) => {
        dispatch(changeLanguage(e.target.value))
    }

    const handleSignout = () => {
        signOut(auth).then(() => {
        // Sign-out successful.
        navigate('/')
        }).catch((error) => {
        // An error happened.
        });
    }

    useEffect(()=> {

        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid, email, displayName} = user;
              dispatch(addUser({uid: uid, email, displayName}))
              navigate('/browse')
              // ...
            } else {
              // User is signed out
              dispatch(removeUser())
              navigate('/')
              // ...
            }
            return () => unSubscribe();
          });

    }, [])

    return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between w-screen">
    <div>
    <img className="w-44 " src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
    </div>
        
        { user && <div className="flex px-2">
          {showGpt && <select className="py-2 px-2 mx-2 m-2  bg-gray-600 text-white" onChange={handleLangSelect}>
            {SUPPORTED_LANG.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>}
          <button className="bg-green-400 py-2 px-2 mx-2 m-2 text-lg rounded-xl text-white font-semibold" onClick={handleGPTBtnClick}>GPT Search</button>
            <button onClick={handleSignout} className="bg-red-600 rounded-xl font-semibold text-black py-2 px-4 mx-2 m-2">Sign Out</button>
        </div> }
    </div>
        );

}
export default HeaderCmp;