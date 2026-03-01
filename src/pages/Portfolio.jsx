import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "E-Commerce Fashion Store",
      category: "ecommerce",
      type: "WooCommerce",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Complete online fashion store with product management, payment gateway, and inventory system.",
      technologies: ["WordPress", "WooCommerce", "PHP", "MySQL"],
      link: "#"
    },
    {
      title: "Corporate Business Website",
      category: "business",
      type: "Corporate",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Professional corporate website with company profile, services, and contact integration.",
      technologies: ["WordPress", "Elementor", "Contact Form 7"],
      link: "#"
    },
    {
      title: "Restaurant & Cafe Website",
      category: "restaurant",
      type: "Food & Beverage",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Online presence for a restaurant with menu display, table reservation, and location map.",
      technologies: ["WordPress", "Custom Theme", "Google Maps API"],
      link: "#"
    },
    {
      title: "Healthcare Portal",
      category: "healthcare",
      type: "Medical",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Healthcare website with appointment booking, doctor profiles, and patient resources.",
      technologies: ["WordPress", "Custom Post Types", "Booking System"],
      link: "#"
    },
    {
      title: "Real Estate Listings",
      category: "realestate",
      type: "Property",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Property listing website with search filters, property details, and agent profiles.",
      technologies: ["WordPress", "Advanced Custom Fields", "WP Property"],
      link: "#"
    },
    {
      title: "Educational Institute",
      category: "education",
      type: "School/College",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Educational website with course listings, student portal, and event management.",
      technologies: ["WordPress", "LearnDash", "bbPress"],
      link: "#"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'ecommerce', label: 'E-Commerce' },
    { value: 'business', label: 'Business' },
    { value: 'restaurant', label: 'Restaurant' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'realestate', label: 'Real Estate' },
    { value: 'education', label: 'Education' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="pt-24 pb-20">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our latest WordPress projects and see how we've helped businesses like yours succeed online.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                filter === cat.value
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.link}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-primary-600 hover:text-white transition"
                  >
                    <FiExternalLink />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-primary-600 hover:text-white transition"
                  >
                    <FiGithub />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-xs font-semibold bg-primary-100 text-primary-600 px-2 py-1 rounded">
                    {project.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-primary-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-primary-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8+</div>
              <div className="text-primary-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-100">E-commerce Sites</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;