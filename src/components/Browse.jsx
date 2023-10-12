
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import HeaderCmp from "./HeaderCmp";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

    useNowPlayingMovies();   

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