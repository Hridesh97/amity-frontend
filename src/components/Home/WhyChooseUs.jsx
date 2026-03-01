import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiUsers, FiAward, FiHeart } from 'react-icons/fi';

const features = [
  {
    icon: <FiClock className="w-6 h-6" />,
    title: 'Fast Delivery',
    description: 'We deliver projects on time, every time.',
  },
  {
    icon: <FiUsers className="w-6 h-6" />,
    title: 'Expert Team',
    description: 'Skilled professionals with years of experience.',
  },
  {
    icon: <FiAward className="w-6 h-6" />,
    title: 'Quality Assured',
    description: 'We maintain the highest quality standards.',
  },
  {
    icon: <FiHeart className="w-6 h-6" />,
    title: 'Customer First',
    description: 'Your success is our priority.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Why Choose Us?</h2>
            <p className="text-gray-600 mb-8 text-lg">
              We combine technical expertise with creative thinking to deliver solutions that make a difference.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;