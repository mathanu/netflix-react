import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

    const movieData = useSelector(store => store.movies.nowPlayingMovies)
    const popularMovies = useSelector(store => store.movies.popularMovies)
    const topRatedMovies = useSelector(store => store.movies.topRatedMovies)

    return ( 
        <div className="bg-black">
        <div className="-mt-52 relative z-30">
            <MovieList title="Now Playing" movies={movieData}/>
            <MovieList title="Top Rated" movies={topRatedMovies}/>
            <MovieList title="Popular" movies={popularMovies}/>
            <MovieList title="Upcoming Movies" movies={movieData}/>
            <MovieList title="Comedy" movies={movieData}/>
            <MovieList title="Action" movies={movieData}/>
            </div>
        </div>
    )
}

export default SecondaryContainer;   