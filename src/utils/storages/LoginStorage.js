export const loginStorage = (email, password, isAuth) => {
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("password", JSON.stringify(password));
    localStorage.setItem("isAuth", JSON.stringify(isAuth));
}
export const getUserFromStorage = () => {
    return {
        email: JSON.parse(localStorage.getItem("email")),
        password: JSON.parse(localStorage.getItem("password")),
        isAuth: JSON.parse(localStorage.getItem("isAuth")),
    };
};

// Удаление данных (выход из системы)
export const clearUserStorage = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("isAuth");
};
