"use client";
import BlackButton from "@/components/ui/BlackButton";
import Link from "next/link";
import MyInput from "@/components/ui/MyInput";
import React from "react";

const TotalCart = ({ className, sell, cart, totalPrice, promoCode, setPromoCode, button, onClick, href }) => {
    const handleClick = (e) => {
        if (onClick) {
            e.preventDefault();
            onClick();
        }
    };

    return (
        <div className={`${className}`}>
            {setPromoCode && (
                <div className="flex flex-col">
                    <MyInput
                        htmlFor="promoCode"
                        labelClassName="text-gray-500 text-lg"
                        labelText="Промокод"
                        id="promoCode"
                        type="text"
                        placeholder="Введите промокод"
                        name="promoCode"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="border border-1 border-black rounded-md p-2 my-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            )}

            {sell > 0 && (
                <div>
                    <h2 className="text-gray-500 text-lg">Ваша скидка: <span className="text-red-500">{sell} %</span></h2>
                    <h2 className="text-4xl sm:text-5xl font-bold text-red-500">{Math.round(totalPrice * (sell / 100), 0)} ₽</h2>
                </div>
            )}

            <h2 className="text-gray-500 text-lg">Итого:</h2>
            {sell > 0 ? (
                <h2 className="text-4xl sm:text-5xl font-bold">{Math.round(totalPrice * (1 - sell / 100), 0)} ₽</h2>
            ) : (
                <h2 className="text-4xl sm:text-5xl font-bold">{totalPrice} ₽</h2>
            )}
            <p className="mb-5 text-gray-600">Товаров: {cart.length}</p>

            {/* Оборачиваем кнопку в Link */}
            <Link href={href} onClick={handleClick} className="w-full">
                <BlackButton type="button" className="w-full px-2">
                    {button}
                </BlackButton>
            </Link>
        </div>
    );
};

export default TotalCart;
