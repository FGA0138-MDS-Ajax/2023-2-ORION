
export default function login() {
    return (

        <div className="grid grid-cols-[1fr_1fr] w-screen">
            <div className="bg-[green] h-screen text-center">
                <svg width="700" height="700" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="600" fill="#45BF55" />
                </svg>

                
                <div className="absolute top-20 left-20 w-[600px] text-center inline-block text-[#ffffff] ">
                    <h1 className="text-[30px] font-bold">Novo por aqui?</h1>
                    <h2>Crie a sua conta agora mesmo.</h2>
                    <a href="create-account"><button className="rounded-[30px] w-[150px] p-2 text-white font-bold border-2 border-solid border-[#ffffff] hover:bg-white hover:text-[#45BF55] transition duration-100 ease-in-out">Criar conta</button></a>
                    
                </div>
            </div>
            <div className="bg-[white] grid place-items-center">
                <div className="w-[600px] text-center text-[#000000]">
                    <form>
                        <h1 className="m-3 text-[30px] font-bold">Log In</h1>
                        <input placeholder="login" className="bg-[#f6f6f6] text-[#45BF55] text-center text-base w-[400px] h-[60px] p-2 m-3 rounded-[30px] border-2 border-solid border-[#e8e8e8]" type="email" name="email" id="email" />
                        <input placeholder="senha" className="bg-[#f6f6f6] text-[#45BF55] text-center text-base w-[400px] h-[60px] p-2 m-3 rounded-[30px] border-2 border-solid border-[#e8e8e8]" type="password" name="senha" id="senha" />
                        <button type="submit" value="Acessar"
                        className="bg-primary w-[200px] rounded-[30px] p-2 m-5 text-white font-bold hover:bg-primaryDark transition duration-100 ease-in-out"
                    > Acessar
                    </button>
                        <a href="recuperar-senha"></a>
                    </form>
                </div>
            </div>
            
            
        </div>
    )
}