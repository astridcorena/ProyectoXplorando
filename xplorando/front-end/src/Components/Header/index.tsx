import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="w-full fixed top-0 left-0 bg-headerbg text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo and slogan block */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/Xplorando.png"
              alt="Company Logo"
              className="h-9 w-39 mr-2"
            />
            <span className="font-semibold text-xl tracking-tight">
           
            </span>
          </Link>
        </div>

        {/* Buttons block */}
        <div>
          <button className ="bg-transparent hover:bg-blue-700 text-white font-semibold hover:text-white py-2 px-4 border border-transparent hover:border-transparent rounded">
            Home
            </button>
          <button className="bg-transparent hover:bg-blue-700 text-white font-semibold hover:text-white py-2 px-4 border border-transparent hover:border-transparent rounded">
            Crear cuenta
          </button>
          <button className="ml-4 bg-orange-500 text-white font-semibold hover:text-white py-2 px-4 border border-transparent hover:border-transparent rounded-full">
            Iniciar sesión
          </button>
        </div>
      </div>
    </header>
  );
};

export { Header };
