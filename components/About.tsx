'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Heart, Leaf, Star } from 'lucide-react';

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const [activeStat, setActiveStat] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const values = [
    {
      id: 1,
      icon: Heart,
      title: 'Authenticity',
      description: 'Every product reflects our genuine commitment to quality and tradition.',
      color: 'gray',
    },
    {
      id: 2,
      icon: Leaf,
      title: 'Sustainability',
      description: 'We source responsibly and care for the environment in everything we do.',
      color: 'gray',
    },
    {
      id: 3,
      icon: Star,
      title: 'Excellence',
      description: 'We never compromise on quality, from sourcing to final delivery.',
      color: 'gray',
    },
  ];

  const stats = [
    { label: 'Years of Tradition', value: '50+' },
    { label: 'Happy Customers', value: '10,000+' },
    { label: 'Products Created', value: '100+' },
    { label: 'Quality Rating', value: '4.9★' },
  ];

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
    <section id="about" className="section-padding bg-gray-50">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full opacity-30"
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
            Our
            <br />
            <span className="text-gray-400">Story</span>
          </h2>
          <p className="zara-subheading text-gray-600 max-w-2xl mx-auto">
            Discover the passion and tradition behind Mamma's Nest, 
            where every product tells a story of heritage and quality.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-light tracking-wide">A Legacy of Quality</h3>
              <p className="zara-text text-gray-600 leading-relaxed">
                Founded with a deep respect for traditional methods and a commitment to excellence, 
                Mamma's Nest has been crafting premium organic products for over five decades. 
                Our journey began with a simple belief: that nature provides the best ingredients 
                for health and wellness.
              </p>
              <p className="zara-text text-gray-600 leading-relaxed">
                Today, we continue to honor our heritage while embracing modern standards of quality 
                and sustainability. Every product we create is a testament to our dedication to 
                authenticity and the well-being of our customers.
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="zara-button-outline group"
            >
              Learn More
              <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="aspect-square bg-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-100"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-6">
                    <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="text-sm font-light uppercase tracking-wider text-gray-600">
                    Our Heritage
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div
                className="text-3xl font-light mb-2 group-hover:text-gray-600 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                animate={{
                  scale: activeStat === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              variants={itemVariants}
              onHoverStart={() => setHoveredValue(value.id)}
              onHoverEnd={() => setHoveredValue(null)}
              className="bg-white p-8 group cursor-pointer"
            >
              <motion.div
                className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300"
                animate={{
                  scale: hoveredValue === value.id ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <value.icon className="w-8 h-8" />
              </motion.div>
              
              <h3 className="text-xl font-light tracking-wide mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-12 text-center"
        >
          <motion.div
            className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Heart className="w-8 h-8" />
          </motion.div>
          
          <blockquote className="text-2xl font-light tracking-wide mb-6 max-w-3xl mx-auto">
            "We believe in creating products that not only nourish the body but also honor the traditions 
            and values that have been passed down through generations."
          </blockquote>
          
          <div className="text-sm text-gray-500 uppercase tracking-wider">
            — Mamma's Nest Family
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 