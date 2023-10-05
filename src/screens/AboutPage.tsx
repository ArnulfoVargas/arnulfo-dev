import GamePreview from "../components/GamePreview"
import PagePreview from "../components/PagePreview"
import RichTitle from "../components/RichTitle"
import {GamesData, Pages } from "../data/DataBase"
import uniqid from "uniqid"

const AboutPage = () => {

  return (
    <div className="flex items-center flex-col">
      <RichTitle text="My Games"/>

      <div className="w-full h-full flex flex-col gap-5 p-10 items-center justify-center">
        {
          GamesData.map((element, index) => {
            return <GamePreview Game={element} index={index} key={uniqid()}/>
          })
        }
      </div>

      <RichTitle text="My Pages"/>

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