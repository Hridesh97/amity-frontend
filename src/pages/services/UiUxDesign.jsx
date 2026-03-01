import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCheck, 
  FiPenTool, 
  FiLayers, 
  FiUsers, 
  FiZap,
  FiEye,
  FiClock,
  FiTrendingUp,
  FiHeart,
  FiSmartphone,
  FiMonitor,
  FiGrid,
  FiCode
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const UiUxDesign = () => {
  const pricingPlans = [
    {
      name: "BASIC DESIGN PACKAGE",
      price: "9,999",
     适合: "Startups / Small Projects",
      icon: <FiPenTool className="w-6 h-6" />,
      features: [
        { text: "Up to 5 Screens/Pages", icon: <FiLayers /> },
        { text: "Wireframing", icon: <FiGrid /> },
        { text: "Basic UI Design", icon: <FiEye /> },
        { text: "User Flow Design", icon: <FiUsers /> },
        { text: "2 Rounds of Revisions", icon: <FiZap /> },
        { text: "Mobile Responsive", icon: <FiSmartphone /> },
        { text: "Source Files Included", icon: <FiHeart /> },
        { text: "2 Weeks Delivery", icon: <FiClock />, highlight: true }
      ],
      recommended: false,
      color: "purple"
    },
    {
      name: "PROFESSIONAL DESIGN",
      price: "24,999",
     适合: "Growing Businesses",
      icon: <FiLayers className="w-6 h-6" />,
      features: [
        { text: "Up to 15 Screens/Pages", icon: <FiLayers /> },
        { text: "Wireframing & Prototyping", icon: <FiGrid /> },
        { text: "Advanced UI Design", icon: <FiEye /> },
        { text: "User Flow & Information Architecture", icon: <FiUsers /> },
        { text: "Interactive Prototype", icon: <FiZap /> },
        { text: "User Testing", icon: <FiUsers /> },
        { text: "4 Rounds of Revisions", icon: <FiZap /> },
        { text: "Mobile & Desktop Designs", icon: <FiMonitor /> },
        { text: "Design System", icon: <FiGrid /> },
        { text: "Source Files Included", icon: <FiHeart /> },
        { text: "4 Weeks Delivery", icon: <FiClock />, highlight: true }
      ],
      recommended: true,
      color: "pink"
    },
    {
      name: "PREMIUM DESIGN",
      price: "49,999",
     适合: "Enterprise / Complex Projects",
      icon: <FiEye className="w-6 h-6" />,
      features: [
        { text: "Unlimited Screens/Pages", icon: <FiLayers /> },
        { text: "Complete UX Strategy", icon: <FiTrendingUp /> },
        { text: "Premium UI Design", icon: <FiEye /> },
        { text: "Advanced User Flow", icon: <FiUsers /> },
        { text: "Interactive Prototype", icon: <FiZap /> },
        { text: "Comprehensive User Testing", icon: <FiUsers /> },
        { text: "Unlimited Revisions", icon: <FiZap /> },
        { text: "Mobile, Tablet & Desktop", icon: <FiMonitor /> },
        { text: "Complete Design System", icon: <FiGrid /> },
        { text: "Developer Handoff", icon: <FiCode /> },
        { text: "Brand Guidelines", icon: <FiHeart /> },
        { text: "Source Files Included", icon: <FiHeart /> },
        { text: "8 Weeks Delivery", icon: <FiClock />, highlight: true }
      ],
      recommended: false,
      color: "indigo"
    }
  ];

  // Import FiCode if not already imported
  //const FiCode = FiPenTool; // Using as placeholder, you can add proper import

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
          <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mx-auto mb-6">
            <FiPenTool className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-purple-600">UI/UX Design</span> Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beautiful and intuitive user interfaces that engage your audience and provide seamless user experiences.
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
                plan.recommended ? 'ring-2 ring-purple-500 transform scale-105 z-10' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
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
                  Start Design Project
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Design Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Research</h3>
              <p className="text-gray-600">Understanding your users and business goals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Wireframe</h3>
              <p className="text-gray-600">Creating basic layout and structure</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Prototype</h3>
              <p className="text-gray-600">Interactive mockups for testing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Visual Design</h3>
              <p className="text-gray-600">Beautiful final designs with branding</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Need a Design That Stands Out?</h2>
              <p className="text-purple-100 mb-6">
                Let's create beautiful designs that your users will love. Contact us today!
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                    📞
                  </div>
                  <div>
                    <p className="text-sm text-purple-200">Call Us:</p>
                    <p className="text-2xl font-bold">99-10-93-91-10</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                    🌐
                  </div>
                  <div>
                    <p className="text-sm text-purple-200">Website:</p>
                    <p className="text-xl font-semibold">amitytech.in</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105 inline-flex items-center"
              >
                Discuss Your Project
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UiUxDesign;