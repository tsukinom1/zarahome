export const OrderStorage = {
    getOrders: () => {
        return JSON.parse(localStorage.getItem("orders")) || [];
    },

    saveOrder: (order) => {
        const existingOrders = OrderStorage.getOrders();
        localStorage.setItem("orders", JSON.stringify([...existingOrders, order]));
    },

    clearOrders: () => {
        localStorage.removeItem("orders");
    }
};
