
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import HeaderCmp from "./HeaderCmp";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

    useNowPlayingMovies();   
    usePopularMovies();
    useTopRatedMovies();

    return (
        <div>
            <div>
                <HeaderCmp />
                <MainContainer />
                <SecondaryContainer />
            </div>
        </div>
    )
}

export default Browse;