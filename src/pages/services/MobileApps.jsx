import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCheck, 
  FiSmartphone, 
  FiCode, 
  FiCloud,
  FiClock,
  FiUsers,
  FiAward,
  FiTrendingUp,
  FiCreditCard,
  FiSettings,
  FiBarChart2
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const MobileApps = () => {
  const pricingPlans = [
    {
      name: "BASIC MOBILE APP",
      price: "49,999",
     适合: "Startups",
      icon: <FiSmartphone className="w-6 h-6" />,
      features: [
        { text: "Single Platform (iOS/Android)", icon: <FiSmartphone /> },
        { text: "Up to 5 Screens", icon: <FiCode /> },
        { text: "Basic UI/UX Design", icon: <FiAward /> },
        { text: "User Authentication", icon: <FiUsers /> },
        { text: "Push Notifications", icon: <FiTrendingUp /> },
        { text: "API Integration", icon: <FiCloud /> },
        { text: "App Store Submission", icon: <FiCloud /> },
        { text: "3 Months Support", icon: <FiClock />, highlight: true }
      ],
      recommended: false,
      color: "green"
    },
    {
      name: "PROFESSIONAL APP",
      price: "99,999",
     适合: "Growing Businesses",
      icon: <FiSmartphone className="w-6 h-6" />,
      features: [
        { text: "Both Platforms (iOS & Android)", icon: <FiSmartphone /> },
        { text: "Up to 15 Screens", icon: <FiCode /> },
        { text: "Advanced UI/UX Design", icon: <FiAward /> },
        { text: "User Authentication", icon: <FiUsers /> },
        { text: "Push Notifications", icon: <FiTrendingUp /> },
        { text: "Advanced API Integration", icon: <FiCloud /> },
        { text: "Payment Gateway", icon: <FiCreditCard /> },
        { text: "Admin Panel", icon: <FiSettings /> },
        { text: "App Store Submission", icon: <FiCloud /> },
        { text: "6 Months Support", icon: <FiClock />, highlight: true }
      ],
      recommended: true,
      color: "blue"
    },
    {
      name: "ENTERPRISE APP",
      price: "1,99,999",
     适合: "Large Businesses",
      icon: <FiTrendingUp className="w-6 h-6" />,
      features: [
        { text: "Both Platforms (iOS & Android)", icon: <FiSmartphone /> },
        { text: "Unlimited Screens", icon: <FiCode /> },
        { text: "Premium UI/UX Design", icon: <FiAward /> },
        { text: "Advanced Authentication", icon: <FiUsers /> },
        { text: "Push Notifications", icon: <FiTrendingUp /> },
        { text: "Complex API Integration", icon: <FiCloud /> },
        { text: "Multiple Payment Gateways", icon: <FiCreditCard /> },
        { text: "Real-time Features", icon: <FiTrendingUp /> },
        { text: "Admin Dashboard", icon: <FiBarChart2 /> },
        { text: "App Store Submission", icon: <FiCloud /> },
        { text: "12 Months Support", icon: <FiClock />, highlight: true },
        { text: "Analytics Integration", icon: <FiBarChart2 /> }
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
          <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mx-auto mb-6">
            <FiSmartphone className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-green-600">Mobile App</span> Development
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Native and cross-platform mobile applications for iOS and Android that engage your users.
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
                plan.recommended ? 'ring-2 ring-green-500 transform scale-105 z-10' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Recommended
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
                  <span className="text-gray-600 ml-2">/project</span>
                </div>
              </div>

              <div className="p-8">
                <ul className="space-y-3 mb-8 max-h-96 overflow-y-auto">
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
                  Start Your App
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Development Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our App Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Discovery</h3>
              <p className="text-gray-600">Understanding your app requirements and goals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Design</h3>
              <p className="text-gray-600">Creating intuitive UI/UX designs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Development</h3>
              <p className="text-gray-600">Building your app with modern technologies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Launch</h3>
              <p className="text-gray-600">Deploying to app stores and ongoing support</p>
            </div>
          </div>
        </motion.div>

        {/* Technologies We Use */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <span className="text-2xl font-bold text-green-600">React Native</span>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <span className="text-2xl font-bold text-green-600">Flutter</span>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <span className="text-2xl font-bold text-green-600">Swift</span>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <span className="text-2xl font-bold text-green-600">Kotlin</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Have an App Idea?</h2>
              <p className="text-green-100 mb-6">
                Let's bring your mobile app idea to life. Contact us today!
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                    📞
                  </div>
                  <div>
                    <p className="text-sm text-green-200">Call Us:</p>
                    <p className="text-2xl font-bold">99-10-93-91-10</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                    🌐
                  </div>
                  <div>
                    <p className="text-sm text-green-200">Website:</p>
                    <p className="text-xl font-semibold">amitytech.in</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105 inline-flex items-center"
              >
                Discuss Your Idea
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MobileApps;