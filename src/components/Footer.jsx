import Link from "next/link";

const Footer = () => {
    return (
        <footer className={`container`}>
            <ul className={`grid grid-col-2 md:grid-cols-4 gap-5`}>
                <li className={`col-span-2`}>
                    <p className={`mb-3 font-bold text-[18px]`}>Магазин</p>
                    <ul className={`grid grid-cols-2 gap-2 opacity-70`}>
                        <li><Link href={`/`}>Спальня</Link></li>
                        <li><Link href={`/`}>Одежда и обувь</Link></li>
                        <li><Link href={`/`}>Гостиная</Link></li>
                        <li><Link href={`/`}>Гостиная</Link></li>
                        <li><Link href={`/`}>Ванная комната</Link></li>
                        <li><Link href={`/`}>Экстра</Link></li>
                        <li><Link href={`/`}>Для детей</Link></li>
                    </ul>
                </li>
                <li>
                    <p className={`mb-3 font-bold text-[18px]`}>Помощь</p>
                    <ul className={`grid gap-2 opacity-70`}>
                        <li><Link href={`/`}>Информация о сроках доставки</Link></li>
                        <li><Link href={`/`}>Пользовательское соглашение</Link></li>
                    </ul>
                </li>
                <li>
                    <p className={`mb-3 font-bold text-[18px]`}>Контакты</p>
                    <Link href={`/`} className={`mt-2 opacity-70`}>info@зарахоум.рф</Link>
                </li>
            </ul>
            <div className={`text-center my-5`}>
                <p className={`opacity-50`}>Содержание этого сайта защищено авторским правом и является собственностью ZARAHOME. ZARAHOME
                    стремится к доступности.</p>
                <Link href={`/`}><img src={`/icons/logo.svg`} alt={`Logo`} className={`my-3 mx-auto`}/></Link>
                <p className={``}>© 2023 ZARAHOME. Все прова защищены.</p>
            </div>
        </footer>
    );
};

export default Footer;