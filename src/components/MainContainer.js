import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {

    const moviesData = useSelector(store => store.movies?.nowPlayingMovies)
    if(moviesData === null) return;
    const mainMovie = moviesData[0]
    // console.log(mainMovie, moviesData)
    const { original_title, overview, id } = mainMovie;
    return ( 
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer;