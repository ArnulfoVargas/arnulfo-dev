const PokeApi = () => {
  return (
    <div className="flex flex-col w-full gap-10 items-center">
      
      <div className="flex xs:flex-col sm:flex-row w-full sm:h-10 xs:h-24 justify-center items-center gap-5">
        <input type="text" placeholder="Type a Pokemon Name or ID" 
          className="xs:w-full sm:w-1/2 lg:w-1/4 px-3 h-10 rounded-md border-2 border-gray-600"/>
        <div className="bg-gray-800 rounded-md h-10 xs:w-full sm:w-20 md:w-28 flex items-center justify-center text-xl font-bold text-gray-200
                        hover:bg-gray-200 hover:text-gray-800 hover:border-2 hover:border-gray-800 transition-colors duration-500 active:border-gray-500
                        active:text-gray-500 active:duration-100 select-none">
          Search
        </div>
      </div>
    </div>
  )
}

export default PokeApi