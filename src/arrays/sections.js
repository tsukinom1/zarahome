import { ClipboardList, MapPin, Lock, Mail } from "lucide-react";
const sections = [
    { id: "orders", label: "Мои заказы", icon: <ClipboardList size={20} /> },
    { id: "addresses", label: "Адреса доставки", icon: <MapPin size={20} /> },
    { id: "password", label: "Сменить пароль", icon: <Lock size={20} /> },
];

export default sections;