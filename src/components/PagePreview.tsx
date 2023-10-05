import { Game } from "../data/Types";
import CustomCarousel from "./CustomCarousel"


interface Props {
    Game : Game
    index : number
}

const PagePreview = (props:Props) => {

    const {index, Game} = props;
    const {images, content, url, name} = Game;

  return (
    <>
        <div className={`w-full flex m-5 md:gap-0 gap-5 ${index % 2 == 0 ? "md:flex-row flex-col" :  "md:flex-row-reverse flex-col"} items-center justify-center`}>
            <div className="md:w-1/2 w-full flex flex-col items-center justify-center">
                <h1 className="text-white text-4xl font-titles bg-main-red">{name}</h1>
                <p className="text-main-gray text-xl font-mono-text text-center my-5">{content}</p>

                <a href={url} className="mt-2">
                    <div className="w-28 h-12 bg-main-red text-white flex items-center justify-center font-titles text-2xl font-bold">
                        <p>
                            Play
                        </p>
                    </div>
                </a>
            </div>

            <div className="md:w-1/2 w-full flex justify-center items-center">
                <CustomCarousel images={images}/>
            </div>

        </div>
        <hr className="w-48 h-1 mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700"/>
    </>
  )
}

export default PagePreview