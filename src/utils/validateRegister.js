export const validateRegister = (email, password, setErrors, isConfirmed) => {
    let isValid = true;
    let newErrors = { email: "", password: ""};

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        newErrors.email = "Введите корректный Email";
        isValid = false;
    }

    if (isConfirmed) {
        if (!password) {
            newErrors.password = "Введите пароль";
            isValid = false;
        }
        else if(password && password.length < 8){
            newErrors.password = "Пароль должен быть не менее 8 смиволов";
            isValid = false;
        }
    }

    setErrors(newErrors);
    return isValid;
};
