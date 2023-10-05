import GamePreview from "../components/GamePreview"
import PagePreview from "../components/PagePreview"
import {GamesData, Pages } from "../data/DataBase"
import uniqid from "uniqid"

const AboutPage = () => {

  return (
    <div className="flex items-center flex-col">
      <div className="h-fit w-fit">
          <h1 className="text-center text-7xl font-titles bg-main-red text-white font-bold">My Games</h1>
      </div>

      <div className="w-full h-full flex flex-col gap-5 p-10 items-center justify-center">
        {
          GamesData.map((element, index) => {
            return <GamePreview Game={element} index={index} key={uniqid()}/>
          })
        }
      </div>

      <div className="h-fit w-fit">
          <h1 className="text-center text-7xl font-titles bg-main-red text-white font-bold">My Pages</h1>
      </div>

      <div className="w-full h-full flex flex-col gap-5 p-10 items-center justify-center">
        {
          Pages.map((element, index) => {
            return <PagePreview Page={element} index={index} key={uniqid()}/>
          })
        }
      </div>
    </div>
  )
}

export default AboutPage