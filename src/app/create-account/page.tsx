//import { EmailInput } from "../components/EmailInput/page";
'use client'
import EmailInput from "@/components/EmailImput/page";

export default function signup() {
  const handleEmailChange = (email: string) => {
    console.log('Email changed:', email);
  };
  const handleSubmit = () => {
    console.log('Email valido');
  };
  return (

    <div className="grid grid-cols-[1fr_1fr] w-screen">
      <div className="bg-[#ffffff] h-screen grid place-items-center">
      <div className="w-[400px] text-center text-[#45bf55]">
          <form>
            <h1 className="font-bold">Join the movement!</h1>
            <EmailInput onEmailChange={handleEmailChange} />
            <input placeholder="sua incrivel senha" className="bg-[#f6f6f6] text-[#45BF55] text-center text-base w-[300px] p-2 m-3 rounded-[30px] border-2 border-solid border-[#e8e8e8]" type="password" name="senha" id="senha" />
            <button type="submit" value="Acessar" onSubmit={handleSubmit}
              className="bg-primary w-[200px] rounded-[30px] p-2 text-white font-bold hover:bg-primaryDark transition duration-100 ease-in-out"
            > Registrar!
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[green] grid place-items-center">
        
      </div>


    </div>
  )
}
