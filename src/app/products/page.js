"use client"
import {useState} from 'react';
import {productsCategory} from "@/arrays/productsCategory";
import {products} from "@/arrays/products";
import ProductCard from "@/components/ProductCard";
import ProductsFilter from "@/components/ProductsFilter";
import MyInput from "@/components/ui/MyInput";
import Notification from "@/components/ui/Notifacation";

const ProductsPage = () => {
    const [text, setText] = useState("");
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeSubcategory, setActiveSubcategory] = useState(null);
    const [message, setMessage] = useState(null);

    const toggleCategory = (categoryId) => {
        setActiveCategory(activeCategory === categoryId ? null : categoryId);
        setActiveSubcategory(null); // Сбрасываем подкатегорию при смене категории
    };

    const toggleSubcategory = (subcategoryName) => {
        setActiveSubcategory(activeSubcategory === subcategoryName ? null : subcategoryName);
    };

    const handleSearchChange = (e) => {
        setText(e.target.value);
    };

    // 1. Фильтрация по тексту
    const textFilteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(text.toLowerCase()) ||
        product.category.toLowerCase().includes(text.toLowerCase()) ||
        product.subcategory.toLowerCase().includes(text.toLowerCase())
    );

    // 2. Фильтрация по категории и подкатегории
    const filteredProducts = textFilteredProducts.filter((product) => {
        const categoryObj = productsCategory.find(cat => cat.id === activeCategory);
        const selectedCategory = categoryObj ? categoryObj.category : null;

        if (activeCategory && product.category !== selectedCategory) {
            return false;
        }

        if (activeSubcategory) {
            const subcategoryObj = categoryObj?.subcategory.find(sub => sub.subcategoryKey === activeSubcategory);
            const selectedSubcategory = subcategoryObj ? subcategoryObj.name : null;

            if (!product.subcategory.includes(selectedSubcategory)) {
                return false;
            }
        }

        return true;
    });


    return (
        <div className="container">
            {message && <Notification message={message} onClose={() => setMessage(null)}/>}

            {/* Поле поиска */}
            <div
                className="flex items-center p-3 border border-gray-300 rounded-md transition-all duration-300 focus-within:border-cyan-500">
                <img src="/icons/search.svg" alt="search" className="mr-2"/>
                <MyInput
                    id="search"
                    type="text"
                    placeholder="Что хотите найти"
                    name="search"
                    value={text}
                    onChange={handleSearchChange}
                    className="w-full p-2 text-center border-none outline-none"
                />
            </div>

            <div className={`flex flex-col items-start md:flex-row`}>
                <ProductsFilter
                    productsCategory={productsCategory}
                    activeCategory={activeCategory}
                    activeSubcategory={activeSubcategory}
                    toggleCategory={toggleCategory}
                    toggleSubcategory={toggleSubcategory}
                />

                {/* Контентная часть */}
                <div className="md:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                link={product.link}
                                src={product.src}
                                name={product.name} description={product.description}
                                price={product.price}
                                category={product.category}
                                setMessage={setMessage}
                            />
                        ))
                    ) : (
                        <p className="text-center text-2xl w-full col-span-4 text-gray-500 mt-5">Ничего не найдено</p>
                    )}
                </div>
            </div>
        </div>

    )
        ;
};

export default ProductsPage;
