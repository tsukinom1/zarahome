import React from 'react';
import Link from "next/link";

const WhyUs = () => {
    return (
        <div className="container text-black relative md:pt-10">
            {/* Фоновый контейнер */}
            <div className="w-full max-w-4xl mx-auto relative shadow-lg p-10 rounded-lg">
                {/* Левое изображение */}
                <img src="/home/zara-pendant.png" alt="zara pendant"
                     className="absolute left-0 top-0 transform -translate-x-1/2 w-auto z-0" />
                {/* Правое изображение */}
                <img src="/home/zara-gerb.png" alt="zara gerb"
                     className="absolute right-0 top-[15%] transform translate-x-1/5 md:translate-x-1/4 translate-x-1/5 w-28 sm:w-36 md:w-44 lg:w-auto z-0" />
                {/* Основной контент */}
                <div className="relative z-10 bg-white shadow-lg">
                    {/* Верхний блок с преимуществами */}
                    <div className="md:flex my-10 gap-10">
                        <div className="text-right md:w-1/2">
                            <p className="text-2xl md:text-3xl font-bold mb-3">100% Оригинальный товар</p>
                            <p className="text-lg">Предоставляем чеки о покупке</p>
                        </div>
                        <div className="text-left md:w-1/2">
                            <p className="text-2xl md:text-3xl font-bold mb-3">Удобная оплата</p>
                            <p className="text-lg max-w-[80%]">Работаем через платежный терминал от Тинькофф. Принимаем карты российских банков</p>
                        </div>
                    </div>

                    {/* Блок с отзывами */}
                    <div className="text-center">
                        <p className="text-2xl md:text-3xl font-bold mb-3">О нас говорят</p>
                        <p className="text-lg">Наша команда всегда заботится о каждом клиенте и старается предоставить высококачественный сервис и максимально удобные условия сотрудничества</p>

                        {/* Статистика */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 my-7">
                            <div>
                                <p className="font-bold text-4xl sm:text-5xl">200+</p>
                                <p className="text-lg opacity-70">Доставок в этом году</p>
                            </div>
                            <div>
                                <p className="font-bold text-4xl sm:text-5xl">600</p>
                                <p className="text-lg opacity-70">Отзывов на Отзовик.ru</p>
                            </div>
                            <div>
                                <p className="font-bold text-4xl sm:text-5xl">71%</p>
                                <p className="text-lg opacity-70">Клиентов нас рекомендуют</p>
                            </div>
                        </div>

                        {/* Рейтинг и кнопка */}
                        <img src="/home/stars.svg" alt="stars" className="mx-auto my-5 w-40 sm:w-48" />
                        <Link href="/" className="flex items-center justify-center gap-2 text-lg">
                            <img src="/icons/think.svg" alt="think" className="w-6 sm:w-8"/>
                            <p className="underline">Смотреть все отзывы</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
