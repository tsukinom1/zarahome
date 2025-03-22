"use client"
import React, {useContext, useState} from 'react';
import Link from "next/link";
import BlackButton from "@/components/ui/BlackButton";
import {useRouter} from "next/navigation";
import LoginContext from "@/utils/contexts/LoginContext";
import MyInput from "@/components/ui/MyInput";
import {validateRegister} from "@/utils/validateRegister";

const ForgotPasswordPage = () => {
    const router = useRouter();
    const {user, setUser} = useContext(LoginContext);
    const [isRecover, setIsRecover] = useState(false);
    const [errors, setErrors] = useState({email: ""});

    const sendLogin = () => {
        if (validateRegister(user.email, user.password, setErrors)) {
            setIsRecover(true);
            setTimeout(() => {
                router.replace("/login");
            }, 60000)
        }
    }
    return (
        <div className={`fixed z-10 inset-0 flex items-center justify-center bg-black/50`}>
            <form className={`bg-white p-6 rounded-lg shadow-lg w-96 flex flex-col gap-4`}>
                {/* Кнопка закрытия */}
                <button className={`self-end text-gray-500 hover:text-gray-700`}>
                    <Link href={`/`}>✖</Link>
                </button>

                {/* Иконка профиля */}
                <div className={`flex flex-col items-center`}>
                    <img src={`/icons/password.svg`} alt="profile" className="w-16 h-16"/>
                    <p className={`text-lg font-semibold mt-2`}>Восстановление пароля</p>
                </div>

                {/* Поле Email */}
                <MyInput htmlFor={`forgot-password-email`} labelClassName={`text-gray-700 text-sm`}
                         labelText={`Ваш E-mail`}
                         id={`forgot-password-email`} type={`email`} name={`email`} placeholder={`Email`}
                         value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}
                         className={`border border-1 border-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

                <BlackButton type={`button`} onClick={(sendLogin)}>Восстановить</BlackButton>
                {isRecover && (
                    <p className={`text-center my-2`}>
                        На указанный вами адрес было отправлено письмо с инструкциями по восстановлению пароля
                    </p>
                )}
            </form>
        </div>
    )
};

export default ForgotPasswordPage;
