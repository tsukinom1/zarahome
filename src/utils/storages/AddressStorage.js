export const addressStorage = (newAddress) => {
    let addresses = JSON.parse(localStorage.getItem("addresses")) || [];
    addresses.push(newAddress);
    localStorage.setItem("addresses", JSON.stringify(addresses));
};

export const getAddressesFromStorage = () => {
    return JSON.parse(localStorage.getItem("addresses")) || [];
};

export const updateAddressInStorage = (index, updatedAddress) => {
    let addresses = JSON.parse(localStorage.getItem("addresses")) || [];
    if (index >= 0 && index < addresses.length) {
        addresses[index] = updatedAddress;
        localStorage.setItem("addresses", JSON.stringify(addresses));
    }
};

export const deleteAddressFromStorage = (index) => {
    let addresses = JSON.parse(localStorage.getItem("addresses")) || [];
    if (index >= 0 && index < addresses.length) {
        addresses.splice(index, 1);
        localStorage.setItem("addresses", JSON.stringify(addresses));
    }
};

export const clearAddressStorage = () => {
    localStorage.removeItem("addresses");
};
