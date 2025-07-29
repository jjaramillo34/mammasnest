'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-gray-100 rounded-full opacity-20"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gray-50 rounded-full opacity-30"
          animate={{
            x: mousePosition.x * -0.01,
            y: mousePosition.y * -0.01,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        />
      </div>

      <div className="relative z-10 max-w-zara mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="space-y-6">
                <motion.h1
                  variants={itemVariants}
                  className="zara-heading font-light tracking-wide leading-tight"
                >
                  Artisanal
                  <br />
                  <span className="text-gray-400">Honey & Tea</span>
                </motion.h1>
                
                <motion.p
                  variants={itemVariants}
                  className="zara-subheading text-gray-600 max-w-lg leading-relaxed"
                >
                  Discover the purest flavors from nature's finest ingredients. 
                  Handcrafted with love and tradition.
                </motion.p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="zara-button group"
                >
                  Shop Collection
                  <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="zara-button-outline group"
                >
                  <Play className="inline-block mr-2 w-4 h-4" />
                  Watch Story
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div variants={itemVariants} className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-light">500+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Happy Customers</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-light">50+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-light">100%</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Natural</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Product Showcase */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                {/* Main Product Image */}
                <motion.div
                  className="col-span-2 aspect-[4/5] bg-gray-100 relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-100"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4">
                        <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                      </div>
                      <div className="text-sm font-light uppercase tracking-wider text-gray-600">
                        Premium Honey
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Secondary Product Images */}
                <motion.div
                  className="aspect-square bg-gray-50 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-200 rounded-full mb-2"></div>
                      <div className="text-xs font-light uppercase tracking-wider text-gray-500">
                        Organic Tea
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="aspect-square bg-gray-50 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-200 rounded-full mb-2"></div>
                      <div className="text-xs font-light uppercase tracking-wider text-gray-500">
                        Herbal Blends
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                ★
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-200 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-px h-12 bg-gray-300"></div>
      </motion.div>
    </section>
  );
};

export default Hero; 