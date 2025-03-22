const BlackButton = ({type, className, onClick, children}) => {
    return (
        <button type={type} className={`bg-black hover:bg-gray-900 text-white py-3 font-bold  ${className}`} onClick={onClick}>{children}</button>
    );
};

export default BlackButton;