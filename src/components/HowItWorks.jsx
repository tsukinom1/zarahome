const HowItWorks = ({src, alt, text}) => {

    return (
        <div className={`container lg:w-1/2 mx-auto text-center flex flex-col justify-center items-center py-5`}>
            <img className={`w-[70px] h-[70px]  border border-black rounded-full p-3`} src={src} alt={alt}/>
            <p className={`text-lg md:text-2xl mt-3`}>{text}</p>
        </div>
    );
};

export default HowItWorks;
