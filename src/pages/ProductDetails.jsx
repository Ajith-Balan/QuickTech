import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { useParams, Link, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch the product whenever the `id` changes
  useEffect(() => {
    getProduct();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
  }, [id]);

  const getProduct = async () => {
    try {
      const res = await fetch('/quicklearn.products.json'); // Ensure this path is correct
      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      
      // Find the product with the matching `id`
      const currentProduct = data.find((item) => item._id.$oid === id);
      setProduct(currentProduct || {});
      
      // Fetch related products if category exists
      if (currentProduct?.category) {
        const related = data.filter(
          (item) =>
            item.category === currentProduct.category && item._id.$oid !== id
        );
        setRelatedProducts(related);
      }
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
            <h2 className="text-xl text-green-600 font-bold">
              ₹{product.amount}
            </h2>
          </div>

          {/* Add to Cart and Buy Now Buttons */}
          <div className="mt-4 text-center flex gap-2">
            <a
              href={product.downldlink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition"
            >
              Get Now
            </a>
            <a
              href={product.livelink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded transition"
            >
              Live Preview
            </a>
          </div>
          <span className="text-gray-500 text-sm">Feel Free to ask, WhatsApp now</span>
        </div>

        {/* Product Description */}
        <p className="text-gray-700 text-sm md:text-base">{product.descrition}</p>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="container mx-auto px-4 py-8">
            <h3 className="text-2xl font-semibold mb-6">Related Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((item) => (
                <Link to={`/product/${item._id}`} key={item._id}>
                  <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={item.photo}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                      <p className="text-green-600 font-bold">₹{item.amount}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetails;
