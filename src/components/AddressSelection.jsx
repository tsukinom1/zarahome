import {useEffect, useState} from "react";
import {deleteAddressFromStorage, getAddressesFromStorage} from "@/utils/storages/AddressStorage";
import CheckoutForm from "@/components/CheckoutForm";
import Notification from "@/components/ui/Notifacation";

const AddressSelection = () => {
    const [addresses, setAddresses] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const storedAddresses = getAddressesFromStorage();
        if (storedAddresses.length > 0) {
            setAddresses(storedAddresses);
            setSelectedIndex(0);
        }
    }, []);

    const handleSave = () => {
        const updatedAddresses = getAddressesFromStorage();
        setAddresses(updatedAddresses);
        setShowForm(false);
        setEditIndex(null);
        setMessage("Адрес успешно сохранен!");
    }

    const handleDelete = (index) => {
        deleteAddressFromStorage(index);
        setAddresses(getAddressesFromStorage());
        setMessage("Адрес удален!");
    };


    return (
        <div>
            {message && <Notification message={message} onClose={() => setMessage(null)} />}

            {addresses.length > 0 && (
                <>
                    {addresses.map((address, index) => (
                        <label key={index}
                               className={`flex items-center p-4 border rounded-lg cursor-pointer mb-2 ${selectedIndex === index ? "border-blue-500 shadow" : "border-gray-300"}`}>
                            <input
                                type="radio"
                                name="addressOption"
                                value={index}
                                checked={selectedIndex === index}
                                onChange={() => setSelectedIndex(index)}
                                className="mr-5"
                            />
                            <div className={`w-full flex flex-col md:flex-row md:justify-between md:items-center`}>
                                <div>
                                    <p className="text-sm md:text-md font-semibold">{`${address.name}, ${address.surname}, ${address.patronymic}, ${address.phone}`}</p>
                                    <p className="text-sm md:text-md font-semibold">{`${address.area}, ${address.city}, ${address.street}, ${address.block}, ${address.house}, кв.${address.apart}`}</p>
                                </div>
                                <div>
                                    <button type="button"
                                            className="md:ml-4 my-2 px-2 py-2 bg-gray-300 text-gray-700 hover:bg-green-300 rounded-md text-sm"
                                            onClick={() => {
                                                setShowForm(true);
                                                setEditIndex(index);
                                            }}>
                                        Изменить
                                    </button>
                                    <button type="button"
                                            className="ml-4 my-2 px-2 py-2 bg-gray-300 text-gray-700 hover:bg-red-300 rounded-md text-sm"
                                            onClick={() => handleDelete(index)}
                                    >
                                        Удалить
                                    </button>
                                </div>
                            </div>
                        </label>
                    ))}

                    <label
                        className={`block p-4 border rounded-lg cursor-pointer mt-2 ${selectedIndex === null ? "border-blue-500 shadow" : "border-gray-300"}`}>
                        <input
                            type="radio"
                            name="addressOption"
                            value="other"
                            checked={selectedIndex === null}
                            onChange={() => {
                                setShowForm(true);
                                setEditIndex(null);
                            }}
                            className="mr-2"
                        />
                        <span className="font-semibold">Добавить новый адрес</span>
                    </label>
                </>
            )}
            {(addresses.length === 0 || showForm) && (
                <CheckoutForm initialData={editIndex !== null ? addresses[editIndex] : null} onSave={handleSave}
                              index={editIndex}/>
            )}
        </div>
    )
}

export default AddressSelection;