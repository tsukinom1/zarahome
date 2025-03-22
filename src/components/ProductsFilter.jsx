import React from 'react';

const ProductsFilter = ({ productsCategory, activeCategory, activeSubcategory, toggleCategory, toggleSubcategory }) => {
    return (
        <div className="md:w-1/5 border-r border-gray-300 pr-4">
            {productsCategory.map((productCategory) => (
                <div key={productCategory.id} className="mb-3">
                    {/* Категория */}
                    <div
                        className={`hover:translate-x-2 hover:bg-gray-300 transition-all duration-500 cursor-pointer border-l-2 border-black font-semibold text-lg px-2 py-3 ${
                            activeCategory === productCategory.id ? 'bg-gray-200' : 'bg-gray-100 hover:bg-gray-200'
                        } rounded-md`}
                        onClick={() => toggleCategory(productCategory.id)}
                    >
                        {productCategory.category}
                    </div>

                    {/* Подкатегории */}
                    {activeCategory === productCategory.id && productCategory.subcategory.length > 0 && (
                        <div className="ml-4 mt-2">
                            {productCategory.subcategory.map((subcategory) => (
                                <div key={subcategory.subcategoryKey} className="mb-1">
                                    <div
                                        className={`hover:translate-x-2 hover:bg-gray-300 transition-all duration-500 border-l-2 border-gray-500 cursor-pointer text-md p-2 ${
                                            activeSubcategory === subcategory.subcategoryKey ? 'bg-gray-200' : 'bg-gray-50 hover:bg-gray-100'
                                        } rounded-md`}
                                        onClick={() => toggleSubcategory(subcategory.subcategoryKey)}
                                    >
                                        {subcategory.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProductsFilter;
