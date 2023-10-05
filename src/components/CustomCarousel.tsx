import { useState } from 'react';

interface Props {
    images: Array<string>;
}

const CustomCarousel = (props: Props) => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const scrollToImage = (dir : string) =>{
    if (dir === "prev")
    {
      setCurrentIndex(curr => {
        const isFirst = curr === 0

        return isFirst ? props.images.length - 1 : curr - 1
      })
    }
    else{
      setCurrentIndex(curr => {
        const isLast = curr === props.images.length - 1

        return isLast ? 0 : curr + 1 
      })
    }
  }
  //'h-48 w-96'
  return (
      <div className=' lg:w-3/4 h-fit w-full'> 
        <div className='relative h-fit'>
          <div className='absolute top-1/2 -translate-y-1/2 left-8 text-3xl text-white z-10 cursor-pointer select-none' onClick={() => {scrollToImage('prev')}}>&#10092;</div>
          <div className='absolute top-1/2 -translate-y-1/2 right-8 text-3xl text-white z-10 cursor-pointer select-none' onClick={() => {scrollToImage('next')}}>&#10093;</div>
          <div className='h-fit w-full overflow-hidden'>

            <img src={props.images[currentIndex]} />

          </div>
        </div>
      </div>
  )
}

export default CustomCarousel