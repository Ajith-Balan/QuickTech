import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { toast } from 'react-toastify';
import useCategory from '../../hooks/useCategory';
import logo from '../../assets/Black White Elegant Monogram Initial Name Logo_20240606_180138_0000.png';
import { FaInstagram, FaWhatsapp } from "react-icons/fa"; // Import Instagram and WhatsApp icons

const Header = () => {
  const categories = useCategory();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpend, setIsOpend] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsOpend(!isOpend);
  const toggleCategoryDropdown = () => setIsCategoryOpen(!isCategoryOpen);




  return (
    <nav className="w-full bg-gradient-to-r  from-blue-100 to-blue-800 fixed z-10  top-0">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10">
          {/* Logo */}
          <div >
            <Link to="/" className="text-black text-lg font-bold">
              <img className="h-8 w-8 object-cover  rounded" src={logo} alt="Quick Learn" />
              {/* Quick Learn */}
            </Link>
          </div>

       
          {/* Links for large screens */}
     
        </div>
      </div>

    </nav>
  );
};

export default Header;
