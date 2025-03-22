export const products = [
    /*
    {
        id: 1,
        name: "Ортопедический матрас",
        description: "Удобный ортопедический матрас с эффектом памяти.",
        src: `/products`,
        price: 14999,
        category: "Спальня",
        subcategory: "Постельное белье",
    },
    {
        id: 2,
        name: "Кожаная кровать",
        description: "Стильная кожаная кровать с мягким изголовьем.",
        src: `/products`,
        price: 45999,
        category: "Спальня",
        subcategory: "Мебель",
        subsubcategory: "Кровати"
    },
    {
        id: 3,
        name: "Настольная лампа 'Сфера'",
        description: "Современная настольная лампа с регулировкой яркости.",
        src: `/products`,
        price: 2999,
        category: "Спальня",
        subcategory: "Освещение",
        subsubcategory: "Настольные лампы"
    },
    {
        id: 4,
        name: "Мужская кожаная куртка",
        description: "Классическая кожаная куртка для стильного образа.",
        src: `/products`,
        price: 18999,
        category: "Одежда и обувь",
        subcategory: "Мужская одежда",
        subsubcategory: "Куртки"
    },
    {
        id: 5,
        name: "Женское платье 'Лето'",
        description: "Легкое летнее платье из хлопка.",
        src: `/products`,
        price: 4999,
        category: "Одежда и обувь",
        subcategory: "Женская одежда",
        subsubcategory: "Платья"
    },
    {
        id: 6,
        name: "Спортивные кроссовки",
        description: "Удобные кроссовки для бега и повседневной носки.",
        src: `/products`,
        price: 6999,
        category: "Одежда и обувь",
        subcategory: "Обувь",
        subsubcategory: "Кроссовки"
    },
    {
        id: 7,
        name: "Диван угловой 'Комфорт'",
        description: "Просторный угловой диван с бархатной обивкой.",
        src: `/products`,
        price: 59999,
        category: "Гостиная",
        subcategory: "Диваны и кресла",
        subsubcategory: "Диваны"
    },
    {
        id: 8,
        name: "Журнальный столик 'Лофт'",
        description: "Стильный деревянный столик с металлическими ножками.",
        src: `/products`,
        price: 7999,
        category: "Гостиная",
        subcategory: "Журнальные столики",
        subsubcategory: "Деревянные"
    },
    {
        id: 9,
        name: "Люстра 'Элеганс'",
        description: "Роскошная люстра с хрустальными подвесками.",
        src: `/products`,
        price: 24999,
        category: "Гостиная",
        subcategory: "Освещение",
        subsubcategory: "Люстры"
    },
    {
        id: 10,
        name: "Набор кастрюль 'Premium'",
        description: "Комплект из 5 кастрюль с антипригарным покрытием.",
        src: `/products`,
        price: 10999,
        category: "Кухня",
        subcategory: "Посуда",
        subsubcategory: "Кастрюли"
    },
    {
        id: 11,
        name: "Чайник электрический 'БыстроКип'",
        description: "Мощный чайник с функцией поддержания температуры.",
        src: `/products`,
        price: 3499,
        category: "Кухня",
        subcategory: "Техника",
        subsubcategory: "Чайники"
    },
    {
        id: 12,
        name: "Блендер 'МиксПро'",
        description: "Высокоскоростной блендер с несколькими режимами.",
        src: `/products`,
        price: 5499,
        category: "Кухня",
        subcategory: "Техника",
        subsubcategory: "Блендеры"
    },
    {
        id: 13,
        name: "Полотенце махровое 'Люкс'",
        description: "Мягкое полотенце из 100% хлопка.",
        src: `/products`,
        price: 1299,
        category: "Ванная комната",
        subcategory: "Полотенца",
        subsubcategory: "Банные"
    },
    {
        id: 14,
        name: "Настенное зеркало 'Призма'",
        description: "Большое зеркало с подсветкой.",
        src: `/products`,
        price: 7999,
        category: "Ванная комната",
        subcategory: "Мебель",
        subsubcategory: "Зеркала"
    },
    {
        id: 15,
        name: "Парфюмерный спрей 'Свежесть'",
        description: "Ароматический спрей с нотами цитрусовых.",
        src: `/products`,
        price: 1599,
        category: "Ароматы для дома",
        subcategory: "Спреи",
        subsubcategory: "Парфюмерные спреи"
    },
    {
        id: 16,
        name: "Детская кроватка 'Соня'",
        description: "Деревянная кроватка с маятниковым механизмом.",
        src: `/products`,
        price: 13999,
        category: "Детская",
        subcategory: "Детская мебель",
        subsubcategory: "Кроватки"
    },
    {
        id: 17,
        name: "Мягкая игрушка 'Панда'",
        description: "Плюшевая панда высотой 50 см.",
        src: `/products`,
        price: 2999,
        category: "Детская",
        subcategory: "Игрушки",
        subsubcategory: "Мягкие игрушки"
    },
    {
        id: 18,
        name: "Корм для кошек 'Premium'",
        description: "Полнорационный корм для взрослых кошек.",
        src: `/products`,
        price: 1599,
        category: "Домашние животные",
        subcategory: "Для кошек",
        subsubcategory: "Корм"
    },
    {
        id: 19,
        name: "Ошейник с GPS 'PetTracker'",
        description: "Умный ошейник с GPS-трекером.",
        src: `/products`,
        price: 4999,
        category: "Домашние животные",
        subcategory: "Аксессуары",
    },

     */
    {
        id: 20,
        name: "Шторы для ванной",
        description: "Стильные и водонепроницаемые шторы для ванной.",
        src: `/products/bath-curtains.jpg`,
        link: `/products/bathroom/bath-curtains`,
        price: 1999,
        category: "Ванная комната",
        categoryKey: "bathroom",
        subcategory: "Мебель",
        subcategoryKey: "furniture"
    },
    {
        id: 21,
        name: "Банный халат",
        description: "Мягкий и уютный банный халат из натурального хлопка.",
        src: `/products/bath-robe.jpg`,
        link: `/products/bathroom/bath-robe`,
        price: 3999,
        category: "Ванная комната",
        categoryKey: "bathroom",
        subcategory: "Одежда",
        subcategoryKey: "clothing"
    },
    {
        id: 22,
        name: "Банная шапка",
        description: "Стильная шапка, идеально подходящая для защиты от жары.",
        src: `/products/cap.jpg`,
        link: `/products/bathroom/cap`,
        price: 1499,
        category: "Ванная комната",
        categoryKey: "bathroom",
        subcategory: "Одежда",
        subcategoryKey: "clothing"
    },
    {
        id: 23,
        name: "Ванный ковер",
        description: "Пушистый и мягкий ковер для уюта в вашем доме.",
        src: `/products/carpet.jpg`,
        link: `/products/bathroom/carpet`,
        price: 7999,
        category: "Ванная комната",
        categoryKey: "bathroom",
        subcategory: "Мебель",
        subcategoryKey: "furniture"
    },
    {
        id: 24,
        name: "Стул",
        description: "Эргономичный и стильный стул для комфортного сидения.",
        src: `/products/chair.jpg`,
        link: `/products/dining-room/chair`,
        price: 5999,
        category: "Столовая",
        categoryKey: "dining-room",
        subcategory: "Столы и стулья",
        subcategoryKey: "tables-chairs"
    },
    {
        id: 25,
        name: "Комнатный ароматизатор",
        description: "Элегантный ароматизатор для приятного запаха в комнате.",
        src: `/products/flavoring-dish.jpg`,
        link: `/products/home-fragrances/flavoring-dish`,
        price: 1299,
        category: "Ароматы для дома",
        categoryKey: "home-fragrances",
        subcategory: "Диффузоры",
        subcategoryKey: "diffusers"
    },
    {
        id: 26,
        name: "Мыльница",
        description: "Практичная и стильная мыльница для ванной комнаты.",
        src: `/products/soap-dish.jpg`,
        link: `/products/bathroom/soap-dish`,
        price: 899,
        category: "Ванная комната",
        categoryKey: "bathroom",
        subcategory: "Аксессуары",
        subcategoryKey: "accessories"
    },
    {
        id: 27,
        name: "Ваза",
        description: "Изящная стеклянная ваза для цветов и декора.",
        src: `/products/vase.jpg`,
        link: `/products/home/decor-vase`,
        price: 3499,
        category: "Дом",
        categoryKey: "home",
        subcategory: "Декор",
        subcategoryKey: "decor"
    }
];
