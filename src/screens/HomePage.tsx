import RichTitle from "../components/RichTitle"
import TecnologiesCard from "../components/TecnologiesCard"
import { Languages, Tecnologies } from "../data/DataBase"
import uniqid from "uniqid"
import "./HomePage.css"

const HomePage = () => {
  return (
    <div className="flex items-center flex-col">
      <h1 className="md:text-7xl text-5xl w-fit bg-main-red font-titles font-bold text-white mb-5 toony-borders changer">Who am I?</h1>
      <p className="md:w-1/2 w-3/4 text-lg font-mono-text text-center mt-5 mb-10">
        Hello, my name is Arnulfo, I am a 19 year old young man who is currently studying Interactive Software and Video Game Development at the Amerike Institute.
        Despite my young age, I have been programming and developing software for about 3 years, which has led me to experience and know a lot of technologies.
      </p>

      <RichTitle text="Languages" small={true}/>
      <p className="md:w-1/2 w-3/4 text-lg font-mono-text text-center my-5">
        Next I will show the programming languages that I know ordered from the most used to the less used.
      </p>

      <div className="flex flex-row w-3/4 gap-10 my-5 flex-wrap justify-center">
        {
          Languages.map((element) => {
            return <TecnologiesCard tecnology={element} key={uniqid()} />
          })
        }
      </div>
      <hr className="w-48 h-1 mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700 mt-5 mb-10"/>

      <RichTitle text="Tecnologies" small={true}/>
      <p className="md:w-1/2 w-3/4 text-lg font-mono-text text-center my-5">
        Below I will show the technologies that I have used throughout my career.
      </p>

      <div className="flex flex-row w-3/4 gap-10 my-5 flex-wrap justify-center">
        {
          Tecnologies.map((element) => {
            return <TecnologiesCard tecnology={element} key={uniqid()} />
          })
        }
      </div>

      <hr className="w-48 h-1 mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700 mt-5 mb-10"/>

    </div>
  )
}

export default HomePage