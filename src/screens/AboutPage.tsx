import PagePreview from "../components/PagePreview"
import GamesData from "../data/GamesDB"

const AboutPage = () => {

  return (
    <div className="flex items-center flex-col">
      <div className="h-fit w-fit">
          <h1 className="text-center text-7xl font-titles bg-main-red text-white font-bold">My work</h1>
      </div>

      <div className="w-full h-full flex flex-col gap-5 p-10 items-center justify-center">
        {
          GamesData.map((element, index) => {
            return <PagePreview Game={element} index={index}/>
          })
        }
      </div>
    </div>
  )
}

export default AboutPage