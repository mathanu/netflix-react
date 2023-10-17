import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GPTSearch from "./GPTSearch";
import HeaderCmp from "./HeaderCmp";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

    useNowPlayingMovies();   
    usePopularMovies();
    useTopRatedMovies();

    const showGpt = useSelector((store)=> store.gpt?.showGptSearch);
    return (
        <div>
            <div>
                <HeaderCmp />
                { showGpt ? <GPTSearch /> : 
                <>
                <MainContainer />
                <SecondaryContainer /> 
                </>
                }
            
            </div>
        </div>
    )
}

export default Browse;