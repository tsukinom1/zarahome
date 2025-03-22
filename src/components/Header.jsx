"use client"
import Link from "next/link";
import {useContext, useEffect, useState} from "react";
import {motion} from "framer-motion";
import {getUserFromStorage} from "@/utils/storages/LoginStorage";
import {LoginContext} from "@/utils/contexts/LoginContext";
import {useCart} from "@/utils/contexts/CartContext";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {user, setUser} = useContext(LoginContext);
    const [firstLetter, setFirstLetter] = useState(null);
    const {cart} = useCart()
    const totalItems = cart.reduce((acc, item) => acc + item.count, 0);


    useEffect(() => {
        const storedUser = getUserFromStorage(); // Исправлено (убран аргумент user)
        if (storedUser?.isAuth) {
            setUser(storedUser);
            setFirstLetter(storedUser.email[0].toUpperCase()); // Теперь firstLetter хранится в useState
        }
    }, []);

    return (
        <header className={`container py-5`}>
            <nav className={``}>
                <div className={`flex justify-start gap-x-3 items-center md:justify-between md:items-start `}>
                    <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                        <img src="/icons/menu.svg" alt="Меню" className="h-10"/>
                    </button>
                    <div className={`hidden lg:block lg:w-1/3`}>
                        <Link href={`tel:8(800)0008000`} className={`link text-2xl `}>8 (800) 000 80 00</Link>
                        <p className={`opacity-70 text-sm`}>Работаем сегодня с 9:00 до 20:00</p>
                    </div>
                    <div className={`lg:w-1/3`}>
                        <Link className={`link`} href={`/`}>
                            <img src={`/icons/logo.svg`} alt="logo" className="mx-auto"/>
                        </Link>
                    </div>
                    <div className={`lg:w-1/3 flex justify-end`}>
                        <ul className={`hidden md:flex items-center gap-5`}>
                            <li>
                                {firstLetter ? (
                                    <Link
                                        className="w-10 h-10 flex items-center justify-center bg-gray-500 text-white text-2xl font-bold rounded-full"
                                        href="/profile"
                                    >
                                        {firstLetter}
                                    </Link>
                                ) : (
                                    <Link className="link" href="/login">
                                        <img src="/icons/profile.svg" alt=""/>
                                    </Link>
                                )}
                            </li>
                            <li><Link className={`link`} href={`/faw`}><img src={`/icons/faw.svg`} alt=""/></Link></li>
                            <li className={`relative`}>
                                <Link className="link" href="/cart">
                                    <img src="/icons/cart.svg" alt="Корзина" className="w-6 h-6"/>

                                    {/* Бейдж с количеством товаров */}
                                    {totalItems > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                            {totalItems}
                                        </span>
                                    )}
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
                {isOpen && (
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: 50}}
                        transition={{duration: 0.5}}
                        className="absolute top-16 left-[5%] w-full bg-white shadow-md z-10 lg:hidden"
                    >
                        <ul className="pl-5 pb-5">
                            <li className={`mt-5`}><Link className={`link`} href={`/cart`}>Корзина</Link></li>
                            <li className={`mt-5`}><Link className={`link`} href={`/products`}>Все товары</Link></li>
                            <li className={`mt-5`}><Link className={`link`} href={`/`}>Скидки</Link></li>
                            <li className={`mt-5`}><Link className={`link`} href={`/`}>Новинки</Link></li>
                            <li className={`mt-5`}><Link className={`link`} href={`/information`}>Информация</Link></li>
                            <li className={`mt-5`}><Link href={`tel:8(800)0008000`} className={`link`}>Позвонить</Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
                <div className={`hidden lg:block mx-auto w-fit`}>
                    <ul className={`flex items-center gap-5`}>
                        <li><Link className={`link`} href={`/products`}>Все товары</Link></li>
                        <li><Link className={`link`} href={`/`}>Скидки</Link></li>
                        <li><Link className={`link`} href={`/`}>Новинки</Link></li>
                        <li><Link className={`link`} href={`/information`}>Информация</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
