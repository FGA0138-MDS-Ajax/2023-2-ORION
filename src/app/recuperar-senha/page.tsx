export default function recuperar() {
    return (

        <div className="grid grid-cols-[1fr_1fr] w-screen">
            <div className="bg-[green] h-screen">
                <div>
                    <h1>Não tem uma conta?</h1>
                </div>
            </div>
            <div className="bg-[white] grid place-items-center">
                <div className="w-[600px] text-center text-[#000000]">
                    <form>
                        <h1 className="m-3 text-[30px]">Log In</h1>
                        <input placeholder="login" className="bg-[#f6f6f6] text-[#45BF55] text-center text-base w-[400px] h-[60px] p-2 m-3 rounded-[30px] border-2 border-solid border-[#e8e8e8]" type="email" name="email" id="email" />
                        <input placeholder="senha" className="bg-[#f6f6f6] text-[#45BF55] text-center text-base w-[400px] h-[60px] p-2 m-3 rounded-[30px] border-2 border-solid border-[#e8e8e8]" type="password" name="senha" id="senha" />
                        <button type="submit" value="Acessar"
                        className="bg-primary w-[200px] rounded-[30px] p-2 m-5 text-white font-bold hover:bg-primaryDark transition duration-100 ease-in-out"
                    > Acessar
                    </button>
                        <a href="recuperar-senha">ddddddddd</a>
                    </form>
                </div>
            </div>
            
            
        </div>
    )
}