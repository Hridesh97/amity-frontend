import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiSmartphone, 
  FiPenTool, 
  FiTrendingUp,
  FiShield,
  FiServer 
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <FiCode className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
    link: '/services/web-development',
    color: 'blue'
  },
  {
    icon: <FiSmartphone className="w-8 h-8" />,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    link: '/services/mobile-apps',
    color: 'green'
  },
  {
    icon: <FiPenTool className="w-8 h-8" />,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that engage your audience.',
    link: '/services/ui-ux-design',
    color: 'purple'
  },
  {
    icon: <FiTrendingUp className="w-8 h-8" />,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to grow your online presence.',
    link: '/services/digital-marketing',
    color: 'orange'
  },
  {
    icon: <FiShield className="w-8 h-8" />,
    title: 'Web Vulnerability',
    description: 'Comprehensive security audits to protect your website from threats.',
    link: '/services/web-vulnerability',
    color: 'red'
  },
  {
    icon: <FiServer className="w-8 h-8" />,
    title: 'Network Vulnerability',
    description: 'Network infrastructure security assessment and penetration testing.',
    link: '/services/network-vulnerability',
    color: 'yellow'
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer comprehensive digital solutions to help your business thrive
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className={`w-16 h-16 bg-${service.color}-100 rounded-lg flex items-center justify-center text-${service.color}-600 mb-4 group-hover:bg-${service.color}-600 group-hover:text-white transition-colors`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link to={service.link} className={`text-${service.color}-600 font-medium hover:text-${service.color}-700`}>
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;