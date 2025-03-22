"use client"
import {useCart} from "@/utils/contexts/CartContext";
import CartCard from "@/components/CartCard";
import TotalCart from "@/components/TotalCart";

const Page = () => {
    const {cart, totalPrice} = useCart();

    return (
        <div className="container">
            <h1 className="text-3xl sm:text-5xl text-center sm:text-left mb-5">В вашей корзине</h1>
            {cart.length > 0 ? (
                <div className={`lg:grid lg:grid-cols-10 gap-5`}>
                    {/* Список товаров */}
                    <div className={`w-full lg:col-span-7`}>
                        {cart.map((card, index) => (
                            <CartCard key={card.id || `product ${index + 1}`}
                                      id={card.id}
                                      src={card.src}
                                      name={card.name}
                                      description={card.description}
                                      category={card.category}
                                      price={card.price}
                                      count={card.count}
                            />
                        ))}
                    </div>
                    {/* Информация о сумме и кнопка оформления */}
                    <TotalCart className={`w-full sm:w-1/2 mx-auto lg:col-span-3 text-center lg:text-start`}
                               cart={cart} totalPrice={totalPrice} button={`Перейти к оформлению`} href={`/cart/checkout`}

                    />
                </div>
            ) : (
                <h2 className="text-xl sm:text-2xl text-gray-600 mt-10">
                    Ваша корзина пуста
                </h2>
            )}
        </div>
    );
};

export default Page;
