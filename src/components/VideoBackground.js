import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({movieId}) => {

    const [trailerKey, setTrailerKey] = useState(null)

    const getMovieVideos = async () => {

        const data = await fetch('https://api.themoviedb.org/3/movie/893723/videos?language=en-US', API_OPTIONS)
        const json = await data.json()
        const trailer = json.results.filter(data => data.type === 'Trailer')
        setTrailerKey(trailer.key)
        console.log(json, trailer)
    }

    useEffect(() => {
        getMovieVideos()
    }, [])

    return (
        <div>
        <iframe src={"https://www.youtube.com/embed/"+trailerKey} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    )

}

export default VideoBackground;