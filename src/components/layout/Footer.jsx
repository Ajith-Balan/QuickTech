import React from 'react'
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { FaInstagram, FaWhatsapp, FaEnvelope,  } from 'react-icons/fa';
import { CgTemplate } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { IoMdMenu } from "react-icons/io";

import useCategory from '../../hooks/useCategory';

const Footer = () => {

    const handleWhatsAppClick = () => {
      const phoneNumber = '8129718562'; // Replace with your WhatsApp number
      const message = 'Hello! I would like to inquire about...';
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    };
  const categories = useCategory();

  return (
    <div>
 <footer className="  bg-gradient-to-r from-blue-800 to-blue-500 fixed bottom-0 left-0 w-full z-20 text-gray-800 ">
  <div className=" flex px-4 py-2 justify-between  text-center text-white text-sm items-center text-sm md:text-base">
  <Link className=" flex flex-col items-center " to={'/'}>
    <GoHome className=''
    size={20}/>
     
     Home
      
    </Link>
 
    <Link
   className='flex flex-col items-center'
    to={`/free`}
     >
       
<CgTemplate 
    size={20}/>
Free
     
      
  </Link> 
   <Link
   className='flex flex-col items-center'
    to={`/premium`}
     >
       
<CgTemplate 
    size={20}/>
premium
     
      
  </Link>

  
   
    <Link 
     className='flex flex-col items-center'
     to={'/search'}>
    <IoMdMenu 
    size={20}/>

      More
    </Link>
  </div>
  <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-20 right-6 bg-green-400 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all"
    >
      <FaWhatsapp size={24} />
    </button>
</footer>
   </div>
  )
}

export default Footer

