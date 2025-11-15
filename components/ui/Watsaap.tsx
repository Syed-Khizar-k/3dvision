import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "923011463337"; // Pakistan format without 0
  const message = encodeURIComponent(
    "Hello, I want to discuss a project. Is anyone available?"
  );

  const link = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 rounded-full p-4 shadow-lg hover:bg-green-600 transition"
    >
      <FaWhatsapp className="text-white" size={32} />
    </a>
  );
}
