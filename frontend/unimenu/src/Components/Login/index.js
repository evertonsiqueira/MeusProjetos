
import { Link } from "react-router-dom";
import { ButtonLogin } from "../Button";
import {  InputLogin } from "../Input";




export const Login = () =>{
    return(<div className="flex h-screen ">
        <div style={{backgroundColor:'rgb(3,95,84)'}} className="hidden md:block w-1/2">

    </div>
        <div  className="flex w-full md:w-2/4 justify-center items-center bg-white">
            <form className="w-1/8 max-w-md justify-center items-center  ">
                <h2 className="text-2xl text-teal-600 space-y-15  mb-1  ">Entrar</h2>
                
                            <InputLogin label="e-mail" type="text" color="teal"></InputLogin>
                            <InputLogin label="senha" type="password" color="teal"></InputLogin>
                            <ButtonLogin text="Entrar" size="md" className="flex items-center gap-2 px-28 text-base"color="teal">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                            </svg>
                            </ButtonLogin>

                            <Link to="/login"  className="text-sm no-italic text-gray-600 hover:underline font semibold tracking-tight flex justify-center mb-1 ">Recuperar Senha</Link>
                            <Link to="/signin"  className="text-sm no-italic text-gray-600 hover:underline font semibold tracking-tight flex justify-center mb-1 ">Cadastrar</Link>
                        
                        


                        </form>


                </div>

    </div>)
}