import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCheck, 
  FiTrendingUp, 
  FiUsers, 
  FiSearch, 
  FiShare2,
  FiMail,
  FiBarChart2,
  FiClock,
  FiTarget,
  FiCamera,
  FiVideo,
  FiPenTool
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const DigitalMarketing = () => {
  const pricingPlans = [
    {
      name: "STARTER MARKETING",
      price: "5,999",
     适合: "Small Businesses",
      icon: <FiTrendingUp className="w-6 h-6" />,
      features: [
        { text: "Social Media Management (2 Platforms)", icon: <FiShare2 /> },
        { text: "10 Posts per Month", icon: <FiCamera /> },
        { text: "Basic SEO Optimization", icon: <FiSearch /> },
        { text: "Google My Business Setup", icon: <FiTarget /> },
        { text: "Monthly Performance Report", icon: <FiBarChart2 /> },
        { text: "Email Support", icon: <FiMail /> },
        { text: "3 Months Commitment", icon: <FiClock />, highlight: true }
      ],
      recommended: false,
      color: "orange"
    },
    {
      name: "GROWTH MARKETING",
      price: "12,999",
     适合: "Growing Businesses",
      icon: <FiUsers className="w-6 h-6" />,
      features: [
        { text: "Social Media Management (4 Platforms)", icon: <FiShare2 /> },
        { text: "20 Posts per Month", icon: <FiCamera /> },
        { text: "Advanced SEO", icon: <FiSearch /> },
        { text: "Content Marketing", icon: <FiPenTool /> },
        { text: "Email Marketing Campaigns", icon: <FiMail /> },
        { text: "PPC Campaign Management", icon: <FiTarget /> },
        { text: "Video Content (2 Videos)", icon: <FiVideo /> },
        { text: "Weekly Performance Reports", icon: <FiBarChart2 /> },
        { text: "Priority Support", icon: <FiUsers /> },
        { text: "6 Months Commitment", icon: <FiClock />, highlight: true }
      ],
      recommended: true,
      color: "red"
    },
    {
      name: "PREMIUM MARKETING",
      price: "24,999",
     适合: "Enterprise Level",
      icon: <FiBarChart2 className="w-6 h-6" />,
      features: [
        { text: "Social Media Management (All Platforms)", icon: <FiShare2 /> },
        { text: "30+ Posts per Month", icon: <FiCamera /> },
        { text: "Comprehensive SEO Strategy", icon: <FiSearch /> },
        { text: "Content Marketing & Blogging", icon: <FiPenTool /> },
        { text: "Advanced Email Automation", icon: <FiMail /> },
        { text: "Full PPC Management", icon: <FiTarget /> },
        { text: "Video Content (4 Videos)", icon: <FiVideo /> },
        { text: "Influencer Marketing", icon: <FiUsers /> },
        { text: "Reputation Management", icon: <FiTrendingUp /> },
        { text: "Daily Performance Reports", icon: <FiBarChart2 /> },
        { text: "Dedicated Account Manager", icon: <FiUsers /> },
        { text: "12 Months Commitment", icon: <FiClock />, highlight: true },
        { text: "24/7 Priority Support", icon: <FiClock /> }
      ],
      recommended: false,
      color: "yellow"
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
          <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mx-auto mb-6">
            <FiTrendingUp className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-orange-600">Digital Marketing</span> Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Data-driven marketing strategies to grow your online presence and reach your target audience.
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
                plan.recommended ? 'ring-2 ring-orange-500 transform scale-105 z-10' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Best Value
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
                  <span className="text-gray-600 ml-2">/month</span>
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
                  Start Marketing
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marketing Channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Marketing Channels We Cover</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <FiSearch className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold">SEO</h3>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <FiShare2 className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold">Social Media</h3>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <FiMail className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold">Email Marketing</h3>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <FiTarget className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold">PPC Ads</h3>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <FiPenTool className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold">Content</h3>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <FiVideo className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold">Video Marketing</h3>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <FiCamera className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold">Influencer</h3>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <FiBarChart2 className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold">Analytics</h3>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-orange-600 to-orange-800 rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
              <p className="text-orange-100 mb-6">
                Let's create a marketing strategy that works for you. Contact us today!
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                    📞
                  </div>
                  <div>
                    <p className="text-sm text-orange-200">Call Us:</p>
                    <p className="text-2xl font-bold">99-10-93-91-10</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                    🌐
                  </div>
                  <div>
                    <p className="text-sm text-orange-200">Website:</p>
                    <p className="text-xl font-semibold">amitytech.in</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link
                to="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105 inline-flex items-center"
              >
                Boost Your Business
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DigitalMarketing;