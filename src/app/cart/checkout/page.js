"use client";
import TotalCart from "@/components/TotalCart";
import { useCart } from "@/utils/contexts/CartContext";
import { useState, useEffect } from "react";
import AddressSelection from "@/components/AddressSelection";
import { OrderStorage } from "@/utils/storages/OrderStorage"; // Проверь путь

const CheckoutPage = () => {
    const { cart, totalPrice, clearCart } = useCart();
    const [promoCode, setPromoCode] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [orderConfirmed, setOrderConfirmed] = useState(false);

    const confirmOrder = () => {
        const orderData = {
            number: Math.floor(Math.random() * (100000 - 10000 + 1) + 1000),
            items: cart,
            total: totalPrice,
            date: new Date().toLocaleString(),
        };
        OrderStorage.saveOrder(orderData);
        clearCart();
        setOrderConfirmed(true);
        setIsModalOpen(false);
    };

    // Скрываем уведомление через 3 секунды
    useEffect(() => {
        if (orderConfirmed) {
            const timer = setTimeout(() => setOrderConfirmed(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [orderConfirmed]);

    return (
        <div className="container">
            <h1 className="text-3xl sm:text-5xl text-center sm:text-left mb-5">Оформление заказа</h1>

            <div className="lg:grid lg:grid-cols-10 lg:gap-5">
                <div className="w-full lg:col-span-7">
                    <AddressSelection />
                </div>
                <TotalCart
                    className="w-full sm:w-1/2 mx-auto lg:col-span-3 text-center lg:text-start my-10 lg:my-0"
                    promoCode={promoCode}
                    setPromoCode={setPromoCode}
                    sell={promoCode === "promo30" ? 30 : 0}
                    cart={cart}
                    totalPrice={totalPrice}
                    button="Оплатить"
                    href="/cart"
                    onClick={() => setIsModalOpen(true)}
                />
            </div>

            {/* Модальное окно подтверждения */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-5 rounded-md shadow-lg text-center">
                        <h2 className="text-xl font-bold mb-3">Подтверждение заказа</h2>
                        <p>Вы уверены, что хотите оформить заказ?</p>
                        <div className="flex justify-center space-x-4 mt-4">
                            <button
                                onClick={confirmOrder}
                                className="bg-green-500 text-white px-4 py-2 rounded-md"
                            >
                                Подтвердить
                            </button>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="bg-gray-300 px-4 py-2 rounded-md"
                            >
                                Отмена
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Уведомление об успешном заказе */}
            {orderConfirmed && (
                <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg transition-opacity animate-fade-in">
                    Заказ успешно оформлен!
                </div>
            )}
        </div>
    );
};

export default CheckoutPage;
