export const validateLogin = (email, password, setErrors) => {
    let isValid = true;
    let newErrors = { email: "", password: "" };

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        newErrors.email = "Введите корректный Email";
        isValid = false;
    }

    if (password === "") {
        newErrors.password = "Введите пароль";
        isValid = false;
    }
    else if(password && password.length < 8){
        newErrors.password = "Пароль должен быть не менее 8 смиволов";
        isValid = false;
    }

    setErrors(newErrors);
    return isValid;
};
