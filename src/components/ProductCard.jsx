"use client"
import BlackButton from "@/components/ui/BlackButton";
import {useCart} from "@/utils/contexts/CartContext";


const ProductCard = ({src, alt, name, description, price, id, setMessage}) => {
    const {addToCart} = useCart();
    const handleAddToCart = () => {
        const product = {
            id, src, alt, name,
            description, price, count: 1,
        };
        addToCart(product);
        setMessage(`Товар "${name}" добавлен в корзину!`);
    };

    return (
        <div className="w-full my-5 flex flex-col justify-between">
            {/* Контейнер с изображением */}
            <div className={`relative`}>
                <img className={`w-full`} src={src} alt={alt}/>
                <BlackButton type={`button`} className={`absolute z-10 p-3 bottom-0 right-0`}>
                    <img src={`/icons/faw-white.svg`} alt={`faw icon`}
                         className={`px-3`}/>
                </BlackButton>
            </div>

            {/* Контейнер с текстом */}
            <div className="flex flex-col flex-grow">
                <h1 className="text-md xl:text-lg underline font-bold uppercase mb-1">{name}</h1>
                <h2 className="text-md xl:text-lg opacity-70">{description}</h2>
            </div>

            {/* Контейнер с ценой и кнопкой */}
            <div className="flex justify-between items-center mt-auto">
                <p className="text-gray-600 text-md xl:text-lg font-bold">{price}₽</p>
                <BlackButton type="button" className="p-2" onClick={handleAddToCart}>
                    <p className="text-sm">В корзину</p>
                    <img src="/icons/cart-white.svg" alt="cart icon"/>
                </BlackButton>
            </div>
        </div>
    );
};

export default ProductCard;
