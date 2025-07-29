'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(null);
  const [activeRating, setActiveRating] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRating((prev) => (prev + 1) % 5);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Wellness Coach',
      rating: 5,
      text: 'The quality of Mamma\'s Nest honey is exceptional. I use it daily in my wellness routine and my clients love it too.',
      image: '/testimonial1.jpg',
      category: 'Premium Customer',
      verified: true,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Tea Enthusiast',
      rating: 5,
      text: 'Their organic tea collection is outstanding. The flavors are pure and authentic, exactly what I was looking for.',
      image: '/testimonial2.jpg',
      category: 'Regular Customer',
      verified: true,
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Health Blogger',
      rating: 5,
      text: 'I\'ve tried many brands, but Mamma\'s Nest stands out for their commitment to quality and natural ingredients.',
      image: '/testimonial3.jpg',
      category: 'Influencer',
      verified: true,
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Chef',
      rating: 5,
      text: 'As a chef, I\'m very particular about ingredients. Their honey adds the perfect touch to my signature dishes.',
      image: '/testimonial4.jpg',
      category: 'Professional',
      verified: true,
    },
  ];

  const stats = [
    { label: 'Happy Customers', value: '2,500+' },
    { label: 'Products Sold', value: '15,000+' },
    { label: 'Years Experience', value: '50+' },
    { label: 'Satisfaction Rate', value: '99%' },
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
    <section id="testimonials" className="section-padding bg-gray-50">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full opacity-30"
          animate={{
            x: mousePosition.x * 0.01,
            y: mousePosition.y * 0.01,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gray-100 rounded-full opacity-20"
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
            What Our
            <br />
            <span className="text-gray-400">Customers Say</span>
          </h2>
          <p className="zara-subheading text-gray-600 max-w-2xl mx-auto">
            Real experiences from people who trust Mamma's Nest for their daily wellness needs.
          </p>
        </motion.div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: activeRating === i ? 1.2 : 1,
                  color: activeRating === i ? '#000' : '#d1d5db',
                }}
                transition={{ duration: 0.3 }}
              >
                <Star className="w-6 h-6 fill-current" />
              </motion.div>
            ))}
          </div>
          <div className="text-3xl font-light mb-2">4.9</div>
          <div className="text-sm text-gray-500 uppercase tracking-wider">Average Rating</div>
        </motion.div>

        {/* Stats */}
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
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              onHoverStart={() => setHoveredTestimonial(testimonial.id)}
              onHoverEnd={() => setHoveredTestimonial(null)}
              className="bg-white p-8 group cursor-pointer"
            >
              {/* Quote Icon */}
              <motion.div
                className="mb-6"
                animate={{
                  scale: hoveredTestimonial === testimonial.id ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <Quote className="w-8 h-8 text-gray-300" />
              </motion.div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating ? 'text-black fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed mb-6">{testimonial.text}</p>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-light tracking-wide">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="text-xs font-light uppercase tracking-wider text-gray-500 border border-gray-200 px-3 py-1">
                  {testimonial.category}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="zara-button-outline group"
          >
            Read More Reviews
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 