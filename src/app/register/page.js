"use client"
import React, {useState, useRef, useContext, useEffect} from 'react';
import {useRouter} from "next/navigation";
import Link from "next/link";
import LoginContext from "@/utils/contexts/LoginContext";
import BlackButton from "@/components/ui/BlackButton"
import MyInput from "@/components/ui/MyInput";
import {validateRegister} from "@/utils/validateRegister";
import {loginStorage} from "@/utils/storages/LoginStorage";

const RegisterPage = () => {
    const router = useRouter();
    const {user, setUser} = useContext(LoginContext);
    const [isSended, setIsSended] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [errors, setErrors] = useState({email: ""});
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const inputsRef = useRef([]); // Массив ссылок на инпуты

    useEffect(() => {
        if (isSended) {
            setTimeout(() => {inputsRef.current[0]?.focus()}, 500);
        }
    }, [isSended]);


    const sendLogin = () => {
        if (validateRegister(user.email, user.password, setErrors, isConfirmed)) { // Проверяем только e-mail
            setIsSended(true);
            setUser((prev) => ({...prev, email: user.email}));
        }
    };

    const register = (e) => {
        e.preventDefault();
        if (validateRegister(user.email, user.password, setErrors, isConfirmed)) {
            alert('Поздравляем! Вы успешно зарегистрировались');
            setUser({email: user.email, password: user.password});
            loginStorage(user.email, user.password, true);
            router.replace('/');
        }
    };

    const confirm = (e) => {
        e.preventDefault();
        if (code.join("").length !== 6) {
            alert("Введите полный код!");
        }else {
            alert(`Почта успешно подтверждена`);
            setIsConfirmed(true);
            setIsSended(false);
        }
    };

    const handleCodeChange = (index, value) => {
        if (!/^\d?$/.test(value)) return; // Разрешаем ввод только одной цифры
        setCode(prev => prev.map((c, i) => (i === index ? value : c)));
        if (value && index < code.length - 1) {
            inputsRef.current[index + 1]?.focus(); // Переход к следующему полю
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputsRef.current[index - 1]?.focus(); // Переход к предыдущему полю при Backspace
        }
    };

    return (
        <div className="fixed z-10 inset-0 flex items-center justify-center bg-black/50">
            <form className="bg-white p-6 rounded-lg shadow-lg w-96 flex flex-col gap-4">
                {/* Кнопка закрытия */}
                <button className="self-end text-gray-500 hover:text-gray-700">
                    <Link href={`/`}>✖</Link>
                </button>

                {/* Иконка профиля */}
                <div className="flex flex-col items-center">
                    <img src={`/icons/profile.svg`} alt="profile" className="w-16 h-16"/>
                    <p className="text-lg font-semibold mt-2">Регистрация</p>
                </div>

                {/* Поле Email */}
                <MyInput htmlFor={`register-email`} labelClassName={`text-gray-700 text-sm`} labelText={`Ваш E-mail`}
                         id={`register-email`} type={`email`} placeholder={`Email`} name={`email`}
                         value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}
                         className={`border border-1 border-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}


                {isConfirmed && (
                    <MyInput htmlFor={`register-password`} labelClassName={`text-gray-700 text-sm`}
                             labelText={`Ваш пароль`}
                             id={`register-password`} type={`password`} placeholder={`Придумайте пароль`}
                             name={`password`}
                             value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}
                             className={`border border-1 border-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
            )}
                {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}

                <BlackButton type="button"
                             onClick={isConfirmed ? register : sendLogin}>{isConfirmed ? 'Зарегистрироваться' : 'Отправить e-mail'}</BlackButton>

                {isSended && (
                    <div>
                        <p className="text-center my-2">
                            На указанный вами адрес было отправлено письмо с подтверждением,
                            перейдите по ссылке или введите проверочный код
                        </p>
                        <div className="grid grid-cols-6 gap-2">
                            {code.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) => (inputsRef.current[index] = el || inputsRef.current[index])}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleCodeChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    className="h-16 border border-1 border-black text-center text-xl"
                                />
                            ))}
                        </div>

                        <BlackButton type="button" className="w-full my-3" onClick={confirm}>
                            Подтвердить
                        </BlackButton>
                        <p className="text-center opacity-50">или</p>
                    </div>
                )}
                <BlackButton type="button">
                    <Link href={`/login`}>Войти</Link>
                </BlackButton>
            </form>
        </div>
    );
};

export default RegisterPage;
