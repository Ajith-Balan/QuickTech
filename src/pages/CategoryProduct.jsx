import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center"> Templates</h1>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="loader border-t-4 border-b-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
            <p className="ml-4 text-lg font-semibold">Loading...</p>
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product._id.$oid}
                className="max-w-sm  rounded-lg shadow-lg overflow-hidden"
              >
                <Link to={`/product/${product._id.$oid}`}>
                  <img
                    src={product.photo}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />

                  {/* Product Content */}
                  <div className="p-4">
                    <h2 className="text-2xl font-semibold text-gray-800">
                      {product.name}
                    </h2>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg font-semibold">No products available.</p>
        )}
      </div>
    </Layout>
  );
};

export default CategoryProduct;
