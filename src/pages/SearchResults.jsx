import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
const SearchResult = () =>{
    return(
        <>
        <Layout>
        <div className="max-w-7xl pt-10 flex text-lg flex-col gap-10 bg-white mx-auto px-4 sm:px-6 lg:px-8 h-screen">
        <Link
        to={'/about'}
         className="border-b-2">
          About us
          </Link>
          <Link
          to={'/help'}
          className="border-b-2">
          Help
          </Link>
           <Link className="border-b-2">
          Pricing
          </Link> 
          <Link className="border-b-2"
          to={'/contact'}
          >
          Contact
          </Link>  <Link className="border-b-2"
          to={'/policy'}
          >
          Privacy & Policy
          </Link>
          <a 
          href="https://www.instagram.com/quick___tech?igsh=MXVoNXhmZ2hyYmp3ag==" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="border-b-2"
        >
            Instagram
        </a>
        <a 
          href="https://wa.me/8129718562?text=${encodeURIComponent(Hello! I would like to inquire about...)}" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="border-b-2"
        >
            Whatsapp
        </a>
        <a 
          href="mailto:ayalurajith@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="border-b-2"
        >
            G-mail
        </a>
         
           
    </div>
    </Layout>
        </>
    )
}

export default SearchResult