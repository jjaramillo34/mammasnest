'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, ShoppingBag } from 'lucide-react';

const Products = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const products = [
    {
      id: 1,
      name: 'Raw Wildflower Honey',
      price: '$24.99',
      rating: 4.9,
      image: '/honey.png',
      category: 'Honey',
      description: 'Pure, unprocessed honey from wildflowers',
      features: ['100% Natural', 'Unfiltered', 'Rich Flavor'],
    },
    {
      id: 2,
      name: 'Organic Green Tea',
      price: '$18.99',
      rating: 4.8,
      image: '/tea.png',
      category: 'Tea',
      description: 'Premium organic green tea leaves',
      features: ['Organic', 'Antioxidant Rich', 'Smooth Taste'],
    },
    {
      id: 3,
      name: 'Herbal Chamomile Blend',
      price: '$16.99',
      rating: 4.7,
      image: '/herbal.png',
      category: 'Herbal',
      description: 'Soothing chamomile and lavender blend',
      features: ['Calming', 'Caffeine Free', 'Natural'],
    },
    {
      id: 4,
      name: 'Manuka Honey',
      price: '$39.99',
      rating: 4.9,
      image: '/manuka.png',
      category: 'Premium',
      description: 'Premium healing Manuka honey',
      features: ['High MGO', 'Healing Properties', 'Rare'],
    },
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
    <section id="products" className="section-padding bg-white">
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
            Our
            <br />
            <span className="text-gray-400">Collection</span>
          </h2>
          <p className="zara-subheading text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium organic products, 
            each crafted with tradition and care.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
              className="group cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative aspect-[3/4] bg-gray-100 mb-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-100"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4">
                      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="text-sm font-light uppercase tracking-wider text-gray-600">
                      {product.category}
                    </div>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={{
                    opacity: hoveredProduct === product.id ? 1 : 0,
                  }}
                />
                
                {/* Quick Add Button */}
                <motion.button
                  className="absolute bottom-4 right-4 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ShoppingBag className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <h3 className="text-lg font-light tracking-wide">{product.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
                
                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-black fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">({product.rating})</span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs font-light uppercase tracking-wider text-gray-500 border border-gray-200 px-2 py-1"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price and Add Button */}
                <div className="flex items-center justify-between pt-4">
                  <span className="text-xl font-light">{product.price}</span>
                  <motion.button
                    className="text-sm font-light uppercase tracking-wider border-b border-black pb-1 hover:text-gray-600 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    Add to Cart
                  </motion.button>
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
            className="zara-button group"
          >
            View All Products
            <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Products; 