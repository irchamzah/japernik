import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-gray-400 hover:text-gray-200">
              <FaWhatsapp className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200">
              <FaTiktok className="text-2xl" />
            </a>
          </div>
          <div className="md:mb-0">
            <p className="text-xs mt-1">©2024 JAPERNIK. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
