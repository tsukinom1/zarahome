"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { productsCategory } from "@/arrays/productsCategory";
import { products } from "@/arrays/products";
import ProductCard from "@/components/ProductCard";
import ProductsFilter from "@/components/ProductsFilter";

const CategoryPage = () => {
    const { categoryKey } = useParams();
    const [activeSubcategory, setActiveSubcategory] = useState(null);

    console.log("categoryKey из useParams:", categoryKey);

    // Найдём объект категории по ключу
    const categoryObj = productsCategory.find(cat => cat.categoryKey === categoryKey);

    console.log("Выбранная категория:", categoryObj);

    if (!categoryObj) {
        return <p className="text-center text-xl text-gray-500">Категория не найдена</p>;
    }

    const categoryName = categoryObj.category;
    const subcategories = categoryObj.subcategory || [];

    return (
        <div className="container">
            <h1 className="text-2xl font-bold mb-4 capitalize">{categoryName}</h1>
            <div className="flex">
                {/* Фильтр категорий */}
                <ProductsFilter
                    productsCategory={[{
                        ...categoryObj,
                        subcategory: subcategories // Передаем массив подкатегорий
                    }]}
                    activeCategory={categoryKey}
                    activeSubcategory={activeSubcategory}
                    toggleCategory={() => setActiveSubcategory(null)}
                    toggleSubcategory={(subcategoryKey) => {
                        setActiveSubcategory(prev => prev === subcategoryKey ? null : subcategoryKey);
                    }}
                />

                {/* Список товаров */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
                    {products
                        .filter(product =>
                            product.categoryKey === categoryKey &&
                            (activeSubcategory ? product.subcategoryKey === activeSubcategory : true)
                        )
                        .map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
