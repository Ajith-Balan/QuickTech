import React from 'react';
import Layout from '../components/layout/Layout';
import { FaUsers, FaLaptopCode, FaProjectDiagram, FaHandsHelping } from 'react-icons/fa';

// Replace this with a relevant image URL for web development (you can use Unsplash or any stock photo service).
const aboutImage = 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHx3ZWIgZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNjEzMzg5MDA1&ixlib=rb-1.2.1&q=80&w=1080';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <Layout title={'About Us - Quick Tech'}>
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-semibold mt-6 mb-6 text-center rounded bg-gradient-to-r from-green-500 to-blue-500 text-white py-2">
            About Quick Tech
          </h1>
          <img src={aboutImage} alt="About Quick Tech" className="w-full h-56 object-cover rounded-md mb-6" />

          <p className="mb-4 text-gray-700">
            Established in 2024, <strong>Quick Tech</strong> is a leading web development company dedicated to transforming your digital vision into reality. We specialize in building dynamic, responsive, and user-friendly websites tailored to meet your business needs. Our team of expert developers and designers is committed to delivering top-notch solutions that help you achieve your business goals.
          </p>

          <p className="mb-4 text-gray-700">
            At Quick Tech, we combine innovative technology with industry best practices to deliver exceptional results. From startups to established enterprises, we work closely with our clients to understand their unique challenges and provide scalable solutions that drive growth and success.
          </p>

          {/* Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex items-center p-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-md shadow-lg">
              <FaLaptopCode className="h-8 w-8 mr-3" />
              <span>Custom Web Development</span>
            </div>
            <div className="flex items-center p-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-md shadow-lg">
              <FaProjectDiagram className="h-8 w-8 mr-3" />
              <span>Project Management</span>
            </div>
            <div className="flex items-center p-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-md shadow-lg">
              <FaUsers className="h-8 w-8 mr-3" />
              <span>Client Collaboration</span>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-8 bg-gray-200 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Why Choose Us?</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Proven track record of delivering high-quality web solutions</li>
              <li>Experienced team of developers, designers, and project managers</li>
              <li>Focus on client satisfaction with tailored solutions</li>
              <li>24/7 support to ensure your project is always on track</li>
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default About;
