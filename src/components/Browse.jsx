import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import HeaderCmp from "./HeaderCmp";

const Browse = () => {

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=ta&page=1&region=IN', API_OPTIONS); 
        const json = await data.json();
        console.log(json)
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, [])

    return (
        <div>
            <div>
                <HeaderCmp />
            </div>
        </div>
    )
}

export default Browse;