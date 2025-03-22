"use client";
import {useState, useEffect} from "react";
import {OrderStorage} from "@/utils/storages/OrderStorage";

const ProfileOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setOrders(OrderStorage.getOrders()); // Загружаем заказы из хранилища
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-5">Мои заказы</h1>
            {orders.length === 0 ? (
                <p>У вас пока нет заказов.</p>
            ) : (
                orders.map((order, index) => <OrderItem key={index} order={order}/>)
            )}
        </div>
    );
};

const OrderItem = ({order}) => {
    const [isFull, setIsFull] = useState(false);

    return (
        <div className="border p-4 mb-4 rounded-lg shadow-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
                <p className="text-lg font-bold">Заказ: № {order.number || "—"}</p>
                <div>
                    <p className="text-gray-600">Сформирован: {order.date}</p>
                    <p className="text-gray-800 font-semibold">
                        Статус: <span className="text-blue-500">{order.status || "оплачен"}</span>
                    </p>
                </div>
                <div className="">
                    <p>Товаров: {order.items.length}</p>
                    <p className="text-md">Сумма: {order.total} ₽</p>
                </div>
                <button
                    onClick={() => setIsFull(!isFull)}
                    className="text-blue-500 underline text-start"
                >
                    {isFull ? "Скрыть" : "Подробнее"}
                </button>
            </div>

            {isFull && (
                <div className="mt-4">
                    {order.items.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col sm:flex-row justify-between items-center border-b py-3 space-y-3 sm:space-y-0 sm:space-x-4"
                        >
                            {/* Блок с картинкой и описанием */}
                            <div className="flex  items-center space-x-4 w-full sm:w-full">
                                <img
                                    src={item.src || "/placeholder.jpg"}
                                    alt={item.name}
                                    className="w-20 h-20 sm:w-28 sm:h-28 object-cover rounded-md"
                                />
                                <div className="flex-1">
                                    <p className="font-bold text-md sm:text-base">{item.name}</p>
                                    <p className="text-gray-500 text-md sm:text-sm">{item.description}</p>
                                    <div className="flex gap-x-4 sm:hidden ">
                                        <p className="font-semibold text-md sm:text-base">{item.count} шт</p>
                                        <p className="font-semibold text-md sm:text-base">{item.price} ₽</p>
                                    </div>
                                </div>
                                <div
                                    className="hidden sm:flex sm:flex-row sm:space-x-4 items-center sm:items-center w-full sm:w-auto text-center sm:text-right">
                                    <p className="font-semibold text-sm sm:text-base">{item.count} шт</p>
                                    <p className="font-semibold text-sm sm:text-base">{item.price} ₽</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            )}
        </div>
    );
};

export default ProfileOrder;
