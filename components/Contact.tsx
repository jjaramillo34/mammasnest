'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);
  const [activeSocial, setActiveSocial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSocial((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const contactInfo = [
    {
      id: 1,
      icon: Mail,
      title: 'Email',
      value: 'hello@mammasnest.com',
      link: 'mailto:hello@mammasnest.com',
    },
    {
      id: 2,
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      id: 3,
      icon: MapPin,
      title: 'Address',
      value: '123 Wellness Street, Jamaica',
      link: '#',
    },
  ];

  const socialMedia = [
    { name: 'Instagram', icon: '📷', link: '#' },
    { name: 'Facebook', icon: '📘', link: '#' },
    { name: 'Twitter', icon: '🐦', link: '#' },
    { name: 'Pinterest', icon: '📌', link: '#' },
  ];

  const quickLinks = [
    { name: 'About Us', link: '#about' },
    { name: 'Our Products', link: '#products' },
    { name: 'Shipping Info', link: '#' },
    { name: 'Returns', link: '#' },
    { name: 'Privacy Policy', link: '#' },
    { name: 'Terms of Service', link: '#' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="section-padding bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-gray-50 rounded-full opacity-30"
          animate={{
            x: mousePosition.x * 0.01,
            y: mousePosition.y * 0.01,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-gray-100 rounded-full opacity-20"
          animate={{
            x: mousePosition.x * -0.02,
            y: mousePosition.y * -0.02,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        />
      </div>

      <div className="max-w-zara mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="zara-heading mb-6">
            Get In
            <br />
            <span className="text-gray-400">Touch</span>
          </h2>
          <p className="zara-subheading text-gray-600 max-w-2xl mx-auto">
            Have questions about our products? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-light uppercase tracking-wider text-gray-600 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:outline-none transition-colors duration-300 bg-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-light uppercase tracking-wider text-gray-600 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:outline-none transition-colors duration-300 bg-white"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-light uppercase tracking-wider text-gray-600 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:outline-none transition-colors duration-300 bg-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-light uppercase tracking-wider text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:outline-none transition-colors duration-300 bg-white resize-none"
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="zara-button group"
              >
                Send Message
                <Send className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-light tracking-wide mb-6">Contact Information</h3>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.id}
                  href={info.link}
                  onHoverStart={() => setHoveredContact(info.id)}
                  onHoverEnd={() => setHoveredContact(null)}
                  className="flex items-center space-x-4 group cursor-pointer"
                >
                  <motion.div
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300"
                    animate={{
                      scale: hoveredContact === info.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <info.icon className="w-5 h-5" />
                  </motion.div>
                  <div>
                    <div className="text-sm font-light uppercase tracking-wider text-gray-500">{info.title}</div>
                    <div className="font-light tracking-wide group-hover:text-gray-600 transition-colors duration-300">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-light tracking-wide mb-6">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-sm font-light uppercase tracking-wider text-gray-600 hover:text-black transition-colors duration-300 flex items-center group"
                  >
                    {link.name}
                    <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-light tracking-wide mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    animate={{
                      scale: activeSocial === index ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-lg">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="zara-button-outline group"
          >
            Visit Our Store
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 