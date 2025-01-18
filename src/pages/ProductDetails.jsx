import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { useParams, Link, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch product details and related products when the `id` changes
  useEffect(() => {
    getProduct();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
  }, [id]);

  const handleWhatsAppClick = () => {
    const phoneNumber = '8129718562'; // Replace with your WhatsApp number
    const message = `"Hello! I'm interested in the ${product.name} site Could you share the details? `;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };


  const getProduct = async () => {
    try {
      // Fetch data from two different JSON files
      const [res1, res2] = await Promise.all([
        fetch('/quicklearn.products.json'),
        fetch('/quicklearn.premia.json'),
      ]);

      if (!res1.ok || !res2.ok) throw new Error('Network response was not ok');

      const data1 = await res1.json();
      const data2 = await res2.json();

      // Combine the products from both JSON files
      const combinedData = [...data1, ...data2];

      // Find the product with the matching `id`
      const currentProduct = combinedData.find((item) => item._id.$oid === id);
      setProduct(currentProduct || {});

      // Fetch related products if category exists
    
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Main Image Section */}
        <div className="w-full max-w-xl mx-auto">
          <img
            src={product.photo}
            alt={product.name}
            className="w-full h-[350px] rounded-lg object-cover"
          />
        </div>

        {/* Product Details Section */}
        <div className="space-y-4">
          <hr className="border-gray-300" />
          <h6 className="text-lg md:text-2xl font-semibold">{product.name}</h6>
          <div className="flex gap-2 mt-2 items-center">
           
          </div>

          {/* Add to Cart and Buy Now Buttons */}
          <div className="mt-4 text-center flex gap-2">
            <button
              target="_blank"
              onClick={handleWhatsAppClick}
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition"
            >
              Get Now
            </button>
            <a
              href={product.livelink}
              rel="noopener noreferrer"
              className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded transition"
            >
              Live Preview
            </a>
          </div>
          <span className="text-gray-500 text-sm">
            Feel Free to ask, WhatsApp now
          </span>
        </div>

        {/* Product Description */}
        <p className="text-gray-700 text-sm md:text-base">
          {product.descrition}
        </p>

     
      </div>
    </Layout>
  );
};

export default ProductDetails;
