const SectionTitle = ({title, text}) => {
    return (
        <div className={`container`}>
            <div className={`mt-10 md:mt-20`}>
                <h1 className={`text-3xl sm:text-5xl`}>{title}</h1>
                <h2 className={`text-lg lg:text-2xl mt-3 opacity-70`}>{text}</h2>
            </div>
        </div>
    );
};

export default SectionTitle;