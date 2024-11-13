import Layout from '../components/layout/Layout';
import React, { useState, useEffect } from 'react';

import offer1 from '../assets/offer.png';


function Home() {


 



  return (
    <Layout title={'Quick Tech'}>
    <div className=" bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Create Your Dream Website</h1>
        <p className="text-lg md:text-xl mb-6">Build professional websites easily with our platform.</p>
       
      </section>

      {/* Offers Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Exclusive Offers</h2>
        <div className="flex flex-wrap justify-center gap-6 px-4">
          {['Offer 1'].map((offer, index) => (
             <div key={index} className=" rounded-lg p-6 shadow hover:shadow-xl transition">
             <img
               src={offer1}
               alt={offer}
               className="w-full rounded-md mb-4"
             />
           </div>
          ))}
        </div>
      </section>

      {/* User Stories Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-8 px-4">
          {['Kiran',].map((user, index) => (
            <div key={index} className="bg-gray-200 rounded-lg p-6 shadow hover:shadow-xl transition">
              <img
                src={user}
                alt={user}
                className="w-1/2 rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{user}</h3>
              <p className="text-gray-600">"I created a stunning website in just a few minutes. Highly recommend!"</p>
            </div>
          ))}
        </div>
      </section>

      {/*  
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Users Say</h2>
        <div className="flex flex-wrap justify-center gap-6 px-4">
       
            <div  className="bg-white text-gray-800 p-6 rounded-lg shadow-md w-72">
              <p className="text-lg mb-2">Jithin K Jayan</p>
              <p className="text-gray-600">"The best website creator I’ve ever used!"</p>
            </div>
         
        </div>
      </section>
      */}

{/*
      <section className="bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800">
          Meet Our Experts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          { [
  {
    name: 'Aromal Sukumar',
    role: 'Python Fullstack Developer',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    name: 'Kiran Binoy',
    role: 'MERN Fullstack Developer',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    name: 'Rahul Dev',
    role: 'Backend Developer',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
].map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md"
            >
              
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-500"
              />
             
              <h3 className="text-xl font-medium text-gray-900">
                {member.name}
              </h3>
             
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    */}

    </div>
    </Layout>
  );
}

export default Home;
