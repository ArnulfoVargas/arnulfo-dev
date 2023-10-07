import RichTitle from "../components/RichTitle";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center">
      <RichTitle text="Contact Me" small={true}/>
      
      <form action="https://formsubmit.co/vargas.mejia.arnulfo04@gmail.com" method="POST" target="_blank" className="max-w-[500px] mt-5 flex flex-col items-center">

        <div className="w-full grid grid-cols-3 grid-rows-2 gap-y-2">
            <div className="col-span- flex items-center justify-center bg-main-red h-12 toony-borders"><p className="md:text-2xl text-lg font-titles text-white font-bold">Name</p></div>
            <input type="text" name="name" placeholder="Your Name" className="h-12 col-span-2 toony-borders md:text-xl text-md font-mono-text" required/>

            <div className="col-span- flex items-center justify-center bg-main-red h-12 toony-borders"><p className="md:text-2xl text-lg font-titles text-white font-bold">Email</p></div>
            <input type="email" name="email" placeholder="Your Email" className="h-12 col-span-2 toony-borders md:text-xl text-md font-mono-text" required/>
        </div>

        <textarea name="message" className="w-full grid grid-cols-3 grid-rows-6 gap-y-2 toony-borders mt-2 md:text-xl text-md font-mono-text" placeholder="Your message here" wrap="soft" rows={5} required></textarea>

        <button type="submit" className="w-fit mt-2">
          <RichTitle text="Send" small={true}/>
        </button>

        <input type="hidden" name="_autoresponse" value="I have received your email correctly. :D"></input>
      </form>  
    </div>
  )
}

export default ContactPage;