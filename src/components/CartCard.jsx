"use client";

import {useCart} from "@/utils/contexts/CartContext";

const CartCard = ({src, name, category, description, price, count, id}) => {
    const {increaseCount, decreaseCount, removeFromCart} = useCart();

    return (
        <div className="flex flex-col lg:flex-row justify-between items-center my-2 p-2">
            {/* Левая часть - изображение и описание + кнопки управления при < lg */}
            <div className="flex flex-row items-center gap-x-4 w-full lg:w-auto">
                <img
                    src={src}
                    alt={name}
                    className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[80px] lg:h-[80px] object-cover rounded-md"
                />
                <div className="flex flex-col items-start w-full">
                    <div className="flex items-center justify-between w-full">
                        <div>
                            <h1 className="text-sm sm:text-base lg:text-xl font-bold uppercase">{name}</h1>
                            <p className="text-xs sm:text-sm text-gray-500">{category}</p>
                        </div>
                        {/* Удаление элемента (крестик) на мобильных */}
                        <button
                            onClick={() => removeFromCart(id)}
                            className="md:hidden w-6 h-6 flex items-center justify-center text-lg font-bold text-gray-500 hover:text-red-500 transition"
                        >
                            ×
                        </button>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">{description}</p>

                    {/* Кнопки управления при < lg */}
                    <div className="flex items-center gap-x-2 mt-2 lg:hidden">
                        <button
                            onClick={() => decreaseCount(id)}
                            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-lg font-bold border border-gray-400 rounded-md hover:bg-gray-300 transition"
                        >
                            -
                        </button>
                        <p className="text-sm sm:text-lg w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-400 rounded-md">
                            {count}
                        </p>
                        <button
                            onClick={() => increaseCount(id)}
                            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-lg font-bold border border-gray-400 rounded-md hover:bg-gray-300 transition"
                        >
                            +
                        </button>
                        <p className="text-sm sm:text-lg font-semibold">{price * count} ₽</p>

                    </div>
                </div>
            </div>

            {/* Кнопки управления при >= lg */}
            <div className="hidden lg:flex items-center gap-x-3">
                <button
                    onClick={() => decreaseCount(id)}
                    className="w-10 h-10 flex items-center justify-center text-xl font-bold border border-gray-400 rounded-md hover:bg-gray-300 transition"
                >
                    -
                </button>
                <p className="text-lg w-10 h-10 flex items-center justify-center border border-gray-400 rounded-md">
                    {count}
                </p>
                <button
                    onClick={() => increaseCount(id)}
                    className="w-10 h-10 flex items-center justify-center text-xl font-bold border border-gray-400 rounded-md hover:bg-gray-300 transition"
                >
                    +
                </button>
                <p className="text-lg w-[70px] font-semibold">{price * count} ₽</p>
                <button
                    onClick={() => removeFromCart(id)}
                    className="w-10 h-10 flex items-center justify-center text-xl font-bold text-gray-500 hover:text-red-500 transition"
                >
                    ×
                </button>
            </div>
        </div>

    );
};

export default CartCard;
