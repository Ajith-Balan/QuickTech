import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaQuestionCircle } from 'react-icons/fa';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const HelpPage = () => {
  const faqs = [
    {
      question: 'How can I contact your support team?',
      answer: 'You can contact our support team via phone, email, or Instagram.',
    },
    {
      question: 'What services do you offer?',
      answer: 'We offer Static, customizable full-stack web development,  Flexible, and tech consulting services.',
    },
    {
        question: 'What is your refund policy?',
        answer: 'We offer a 30-day money-back guarantee if you are not satisfied with our services.(70%)',
      },
      {
        question: 'How can I customize my project?',
        answer: 'You can customize your project by discussing your specific requirements with our development team. We offer flexible and scalable solutions to meet your needs.',
      },
    {
      question: 'How can I get a project quote?',
      answer: 'You can request a quote by filling out our project inquiry form or contacting us directly.',
    },
  ];

  return (
    <Layout>

    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Help & Support</h1>
        <p className="text-gray-600 mt-2">How can we assist you today?</p>
      </header>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-100 p-4 mb-4 rounded-lg shadow-sm">
            <h3 className="font-medium text-gray-700 flex items-center">
              <FaQuestionCircle className="text-blue-500 mr-2" />
              {faq.question}
            </h3>
            <p className="text-gray-600 mt-2 pl-6">{faq.answer}</p>
          </div>
        ))}
      </section>

      {/* Contact Support Section */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <FaPhoneAlt className="text-green-600 mr-3" size={20} />
            <a href="tel:+8129718562" className="text-gray-800 hover:text-blue-600">
              +91 8129718562
            </a>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-red-600 mr-3" size={20} />
            <a href="mailto:ayalurajith@gmail.com" className="text-gray-800 hover:text-blue-600">
              ayalurajith@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
        <ul className="space-y-3">
        
          <li>
            <Link
              to="/pricing"
              className="flex items-center text-blue-600 hover:underline"
            >
              <AiOutlineRight className="mr-2" />
              Pricing Plans
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center text-blue-600 hover:underline"
            >
              <AiOutlineRight className="mr-2" />
              Contact Us
            </Link>
          </li>
        </ul>
      </section>
    </div>
    </Layout>

  );
};

export default HelpPage;
