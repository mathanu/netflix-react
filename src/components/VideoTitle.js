const VideoTitle = ({title, overview}) => {

    return (
        <div className="pt-36 px-12">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div>
            <button className="p-4 px-12 bg-green-500 text-black text-lg rounded-lg">Play</button>
            <button className="p-4 px-12 mx-2 bg-gray-500 text-black text-lg rounded-lg">More Info</button>
        </div>
        </div>
    )

}

export default VideoTitle;