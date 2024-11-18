import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import axios from 'axios';

const CategoryPremium = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Testimonials Data
 {/*  const testimonials = [
   {
      name: 'Aromal Sukumar',
      feedback:
        'This service has been a game-changer for our business. The team is professional and dedicated, delivering top-notch results!',
      
    },
    {
      name: 'Shilaf',
      feedback:
        'I am extremely satisfied with the results. Excellent support and great solutions tailored to our needs. Highly recommended!',
     
    },
    {
      name: 'Kiran Binoy',
      feedback:
        'Fantastic experience! The team’s creativity and expertise exceeded our expectations. We’ve seen significant growth.',
     
    },
  ];
  */}

  // Fetch all products
  const getAllProducts = async () => {
    try {
      const res = await axios.get('/quicklearn.premia.json'); // Ensure this path is correct
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  // Auto-move to next testimonial every 5 seconds
{/*
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Adjust the time delay (5000ms = 5s)

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Handlers for navigation buttons
  const handlePrev = () => {
    setCurrentTestimonial(
      currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
  };
  */}

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="loader border-t-4 border-b-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
            <p className="ml-4 text-lg font-semibold">Loading...</p>
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product._id?.$oid}
                className="max-w-sm  rounded-lg shadow-lg overflow-hidden"
              >
                <div
              
                  className="flex"
                >
                  <img
                    src={product.photo}
                    alt={product.name}
                    className="w-20 h-20 rounded object-cover"
                  />

                  {/* Product Content */}
                  <div className="p-4">
                    <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>

                    <a     href={product.livelink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex   text-blue-800">
                    view site
                  </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg font-semibold">No products available.</p>
        )}

        {/* Testimonials Carousel Section */}
     {/*   <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="relative max-w-xl mx-auto">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            
              <p className="text-lg italic text-gray-600 mb-4">
                "{testimonials[currentTestimonial].feedback}"
              </p>
              <h3 className="text-xl font-semibold text-gray-800">
                {testimonials[currentTestimonial].name}
              </h3>
            </div>

              
          
          </div>
        </section>
        */}
      </div>
    </Layout>
  );
};

export default CategoryPremium;
