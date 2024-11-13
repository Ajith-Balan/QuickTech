import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import useCategory from '../hooks/useCategory';

const CategoryProduct = () => {
  const categories=useCategory()
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch products by category
  const getProductByCat = async () => {
    try {
      const res = await fetch('/quicklearn.products.json'); // Ensure this path is correct
      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();

      // Filter products that match the category ID
      const filteredProducts = data.filter(product => product.category === id);

      if (filteredProducts.length > 0) {
        const shuffledData = filteredProducts.map((p) => ({
          ...p,
          
        }));

        setProducts(shuffledData);

        // Find the category that matches the current ID
        const cat = categories.find(cat => cat._id.$oid === id);

        // Set the category name or other relevant data here if needed
        if (cat) {
          setCategory({ name: cat.name || 'Unknown Category' });
        } else {
          setCategory({ name: 'Category Not Found' });
        }
      } else {
        console.error("No Templates found for the given category ID");
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setCategory({ name: 'Error fetching category' });
    } finally {
      setLoading(false); // Set loading to false after data is fetched
    }
  };

  useEffect(() => {
    if (id) getProductByCat();
  }, [id]);

  // Download Button Handler
  

  // Live Review Button Handler
 

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">{category.name}</h1>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="loader border-t-4 border-b-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
            <p className="ml-4 text-lg font-semibold">Loading...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product._id.$oid}
                className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden"
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
                

                  {/* Action Buttons */}
                
                </div>
                </Link>
                {/* Product Image */}
            
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryProduct;
