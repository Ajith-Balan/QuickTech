import Layout from '../components/layout/Layout';
import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Home() {
  const services = [
    {
      title: 'Custom Website Development',
      description: 'Get a fully customized website tailored to your brand and business needs.',
    },
    {
      title: 'E-commerce Solutions',
      description: 'Launch your online store with our powerful e-commerce platforms.',
    },
    {
      title: 'Responsive Design',
      description: 'Ensure your website looks great on all devices with our responsive design services.',
    },
    {
      title: 'Website Maintenance',
      description: 'Keep your website up-to-date and running smoothly with our maintenance plans.',
    },
    {
      title: '24/7 Support',
      description: 'Our dedicated team is here to assist you with any website-related queries anytime.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideInterval = 5000; // Auto slide every 5 seconds
  const initialDelay = 3000; // 3 seconds initial delay before auto-movement starts

  // Auto-slide effect with initial delay
  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
      }, autoSlideInterval);

      // Clear interval on component unmount
      return () => clearInterval(interval);
    }, initialDelay);

    // Clear initial timeout on component unmount
    return () => clearTimeout(initialTimeout);
  }, [services.length]);

  // Handle Previous and Next buttons
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  return (
    <Layout title={'Quick Tech'}>
      <div className="bg-gray-50">
        {/* Notification Bar */}
        <section className="bg-gradient-to-r from-black to-gray-800 text-white py-2 text-sm text-center">
          <p>All Templates on our site are fully customizable</p>
        </section>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Create Your Dream Website</h1>
          <p className="text-lg md:text-xl mb-6">Build professional websites easily with our platform.</p>
        </section>

             {/* What We Are Doing Section */}
     <section
  className="py-16 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/offer.png')" }}
>
  <div className="max-w-5xl mx-auto px-4 text-center py-12 rounded-lg bg-white bg-opacity-70">
    <h2 className="text-3xl font-bold mb-6 text-gray-800">What We Are Doing</h2>
    <p className="text-lg text-gray-600 mb-8">
      At Quick Tech, we are dedicated to helping businesses and individuals
      build professional, responsive, and high-performing websites. Our goal is
      to empower you to create your dream online presence with ease, using our
      innovative tools and templates.
    </p>
  </div>
</section>

        {/* Our Services Carousel Section */}
        <section
          className="py-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('../assets/offer.png')" }} // Use your background image here
        >
          <div className="max-w-5xl mx-auto px-4 text-center relative">
            <h2 className="text-3xl font-bold mb-8 text-black">Our Services</h2>

            {/* Carousel Content */}
            <div className="relative bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{services[currentIndex].title}</h3>
              <p className="text-gray-600">{services[currentIndex].description}</p>

              {/* Navigation Buttons */}
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow hover:bg-blue-600"
                onClick={handlePrevious}
              >
                <FiChevronLeft size={10} />
              </button>
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow hover:bg-blue-600"
                onClick={handleNext}
              >
                <FiChevronRight size={10} />
              </button>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Experts Section */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-8 text-gray-800">Meet Our Experts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Aromal Sukumar',
                  role: 'Python Fullstack Developer',
                  image:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWBcLPv3yG58oqvAX7NPMxMn5_gmZlnbAc_w&s',
                },
                {
                  name: 'Shilaf ',
                  role: 'Frontend Developer',
                  image:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWBcLPv3yG58oqvAX7NPMxMn5_gmZlnbAc_w&s',
                },
                {
                  name: 'Kiran Binoy',
                  role: 'MERN Stack Developer',
                  image:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWBcLPv3yG58oqvAX7NPMxMn5_gmZlnbAc_w&s',
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="flex  items-center gap-5 bg-white p-3 rounded-lg shadow-md"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-12 h-12 rounded-full object-cover  border-4 border-blue-500"
                  />
                  <h3 className="text-xl font-medium text-gray-900">{member.name}</h3>
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
