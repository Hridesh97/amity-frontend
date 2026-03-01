import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-600">
            We are a team of passionate developers and designers dedicated to creating exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2015, we started as a small team of developers with a big vision. Today, we've grown into a full-service digital agency helping businesses worldwide achieve their goals through technology.
            </p>
            <p className="text-gray-600">
              Our mission is simple: to deliver innovative solutions that make a real difference for our clients. We believe in building lasting relationships based on trust, quality, and results.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
              alt="Our team"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${member === 1 ? '1472099645785-5658abf4ff4e' : member === 2 ? '1494790108777-8fde9f1b9c3d' : member === 3 ? '1500648767791-00dcc994a43e' : '1534528741775-53994a69daeb'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80`}
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">John Doe</h3>
                <p className="text-gray-600">Lead Developer</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;