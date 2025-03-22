import BlackButton from "@/components/ui/BlackButton";
import Link from "next/link";

const FullScreenCard = ({ src, alt, title, text, link, button }) => {
    return (
        <div className="relative w-full my-10">
            {/* Фоновое изображение */}
            <img src={src} alt={alt} className="w-full min-h-[300px] object-cover " />

            {/* Текстовый блок поверх изображения */}
            <div className="absolute z-10 inset-x-0 top-4/5 -translate-y-1/2 bg-white py-5 lg:py-5 text-center rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-3/5 max-w-[500px] mx-auto">
                <h1 className="text-lg md:text-2xl font-semibold">{title}</h1>
                <p className="text-gray-600 mb-3">{text}</p>

                <Link href={link} className="">
                    <BlackButton className="px-5 md:px-10">{button}</BlackButton>
                </Link>
            </div>
        </div>
    );
};

export default FullScreenCard;
