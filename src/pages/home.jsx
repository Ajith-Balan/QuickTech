import Layout from '../components/layout/Layout';
import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Home() {
 



  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const stats = [
    {
      icon: 'bi-emoji-smile',
      color: 'text-blue-500',
      value: 232,
      label: 'Happy Clients',
    },
    {
      icon: 'bi-journal-richtext',
      color: 'text-orange-500',
      value: 521,
      label: 'Projects',
    },
    {
      icon: 'bi-headset',
      color: 'text-green-500',
      value: 1463,
      label: 'Hours Of Support',
    },
    {
      icon: 'bi-people',
      color: 'text-pink-500',
      value: 15,
      label: 'Hard Workers',
    },
  ];





  const services = [
    {
      id: 1,
      title: "E-commerce",
      description:
        "Transform your online business with our cutting-edge e-commerce solutions. We deliver seamless, scalable, and user-friendly platforms designed to enhance customer experience and boost sales. From product catalog management to secure payment gateways, we ensure every aspect of your e-commerce journey is optimized for success.",
      image: "https://raoinformationtechnology.com/wp-content/uploads/2021/03/E-commerce-company.jpg",
      link: "service-details.html",
      delay: 200,
    },
    {
      id: 2,
      title: "Static Websites",
      description:
        "Showcase your brand or idea with our expertly crafted static websites. These lightweight and efficient websites offer a stunning visual experience while maintaining fast loading speeds. Perfect for portfolios, personal projects, or businesses looking for a simple yet impactful online presence.",
      icon: "bi-broadcast",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/3/405122173/TF/WX/HX/16477257/screenshot-2024-03-29-074710-500x500.png",
      link: "service-details.html",
      delay: 300,
    },
    {
      id: 3,
      title: "Branding",
      description:
        "Build a memorable brand with our branding services. From logo design to a complete brand identity overhaul, we create visuals and strategies that resonate with your target audience. Let us help you establish a strong and consistent brand image across all platforms.",
      icon: "bi-easel",
      image: "https://cdn.wedevs.com/uploads/2019/02/9-Profit-Secrets-To-Build-Your-Brand-With-Website-Development-3.jpg",
      link: "service-details.html",
      delay: 400,
    },
  ];





  const clients = [
    "https://c8.alamy.com/comp/PXPBDW/building-logo-design-real-estate-company-logo-design-abstract-construction-logo-design-building-logo-design-PXPBDW.jpg",
    "https://marketplace.canva.com/EAGGGpQ7cno/1/0/1600w/canva-navy-and-grey-classic-circle-business-consulting-logo-28WibL-VkRk.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyctPnCoCLiVzK4P1iQeV_nL2do3K-fASUww&s",

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideInterval = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [services.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  return (
    <Layout title={'Quick Tech'}>
      <div >
        {/* Hero Section */}
        <section
          className="h-screen bg-cover bg-center relative flex items-center text-center"
          style={{ backgroundImage: "url('https://ferrissoft.com/wp-content/uploads/2022/09/security_programming_hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 w-full px-4">
            <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-4">
              Build Your Dream Website
            </h1>
            <p className="text-white text-xl md:text-2xl mb-8">
              Empowering businesses with modern, responsive, and stunning web solutions.
            </p>
            <a
              href="#services"
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
            >
              Explore Services
            </a>
          </div>
        </section>


        {/* About */}
        <section id="about" className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Left Column */}
      <div data-aos="fade-up" data-aos-delay="100">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">
          Empowering Your Digital Transformation with Cutting-Edge Solutions
        </h3>
        <img
          src="https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ="
          alt="About Quick Tech"
          className="w-full rounded-lg mb-6 shadow-md"
        />
        <p className="text-gray-700 mb-4">
          At Quick Tech, we specialize in delivering state-of-the-art web solutions tailored to meet the needs of modern businesses. Whether you need a robust e-commerce platform or a sleek static website, our team of experts ensures unparalleled quality and performance.
        </p>
        <p className="text-gray-700">
          With a commitment to innovation and excellence, we strive to provide services that not only meet but exceed your expectations. Our solutions are designed to empower your business, streamline operations, and enhance customer engagement.
        </p>
      </div>

      {/* Right Column */}
      <div data-aos="fade-up" data-aos-delay="250">
        <div className="lg:pl-8">
          <p className="italic text-gray-700 mb-4">
            "Innovating for a better digital future, one project at a time."
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <i className="bi bi-check-circle-fill text-green-500 mr-3"></i>
              <span className="text-gray-700">
                Custom e-commerce platforms designed for scalability and performance.
              </span>
            </li>
            <li className="flex items-start">
              <i className="bi bi-check-circle-fill text-green-500 mr-3"></i>
              <span className="text-gray-700">
                Stunning static websites to showcase your brand with elegance.
              </span>
            </li>
            <li className="flex items-start">
              <i className="bi bi-check-circle-fill text-green-500 mr-3"></i>
              <span className="text-gray-700">
                Branding and identity solutions that establish a lasting impact.
              </span>
            </li>
          </ul>
          <p className="text-gray-700">
            Our mission is to help businesses thrive in the digital era. Whether you're launching a startup or scaling an enterprise, Quick Tech is your trusted partner for web development, branding, and more.
          </p>
          <div className="relative mt-6">
            <img
              src="https://www.syncfusion.com/blogs/wp-content/uploads/2020/07/Top-6-Front-End-Web-Development-Tools-to-Increase-Your-Productivity-in-2020-1.jpg"
              alt="Our Work"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      

        <section id="stats" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stats-item flex items-center justify-center bg-white shadow-md rounded-lg p-6"
              data-aos="fade-up"
              data-aos-delay={`${100 * (index + 1)}`}
            >
              <i
                className={`bi ${stat.icon} ${stat.color} text-4xl flex-shrink-0`}
              ></i>
              <div className="ml-4 text-center">
                <h3
                  className="text-3xl font-bold text-gray-800 count-up"
                  data-target={stat.value}
                >
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>



    <section id="services" className="py-16 bg-gray-50">
      {/* Section Title */}
      <div className="container mx-auto px-4 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-800">Services</h2>
        <p className="text-gray-600 mt-2">Featured Services</p>
      </div>

      <div className="container mx-auto px-4 mt-12" data-aos="fade-up" data-aos-delay="100">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-item bg-white shadow-lg rounded-lg overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay={service.delay}
            >
              {/* Service Image */}
              <div className="img">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              {/* Service Details */}
              <div className="details p-6 relative">
                <div className="icon mb-4">
                  <i className={`${service.icon} text-3xl text-blue-500`}></i>
                </div>
                <a href={service.link} className="stretched-link">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                </a>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

        {/* Services Section */}
       

        {/* Meet Our Team Section */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-12">
              Meet Our Experts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Aromal Sukumar',
                  role: 'Python Fullstack Developer',
                  image: 'https://img.freepik.com/premium-photo/portrait-young-handsome-white-american-nerdy-it-software-developer-programmer-worker-illustration-ai-generative_407474-17714.jpg?semt=ais_hybrid',
                },
                {
                  name: 'Nidin Bose ',
                  role: 'Frontend Developer',
                  image: 'https://png.pngtree.com/png-vector/20240529/ourmid/pngtree-web-programmer-avatar-png-image_12529205.png',
                },
                {
                  name: 'Kiran Binoy',
                  role: 'MERN Stack Developer',
                  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjZP5N861PrAuoMnBfSdh13Q0bFnEWUQvArw&s',
                },
              ].map((member, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-lg text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 mx-auto rounded-full mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

       
      </div>
    </Layout>
  );
}

export default Home;
