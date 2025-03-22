"use client";
import React, {useContext, useState} from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import BlackButton from "@/components/ui/BlackButton";
import {validateLogin} from "@/utils/validateLogin";
import MyInput from "@/components/ui/MyInput";
import {LoginContext} from "@/utils/contexts/LoginContext";
import {loginStorage} from "@/utils/storages/LoginStorage";

const LoginPage = () => {
    const router = useRouter();
    const {user, setUser} = useContext(LoginContext);
    const [errors, setErrors] = useState({ email: "", password: "" });
    const [isChecked, setIsChecked] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateLogin(user.email, user.password, setErrors)) {
            alert("Вход успешно прошел");
            setUser({email: user.email, password: user.password, isAuth: true});
            loginStorage(user.email, user.password, true);
            router.replace("/");
        }
    };

    return (
        <div className="fixed z-10 inset-0 flex items-center justify-center bg-black/50">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96 flex flex-col gap-4">
                {/* Кнопка закрытия */}
                <button className="self-end text-gray-500 hover:text-gray-700">
                    <Link href={`/`}>✖</Link>
                </button>

                {/* Иконка профиля */}
                <div className="flex flex-col items-center">
                    <img src="/icons/profile.svg" alt="profile" className="w-16 h-16" />
                    <p className="text-lg font-semibold mt-2">Войти</p>
                </div>

                {/* Поле Email */}
                <MyInput htmlFor={`login-email`} labelClassName={`text-gray-700 text-sm`} labelText={`Ваш E-mail`}
                         id={`login-email`} type={`email`} placeholder={`Email`} name={`email`}
                         value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}
                         className={`border border-1 border-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />

                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

                {/* Поле Пароль */}
                <MyInput htmlFor={`login-password`} labelClassName={`text-gray-700 text-sm`} labelText={`Ваш пароль`}
                         id={`login-password`} type={isChecked ? 'text' : 'password'} placeholder={`Password`} name={`password`}
                         value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}
                         className={`border border-1 border-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
                <button type={`button`} onClick={() => setIsChecked(isChecked => !isChecked)}>Показать пароль</button>
                {/* Кнопка входа */}
                <BlackButton type="submit" disabled={!user.email || !user.password}>Войти</BlackButton>

                {/* Восстановление пароля */}
                <Link href="/forgot-password" className="text-blue-500 text-sm text-center hover:underline">
                    Забыли свой пароль?
                </Link>

                {/* Разделитель */}
                <div className="relative flex items-center"> {/* ✅ Исправлено "items-center" */}
                    <div className="flex-grow border-t"></div>
                    <span className="mx-3 text-gray-500 text-sm">или</span>
                    <div className="flex-grow border-t"></div>
                </div>

                {/* Кнопка регистрации */}
                <BlackButton type="button">
                    <Link href="/register">Зарегистрироваться</Link>
                </BlackButton>
            </form>
        </div>
    );
};

export default LoginPage;
