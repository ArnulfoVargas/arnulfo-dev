interface Props {
    type : string,
    id: string,
    placeHolder: string,
    setFunction : React.Dispatch<React.SetStateAction<string>>
}

const PokeApiInput = (props: Props) => {
    const baseEndPoint = 'https://pokeapi.co/api/v2/pokemon/'
    const {type, setFunction, placeHolder, id} = props;

    const onGetText = () => {
      const input = document.getElementById(id);
      const data = input?.value;
      const dataSplit = data.split(" ")
      let finalData : string = "";
    
      for (const i of dataSplit){
        finalData += i
      }

      if(finalData.length > 0){
        input!.value = "";
        setFunction(baseEndPoint + finalData.toLowerCase());
      }
    }

    const onGetNumber = () => {
      const input = document.getElementById(id);
      const data = input?.value;
      let finalValue = '';

      if(data === "") return 

      const value = parseInt(data);
      
      if(value < 1){
        finalValue = '1'
      }
      else if(value > 1017){
        finalValue = '1017'
      }
      else{
        finalValue = value.toString()
      }

      setFunction(baseEndPoint + finalValue)
      input!.value = "";
    }

    const clickEvent = () => {
      
      if(type === 'text'){
        onGetText()
      }
      else{
        onGetNumber()
      }
    }

  return (
    <div className="h-12 md:w-96 w-10/12 md:p-0 bg-red-100 grid-cols-3 grid toony-borders">
        <input type={type} className="col-span-2 rounded-none px-2 text-lg lg:text-2xl font-titles" id={ id } placeholder={placeHolder}/>
        <div className="w-full h-full bg-main-red flex items-center justify-center hover:bg-red-600 transition-colors duration-500" onClick={clickEvent}><p className="text-xl md:text-lg lg:text-2xl font-titles text-white">Search</p></div>
    </div>
  )
}

export default PokeApiInput