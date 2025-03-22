const InformationPage = () => {
    return (
        <div className="container mx-auto p-6 text-gray-800">
            <h1 className="text-3xl font-bold mb-1 text-center">
                Интернет-магазин <span className="text-blue-600">ZARAHOME</span> предлагает широкий ассортимент товаров
                для дома.
            </h1>
            <p className="text-lg text-center mb-6">
                Мы собрали лучшие коллекции мебели, текстиля и аксессуаров, чтобы сделать ваш дом уютнее и стильнее.
            </p>
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5`}>
                <div className={`px-5`}>
                    <h2 className="text-2xl font-semibold mb-3">Почему выбирают нас?</h2>
                    <ul className="list-disc list-inside space-y-2 mb-6">
                        <li><span className="font-medium">Широкий ассортимент:</span> более 10 000 товаров в наличии
                        </li>
                        <li><span className="font-medium">Качественные материалы:</span> натуральное дерево, хлопок, лен
                            и
                            другие премиальные ткани
                        </li>
                        <li><span className="font-medium">Доставка по всей России:</span> быстрые сроки доставки в ваш
                            регион
                        </li>
                        <li><span className="font-medium">Простота оформления заказа:</span> удобный интерфейс и
                            множество
                            способов оплаты
                        </li>
                    </ul>
                </div>
                <div className={`px-5`}>

                    <h1 className="text-3xl font-bold mb-4">Наша продукция</h1>

                    <h2 className="text-2xl font-semibold mb-2">Мебель и интерьер</h2>
                    <ul className="list-disc list-inside space-y-2 mb-6">
                        <li>Столы, стулья, комоды, полки, шкафы</li>
                        <li>Декор для гостиной, спальни и ванной комнаты</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mb-2">Текстиль</h2>
                    <ul className="list-disc list-inside space-y-2 mb-6">
                        <li>Постельное белье из натуральных тканей</li>
                        <li>Полотенца, пледы, скатерти и шторы</li>
                    </ul>
                </div>
                <div className={`px-5`}>
                    <h1 className="text-3xl font-bold mb-4">Как оформить заказ?</h1>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>Выберите товар и добавьте его в корзину</li>
                        <li>Укажите контактные данные и выберите способ оплаты</li>
                        <li>Ожидайте подтверждение и доставку</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default InformationPage;
