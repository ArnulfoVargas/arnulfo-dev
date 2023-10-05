import { Game } from "../data/Types";
import CustomCarousel from "./CustomCarousel"
import "./Preview.css"

interface Props {
    Game : Game
    index : number
}

const GamePreview = (props:Props) => {

    const {index, Game} = props;
    const {images, content, url, name} = Game;

  return (
    <>
        <div className={`w-full flex m-5 lg:gap-0 gap-5 ${index % 2 == 0 ? "lg:flex-row flex-col" :  "lg:flex-row-reverse flex-col"} items-center justify-center`}>
            <div className="lg:w-1/2 w-full flex flex-col items-center justify-center">
                <h1 className="text-white text-3xl md:text-4xl text-center font-titles bg-main-red toony-borders">{name}</h1>
                <p className="text-main-gray text-xl font-mono-text text-center my-5">{content}</p>

                <a href={url} className="mt-2">
                    <div className="w-28 h-12 bg-main-red text-white flex items-center justify-center font-titles text-2xl font-bold animated-btn">
                        <p>
                            Play
                        </p>
                    </div>
                </a>
            </div>

            <div className="lg:w-1/2 w-full flex justify-center items-center">
                <CustomCarousel images={images}/>
            </div>

        </div>
        <hr className="w-48 h-1 mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700"/>
    </>
  )
}

export default GamePreview