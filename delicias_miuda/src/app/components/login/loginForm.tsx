"use client"
import FormSubmitButton from "../systemComponents/formSubmitButton"
import Link from 'next/link';
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

import handleApiResponse from "../../../hooks/requestValidation";
import { Alert } from "@mui/material";
import { setCookie } from "nookies";
import { login } from "../../../hooks/login/api";

const LoginForm: React.FC = () => {

    const [showPassword, setShowPassword] = useState(false);


    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };



    async function loginAction(formData: FormData) {
        const loginData = {
            email: formData.get('email'),
            password: formData.get('password')
        }

        const response = await login(loginData)
        console.log(response.data)
        const result = handleApiResponse(response)
        if (result.status === 'ok') {


            setCookie(null, 'token', response.data.accessToken, {
                maxAge: 60 * 60 * 24 * 7,
                path: '/',
            });
            window.location.href = '/painel'
        } else {

        }
        

    }

    return (
        <form action={loginAction} className="w-full flex flex-col justify-around h-full font-sans">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1 w-full">
                    <label className="text-sm text-slate-600 font-semibold">Usuário</label>
                    <input
                        name="email"
                        className="rounded-lg px-2 py-1 outline-none border border-slate-600  focus:ring-0"
                        placeholder="Digite o seu email"
                    />
                </div>

                <div className="flex flex-col gap-1 w-full relative">
                    <label className="text-sm text-slate-600 font-semibold">Senha</label>
                    <div className="relative flex items-center border border-slate-600 rounded-lg">
                        <input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            className="px-2 py-1 flex-grow outline-none border-none rounded-lg focus:ring-0"
                            placeholder="Digite sua senha"
                        />
                        <button
                            type="button"
                            className="text-slate-600 px-0.5"
                            onClick={handleTogglePasswordVisibility}
                        >
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <div className="flex flex-col items-center w-full">
                        <FormSubmitButton
                            isFull
                            buttonColor="bg-yellow-800 hover:bg-yellow-950"
                            action="Login"
                            waiting="Validando suas informações"
                        />
                    </div>
                </div>

                <Link
                    className="text-center font-semibold text-sm text-yellow-800 hover:underline"
                    href="/recovery"
                >
                    Esqueci a minha senha
                </Link>
            </div>
        </form>
    )
}

export default LoginForm