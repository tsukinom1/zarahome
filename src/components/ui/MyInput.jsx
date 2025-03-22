const MyInput = ({htmlFor, labelClassName, labelText, id, type,
                 placeholder, name, value, onChange, className}) => {
    return (
        <>
            <label htmlFor={htmlFor} className={labelClassName}>{labelText}</label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                className={className}
            />
        </>
    );
};
export default MyInput;