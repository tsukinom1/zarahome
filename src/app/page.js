import FullScreenCard from "@/components/FullScreenCard";
import {categoryCards} from "@/arrays/categoryCards";
import ProductCard from "@/components/ProductCard";
import {homeCards} from "@/arrays/homeCards";
import SectionTitle from "@/components/SectionTitle";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import {faq} from "@/arrays/faq";
import Contacts from "@/components/Contacts";
import {howItWorks} from "@/arrays/howItWorks";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
    return (
        <div>
            <FullScreenCard src={`/home/new-arrival.jpg`} alt={`Новое поступление`}
                            title={`Новое поступление`} text={`Коллекции этого сезона`}
                            link={`/`} button={`Смотреть все новинки`}/>
            <div className={`container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5`}>
                {homeCards[0].map((card, index) => (
                    <ProductCard key={index} link={card.link} src={card.src} alt={card.alt}
                                 name={card.name} description={card.description} price={card.price}/>
                ))}
            </div>
            <FullScreenCard src={`/home/sale-70.jpg`} alt={`Скидки до 70%`}
                            title={`Скидки до 70%`} text={`На самые популярные товары`}
                            link={`/`} button={`Смотреть все скидки`}/>
            <div className={`container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5`}>
                {homeCards[1].map((card, index) => (
                    <ProductCard key={index}
                                 link={card.link}
                                 src={card.src} alt={card.alt}
                                 name={card.name} description={card.description} price={card.price}/>
                ))}
            </div>
            <SectionTitle title={`Каталог товаров`} text={``}/>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mb-10`}>
                {categoryCards.map((card, index) => (
                    <FullScreenCard
                        key={index}
                        src={card.src}
                        alt={card.alt}
                        title={card.title}
                        text={card.text}
                        link={card.link}
                        button={card.button}/>

                ))}
            </div>
            <SectionTitle title={`Как это работает`} text={`Три простых шага`}/>
                {howItWorks.map((card, index) => (
                    <HowItWorks key={index} src={card.src} alt={card.alt} text={card.text} />
                ))}
            <SectionTitle title={`Почему выбирают нас?`} text={`Наши преимущества`}/>
            <WhyUs/>
            <SectionTitle title={`Часто задаваемые вопросы`} text={`Скорее всего тут уже есть ответ и на ваш    `}/>
            {faq.map((card, index) => (
                <FAQ key={index} question={card.question} answer={card.answer}/>
            ))}
            <SectionTitle title={`Не нашли ответ на свой вопрос?`} text={`Мы всегда готовы прийти на помощь`}/>
            <Contacts/>
        </div>
    );
}
