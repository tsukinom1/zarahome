"use client";

import { useParams } from "next/navigation";
import { products } from "@/arrays/products";
import ProductCard from "@/components/ProductCard";

const SubcategoryPage = () => {
    const { categoryKey, subcategoryKey } = useParams(); // Получаем параметры

    console.log("categoryKey:", categoryKey, "subcategoryKey:", subcategoryKey); // Проверка

    const filteredProducts = products.filter(
        product =>
            product.categoryKey.toLowerCase().replace(/\s/g, "") === categoryKey &&
            product.subcategoryKey.toLowerCase().replace(/\s/g, "") === subcategoryKey
    );

    return (
        <div className="container">
            <h1 className="text-2xl font-bold mb-4 capitalize">
                {categoryKey} - {subcategoryKey}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))
                ) : (
                    <p className="text-center col-span-3">Нет товаров в этой подкатегории</p>
                )}
            </div>
        </div>
    );
};

export default SubcategoryPage;
