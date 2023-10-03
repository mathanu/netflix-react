import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderCmp = () => {

    const navigate = useNavigate()

    const user = useSelector((store)=> store.user);

    const handleSignout = () => {
        signOut(auth).then(() => {
        // Sign-out successful.
        navigate('/')
        }).catch((error) => {
        // An error happened.
        });
    }

    return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between w-screen">
    <div>
    <img className="w-44 " src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
    </div>
        
        { user && <div className="flex w-20 h-12 px-4">
            <button onClick={handleSignout} className="bg-slate-400 text-black">(Sign Out)</button>
        </div> }
    </div>
        );

}
export default HeaderCmp;