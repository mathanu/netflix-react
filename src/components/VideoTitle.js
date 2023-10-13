const VideoTitle = ({title, overview}) => {

    return (
        <div className="w-screen aspect-video pt-[18%] px-12 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div>
            <button className="p-4 px-12 bg-white text-black text-lg rounded-lg hover:bg-opacity-40">Play</button>
            <button className="p-4 px-12 mx-2 bg-gray-500 text-black text-lg rounded-lg">More Info</button>
        </div>
        </div>
    )

}

export default VideoTitle;