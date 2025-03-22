"use client"
import React, {useState} from 'react';
import {addressStorage, updateAddressInStorage} from "@/utils/storages/AddressStorage";
import BlackButton from "@/components/ui/BlackButton";

const CheckoutForm = ({initialData, onSave, index}) => {
    const [formData, setFormData] = useState(initialData || {
        name: "",
        surname: "",
        patronymic: "",
        phone: "",
        area: "",
        city: "",
        street: "",
        block: "",
        house: "",
        apart: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (index !== null) updateAddressInStorage(index, formData);
        else addressStorage(formData);
        onSave();
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="p-4 border rounded-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Имя"
                           className="border p-2 rounded-md" required/>
                    <input type="text" name="surname" value={formData.surname} onChange={handleChange} placeholder="Фамилия"
                           className="border p-2 rounded-md" required/>
                    <input type="text" name="patronymic" value={formData.patronymic} onChange={handleChange} placeholder="Отчество"
                           className="border p-2 rounded-md" required/>
                    <input type="number" name="phone" value={formData.phone} onChange={handleChange} placeholder="Номер"
                           className="border p-2 rounded-md" required/>
                    <input type="text" name="area" value={formData.area} onChange={handleChange} placeholder="Область"
                           className="border p-2 rounded-md" required/>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Город"
                           className="border p-2 rounded-md" required/>
                    <input type="text" name="street" value={formData.street} onChange={handleChange} placeholder="Улица"
                           className="border p-2 rounded-md" required/>
                    <input type="text" name="block" value={formData.block} onChange={handleChange} placeholder="Корпус"
                           className="border p-2 rounded-md" required/>
                    <input type="text" name="house" value={formData.house} onChange={handleChange} placeholder="Дом"
                           className="border p-2 rounded-md" required/>
                    <input type="text" name="apart" value={formData.apart} onChange={handleChange}
                           placeholder="Квартира" className="border p-2 rounded-md" required/>
                </div>
                <BlackButton type="submit" className="mt-4 px-4 py-2  text-white rounded-md">Сохранить</BlackButton>
            </form>
        </div>
    );
};

export default CheckoutForm;