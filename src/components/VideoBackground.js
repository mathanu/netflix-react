import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
const VideoBackground = ({movieId}) => {
    const trailer = useSelector(store => store?.movies?.trailerVideo?.[0]);
    useMovieTrailer(movieId);
    return (
        <div className="w-screen">
        <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/"+trailer?.key+ "?&autoplay=1&mute=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        {/* <iframe  className="w-screen aspect-video" src="https://www.youtube.com/embed/Po3jStA673E?si=N8C_ylgCFBhZrwXL&autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
        </div>
    )

}

export default VideoBackground;