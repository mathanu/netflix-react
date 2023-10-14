import {IMG_CDN} from "../utils/constants";

const MovieCard = ({poster}) => {
    return (
        <div className="w-48 pr-4">
        <img alt="movie card" src={IMG_CDN+poster} />
        </div>
    )
}

export default MovieCard;