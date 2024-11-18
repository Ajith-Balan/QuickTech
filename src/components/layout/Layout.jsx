import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({
  children,
  title = "Quick Tech ",
  description = "Quick Tech is your go-to platform for building professional websites with ease. Offering a range of customizable templates, expert development services, and cutting-edge solutions, we empower businesses and individuals to create a standout online presence. Whether you need custom website development, e-commerce solutions, or responsive designs, Quick Tech has you covered. Start building your dream website today and unlock your online potential!",
  keywords = "web development, customizable templates, e-commerce solutions, responsive design, professional websites, online presence, website services, Quick Tech, custom websites, website development, business websites.",
  author = "ajith-balan"
}) => {
  return (
    <div className="flex flex-col mb-40 mt-10 ">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main className="flex-grow">
        <ToastContainer/>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
