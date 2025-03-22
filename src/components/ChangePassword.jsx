"use client"
import MyInput from "@/components/ui/MyInput";
import React, { useContext, useState } from "react";
import { LoginContext } from "@/utils/contexts/LoginContext";
import { loginStorage } from "@/utils/storages/LoginStorage";
import Notification from "@/components/ui/Notifacation";
import { useRouter } from "next/navigation";

const ChangePassword = () => {
    const router = useRouter();
    const { user, setUser } = useContext(LoginContext);
    const [passwords, setPasswords] = useState({ oldPassword: "", newPassword: "", repeatNewPassword: "" });
    const [errors, setErrors] = useState({ oldPassword: "", newPassword: "", repeatNewPassword: "" });
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        setPasswords({ ...passwords, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" }); // Сбрасываем ошибку при изменении
    };

    const handleSubmit = () => {
        let newErrors = { oldPassword: "", newPassword: "", repeatNewPassword: "" };
        let isValid = true;

        // Проверка старого пароля
        if (passwords.oldPassword !== user.password) {
            newErrors.oldPassword = "Старый пароль введён неверно!";
            isValid = false;
        }

        // Проверка нового пароля
        if (passwords.newPassword.length < 8) {
            newErrors.newPassword = "Пароль должен быть не менее 8 символов";
            isValid = false;
        }

        if (passwords.newPassword !== passwords.repeatNewPassword) {
            newErrors.repeatNewPassword = "Пароли не совпадают!";
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            setUser({ ...user, password: passwords.newPassword });
            loginStorage(user.email, passwords.newPassword, true);
            setMessage("Пароль успешно изменен");
            router.replace("/profile");
        }
    };

    return (
        <div>
            {message && <Notification message={message} onClose={() => setMessage(null)} />}
            <h1 className="text-3xl font-bold mb-5">Сменить пароль</h1>
            <div className={`items-center justify-between ${!user.email ? "text-center" : ""}`}>
                <div className="mb-4">
                    <MyInput
                        htmlFor="old-password"
                        labelClassName="text-gray-700 text-sm"
                        labelText="Старый пароль"
                        id="old-password"
                        type="password"
                        placeholder="Введите старый пароль"
                        name="oldPassword"
                        value={passwords.oldPassword}
                        onChange={handleChange}
                        className="flex flex-col border border-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-[300px]"
                    />
                    {errors.oldPassword && <p className="text-red-500 text-sm mt-1">{errors.oldPassword}</p>}
                </div>
                <div className="mb-4">
                    <MyInput
                        htmlFor="new-password"
                        labelClassName="text-gray-700 text-sm"
                        labelText="Новый пароль"
                        id="new-password"
                        type="password"
                        placeholder="Введите новый пароль"
                        name="newPassword"
                        value={passwords.newPassword}
                        onChange={handleChange}
                        className="flex flex-col border border-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-[300px]"
                    />
                    {errors.newPassword && <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>}
                </div>
                <div className="mb-4">
                    <MyInput
                        htmlFor="repeat-new-password"
                        labelClassName="text-gray-700 text-sm"
                        labelText="Повторите новый пароль"
                        id="repeat-new-password"
                        type="password"
                        placeholder="Повторите новый пароль"
                        name="repeatNewPassword"
                        value={passwords.repeatNewPassword}
                        onChange={handleChange}
                        className="flex flex-col border border-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-[300px]"
                    />
                    {errors.repeatNewPassword && <p className="text-red-500 text-sm mt-1">{errors.repeatNewPassword}</p>}
                </div>
            </div>
            <button
                onClick={handleSubmit}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
                Сохранить пароль
            </button>
        </div>
    );
};

export default ChangePassword;
