import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCheck, 
  FiFileText, 
  FiMail, 
  FiSearch, 
  FiSmartphone, 
  FiImage, 
  FiShare2, 
  FiMessageCircle, 
  FiCreditCard,
  FiClock,
  FiShoppingCart,
  FiLayers,
  FiTrendingUp,
  FiCode,
  FiPenTool,
  FiBarChart2
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Services = () => {
  const pricingPlans = [
    {
      name: "BASIC PLAN",
      price: "3,999",
      pages: "02 Pages",
      icon: <FiFileText className="w-6 h-6" />,
      features: [
        { text: "02 Pages", icon: <FiFileText /> },
        { text: "1 Business Email", icon: <FiMail /> },
        { text: "SEO Ready", icon: <FiSearch /> },
        { text: "Responsive Design", icon: <FiSmartphone /> },
        { text: "Product Listing", icon: <FiLayers /> },
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
      name: "PROFESSIONAL PLAN",
      price: "8,999",
      pages: "05 Pages",
      icon: <FiTrendingUp className="w-6 h-6" />,
      features: [
        { text: "05 Pages", icon: <FiFileText /> },
        { text: "1 Business Email", icon: <FiMail /> },
        { text: "SEO Ready", icon: <FiSearch /> },
        { text: "Responsive Design", icon: <FiSmartphone /> },
        { text: "Product Listing", icon: <FiLayers /> },
        { text: "Unlimited Images", icon: <FiImage /> },
        { text: "Social Media Integration", icon: <FiShare2 /> },
        { text: "Live Chat Integration", icon: <FiMessageCircle /> },
        { text: "Payment Gateway", icon: <FiCreditCard /> },
        { text: "24x7 Support", icon: <FiClock />, highlight: true }
      ],
      recommended: true,
      color: "green"
    },
    {
      name: "BUSINESS OR E-COMMERCE",
      price: "16,999",
      pages: "05+ Pages",
      icon: <FiShoppingCart className="w-6 h-6" />,
      features: [
        { text: "05+ Dynamic Pages", icon: <FiFileText /> },
        { text: "1 Business Email", icon: <FiMail /> },
        { text: "SEO Ready", icon: <FiSearch /> },
        { text: "Responsive Design", icon: <FiSmartphone /> },
        { text: "Advanced Product Listing", icon: <FiLayers /> },
        { text: "Unlimited Images", icon: <FiImage /> },
        { text: "Social Media Integration", icon: <FiShare2 /> },
        { text: "Live Chat Integration", icon: <FiMessageCircle /> },
        { text: "Payment Gateway", icon: <FiCreditCard /> },
        { text: "24x7 Support", icon: <FiClock />, highlight: true }
      ],
      recommended: false,
      color: "purple"
    }
  ];

  const additionalServices = [
    {
      title: "Custom WordPress Development",
      description: "Tailored WordPress solutions built from scratch to meet your specific business requirements.",
      icon: <FiCode className="w-8 h-8" />,
      features: ["Custom Theme Development", "Plugin Development", "API Integration", "Database Optimization"]
    },
    {
      title: "WooCommerce Solutions",
      description: "Powerful e-commerce stores with complete inventory management and payment processing.",
      icon: <FiShoppingCart className="w-8 h-8" />,
      features: ["Product Management", "Shopping Cart", "Payment Gateways", "Order Tracking"]
    },
    {
      title: "WordPress Maintenance",
      description: "Comprehensive maintenance and support to keep your WordPress site secure and up-to-date.",
      icon: <FiClock className="w-8 h-8" />,
      features: ["Regular Updates", "Security Patches", "Daily Backups", "Performance Monitoring"]
    },
    {
      title: "SEO & Digital Marketing",
      description: "Data-driven SEO strategies to improve your search rankings and drive organic traffic.",
      icon: <FiBarChart2 className="w-8 h-8" />,
      features: ["On-Page SEO", "Keyword Research", "Content Strategy", "Analytics Setup"]
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, user-centric designs that engage visitors and drive conversions.",
      icon: <FiPenTool className="w-8 h-8" />,
      features: ["Wireframing", "Prototyping", "Responsive Design", "User Testing"]
    },
    {
      title: "Speed Optimization",
      description: "Optimize your WordPress site for lightning-fast performance and better user experience.",
      icon: <FiTrendingUp className="w-8 h-8" />,
      features: ["Caching Setup", "Image Optimization", "Code Minification", "CDN Integration"]
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container-custom">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary-600">WordPress</span> Development Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional WordPress solutions tailored to your business needs. From basic blogs to full-fledged e-commerce stores.
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
                plan.recommended ? 'ring-2 ring-primary-500 transform scale-105 z-10' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Recommended
                </div>
              )}
              
              <div className={`p-8 ${
                plan.color === 'blue' ? 'bg-blue-50' : 
                plan.color === 'green' ? 'bg-green-50' : 'bg-purple-50'
              }`}>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                  plan.color === 'blue' ? 'bg-blue-100 text-blue-600' : 
                  plan.color === 'green' ? 'bg-green-100 text-green-600' : 'bg-purple-100 text-purple-600'
                }`}>
                  {plan.icon}
                </div>
                <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                <p className="text-gray-600 mb-4">{plan.pages}</p>
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
                        feature.highlight ? 'text-green-500' : 
                        plan.color === 'blue' ? 'text-blue-500' : 
                        plan.color === 'green' ? 'text-green-500' : 'text-purple-500'
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
                  className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition transform hover:scale-105 ${
                    plan.recommended
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : plan.color === 'blue'
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : plan.color === 'green'
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 mb-20 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Book Your Website Today!</h2>
              <p className="text-primary-100 mb-6">
                Get started with your professional WordPress website. Call us now for a free consultation!
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                    📞
                  </div>
                  <div>
                    <p className="text-sm text-primary-200">Phone Number:</p>
                    <p className="text-2xl font-bold">99-10-93-91-10</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                    🌐
                  </div>
                  <div>
                    <p className="text-sm text-primary-200">Our Website:</p>
                    <p className="text-xl font-semibold">amitytech.in</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link
                to="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105 inline-flex items-center"
              >
                Get Started Now
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-4">More Services We Offer</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive WordPress solutions to meet all your business needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <FiCheck className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">How long does it take to build a website?</h3>
              <p className="text-gray-600">Basic websites take 2-3 weeks, while e-commerce sites typically take 4-6 weeks depending on requirements.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Do I need hosting?</h3>
              <p className="text-gray-600">Yes, but we can help you choose and set up the best hosting provider for your needs.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Will my website be mobile-friendly?</h3>
              <p className="text-gray-600">Absolutely! All our websites are fully responsive and work perfectly on all devices.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Do you provide maintenance?</h3>
              <p className="text-gray-600">Yes, we offer monthly maintenance packages to keep your site secure and up-to-date.</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get in touch with us today and let's discuss how we can help you build the perfect website for your business.
          </p>
          <Link to="/contact" className="btn-primary inline-block">
            Contact Us Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;