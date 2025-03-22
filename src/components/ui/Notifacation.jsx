"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Notification = ({ message, type = "info", onClose }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            setTimeout(onClose, 300); // Даем время анимации перед закрытием
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    if (!visible) return null;

    // Определяем цвет по типу уведомления
    const typeStyles = {
        success: "bg-green-500",
        error: "bg-red-500",
        info: "bg-blue-500",
        warning: "bg-yellow-500",
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.3 }}
                    className={`fixed z-10 bottom-5 right-5 ${typeStyles[type]} text-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-2`}
                >
                    {/* Иконка в зависимости от типа */}
                    {type === "success" && <span>✅</span>}
                    {type === "error" && <span>❌</span>}
                    {type === "info" && <span>ℹ️</span>}
                    {type === "warning" && <span>⚠️</span>}

                    <span>{message}</span>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Notification;
