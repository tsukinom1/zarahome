import {FaTelegramPlane, FaVk, FaYandex} from "react-icons/fa";

export const contacts = [
    {
        id: 1,
        icon: <FaTelegramPlane className="text-4xl" />,
        title: "Задайте его нам",
        description: "Напишите в наш Telegram",
        link: "https://t.me/yourchannel",
    },
    {
        id: 2,
        icon: <FaYandex className="text-4xl" />,
        title: "Наши статьи в Дзен",
        description: "Все самое полезное для вас мы собрали тут",
        link: "https://dzen.ru/yourpage",
    },
    {
        id: 3,
        icon: <FaVk className="text-4xl" />,
        title: "Присоединяйтесь",
        description: "Наше сообщество с радостью вас примет",
        link: "https://vk.com/yourgroup",
    },
];