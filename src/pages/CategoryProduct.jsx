import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const CategoryProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all products
  const getAllProducts = async () => {
    try {
      const res = await axios.get('/quicklearn.products.json'); // Ensure this path is correct
      const allProducts = res.data;

      setProducts(allProducts);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      id: 1,
      icon: "bi-code-slash",
      title: "Website Development",
      description:
        "Custom website development tailored to meet your business needs. From design to deployment, we've got you covered.",
      delay: 100,
    },
    {
      id: 2,
      icon: "bi-search",
      title: "SEO Optimization",
      description:
        "Boost your website's visibility with our expert SEO services, ensuring higher rankings on search engines.",
      delay: 200,
    },
    {
      id: 3,
      icon: "bi-file-earmark-code",
      title: "Static Websites",
      description:
        "Elegant and lightweight static websites for businesses that need a quick online presence.",
      delay: 300,
    },
    {
      id: 4,
      icon: "bi-gear",
      title: "Customized Websites",
      description:
        "Fully customized websites with unique features and functionalities to match your vision.",
      delay: 400,
    },
    {
      id: 5,
      icon: "bi-cart4",
      title: "E-commerce Solutions",
      description:
        "Comprehensive e-commerce platforms that drive sales and enhance user experience.",
      delay: 500,
    },
    {
      id: 6,
      icon: "bi-currency-dollar",
      title: "Affordable Pricing Plans",
      description:
        "Flexible pricing plans to suit businesses of all sizes. Get the best value for your investment.",
      delay: 600,
    },
  ];

  const pricingPlans = [
    {
      id: 1,
      name: "Basic Plan",
      price: "₹99/Month",
      features: ["Static Website", "Up to 5 Pages", "SEO Optimization", "Responsive Design"],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: "₹299/Month",
      features: ["Dynamic Website", "Up to 10 Pages", "SEO Optimization", "Custom Design"],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: "₹799/Month",
      features: ["E-commerce Website", "Unlimited Pages", "SEO Optimization", "24/7 Support"],
    },
  ];

  return (
    <Layout>
      {/* Services Section */}
      <section id="services-2" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
          <p className="text-gray-600 mt-2">Explore Our Expertise</p>
        </div>

        <div className="container mx-auto px-4 mt-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-item flex items-center bg-white shadow-md rounded-lg p-6 h-full"
                data-aos="fade-up"
                data-aos-delay={service.delay}
              >
                <div className="icon text-blue-500 text-4xl mr-4">
                  <i className={service.icon}></i>
                </div>
                <div>
                  <h4 className="title text-lg font-bold text-gray-800 mb-2">
                    <a href="#" className="hover:text-blue-500">
                      {service.title}
                    </a>
                  </h4>
                  <p className="description text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800">Pricing Plans</h2>
          <p className="text-gray-600 mt-2">Choose a plan that suits your needs</p>
        </div>

        <div className="container mx-auto px-4 mt-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className="pricing-item bg-gray-50 shadow-md rounded-lg p-6 text-center"
                data-aos="fade-up"
                data-aos-delay={plan.id * 100}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold text-blue-500 mb-6">{plan.price}</p>
                <ul className="space-y-2 mb-6 text-start">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-gray-600">
                      <i className="bi bi-check-circle-fill text-green-500 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    <section id="contact" className="py-16 bg-gray-100">
      {/* Section Title */}
      <div className="container mx-auto px-4 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-800">Contact</h2>
        <p className="text-gray-600 mt-2">QUICK TECH </p>
      </div>

      <div className="container mx-auto px-4 mt-12" data-aos="fade-up" data-aos-delay="100">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-8">
            <div
              className="info-item text-center bg-white shadow-md p-6 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i className="bi bi-geo-alt text-blue-500 text-4xl mb-4"></i>
              <h3 className="text-lg font-bold text-gray-800">Address</h3>
              <p className="text-gray-600">Padinjarethara Ayalur 678510 Palakkad</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div
                className="info-item text-center bg-white shadow-md p-6 rounded-lg"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <i className="bi bi-telephone text-blue-500 text-4xl mb-4"></i>
                <h5 className="text-lg font-bold text-gray-800">Call Us</h5>
                <p className="text-gray-600">+91 8129718562</p>
              </div>

              <div
                className="info-item text-center bg-white shadow-md p-6 rounded-lg"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i className="bi bi-envelope text-blue-500 text-4xl mb-4"></i>
                <h5 className="text-lg font-bold text-gray-800">Email Us</h5>
                <p className="text-gray-600 text-sm">ayalurajith@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form
              action="forms/contact.php"
              method="post"
              className="space-y-6 bg-white shadow-md p-6 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  className="form-control block w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="form-control block w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Your Email"
                  required
                />
              </div>

              <input
                type="text"
                name="subject"
                className="form-control block w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Subject"
                required
              />

              <textarea
                name="message"
                rows="4"
                className="form-control block w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Message"
                required
              ></textarea>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  );
};

export default CategoryProduct;
