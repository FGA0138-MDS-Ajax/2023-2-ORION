'use client'
import EmailInput from "@/components/EmailInput/page";
import { input } from "./styles.css";
import Button from "@/components/Button/page";

export default function signup() {
  const handleEmailChange = (email: string) => {
    console.log('Email changed:', email);
  };
  const handleSubmit = () => {
    alert('Email valido');
  };
  return (

    <div className="grid grid-cols-[1fr_1fr] w-screen">
      <div className="bg-[#ffffff] h-screen grid place-items-center">
      <div className="w-[400px] text-center text-[#45bf55]">
          <form>
            <h1 className="font-bold">Join the movement!</h1>
            <EmailInput onEmailChange={handleEmailChange} />
            <input type='password' placeholder="sua incrivel senha" className={input} />
            <Button 
              text="Acesar"
              width="w-[1/2]"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </div>
      <div className="bg-primary grid place-items-center">
        
      </div>


    </div>
  )
}
