import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCheck, 
  FiCode, 
  FiSmartphone, 
  FiDatabase, 
  FiShield, 
  FiZap,
  FiClock,
  FiMail,
  FiSearch,
  FiImage,
  FiShare2,
  FiMessageCircle,
  FiCreditCard,
  FiLayers
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
  const pricingPlans = [
    {
      name: "BASIC WEBSITE",
      price: "3,999",
     适合: "Small Business / Startup",
      icon: <FiCode className="w-6 h-6" />,
      features: [
        { text: "02 Pages", icon: <FiLayers /> },
        { text: "1 Business Email", icon: <FiMail /> },
        { text: "SEO Ready", icon: <FiSearch /> },
        { text: "Responsive Design", icon: <FiSmartphone /> },
        { text: "Basic Product Listing", icon: <FiLayers /> },
        { text: "Unlimited Images", icon: <FiImage /> },
        { text: "Social Media Integration", icon: <FiShare2 /> },
        { text: "Live Chat Integration", icon: <FiMessageCircle /> },
        { text: "Payment Gateway", icon: <FiCreditCard /> },
        { text: "24x7 Support", icon: <FiClock />, highlight: true }
      ],
      recommended: false,
      color: "blue"
    },
    {
      name: "PROFESSIONAL WEBSITE",
      price: "8,999",
     适合: "Growing Business",
      icon: <FiZap className="w-6 h-6" />,
      features: [
        { text: "05 Pages", icon: <FiLayers /> },
        { text: "2 Business Emails", icon: <FiMail /> },
        { text: "Advanced SEO", icon: <FiSearch /> },
        { text: "Responsive Design", icon: <FiSmartphone /> },
        { text: "Advanced Product Listing", icon: <FiLayers /> },
        { text: "Unlimited Images", icon: <FiImage /> },
        { text: "Social Media Integration", icon: <FiShare2 /> },
        { text: "Live Chat Integration", icon: <FiMessageCircle /> },
        { text: "Payment Gateway", icon: <FiCreditCard /> },
        { text: "24x7 Support", icon: <FiClock />, highlight: true },
        { text: "Blog Integration", icon: <FiCode /> }
      ],
      recommended: true,
      color: "green"
    },
    {
      name: "E-COMMERCE SOLUTION",
      price: "16,999",
     适合: "Online Store",
      icon: <FiDatabase className="w-6 h-6" />,
      features: [
        { text: "10+ Dynamic Pages", icon: <FiLayers /> },
        { text: "3 Business Emails", icon: <FiMail /> },
        { text: "Advanced SEO", icon: <FiSearch /> },
        { text: "Responsive Design", icon: <FiSmartphone /> },
        { text: "Full E-commerce Setup", icon: <FiLayers /> },
        { text: "Unlimited Products", icon: <FiImage /> },
        { text: "Social Media Integration", icon: <FiShare2 /> },
        { text: "Live Chat Integration", icon: <FiMessageCircle /> },
        { text: "Multiple Payment Gateways", icon: <FiCreditCard /> },
        { text: "24x7 Support", icon: <FiClock />, highlight: true },
        { text: "Inventory Management", icon: <FiDatabase /> },
        { text: "Order Tracking", icon: <FiCode /> }
      ],
      recommended: false,
      color: "purple"
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
            <FiCode className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-600">Web Development</span> Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Custom websites and web applications built with modern technologies to help your business grow online.
          </p>
        </motion.div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                plan.recommended ? 'ring-2 ring-blue-500 transform scale-105 z-10' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 bg-${plan.color}-50`}>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-${plan.color}-100 text-${plan.color}-600`}>
                  {plan.icon}
                </div>
                <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                <p className="text-gray-600 mb-4">Best for: {plan.适合}</p>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold">₹{plan.price}</span>
                  <span className="text-gray-600 ml-2">/one-time</span>
                </div>
              </div>

              <div className="p-8">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className={`mr-2 mt-1 ${
                        feature.highlight ? 'text-green-500' : `text-${plan.color}-500`
                      }`}>
                        <FiCheck className="w-4 h-4" />
                      </span>
                      <span className={feature.highlight ? 'font-semibold text-green-600' : 'text-gray-700'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition transform hover:scale-105 bg-${plan.color}-600 text-white hover:bg-${plan.color}-700`}
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Need a Custom Website?</h2>
              <p className="text-blue-100 mb-6">
                Get a free consultation for your web development project. Call us now!
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                    📞
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Phone Number:</p>
                    <p className="text-2xl font-bold">99-10-93-91-10</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                    🌐
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Visit Us:</p>
                    <p className="text-xl font-semibold">amitytech.in</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105 inline-flex items-center"
              >
                Get Started
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebDevelopment;