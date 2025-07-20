'use client'

import { motion } from 'motion/react'
import { ArrowRight, Star, Leaf, Heart, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-jamaican-green-50 to-jamaican-yellow-50 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-jamaican-green-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-jamaican-yellow-200 rounded-full opacity-20"
        />
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-4 h-4 bg-jamaican-green-300 rounded-full opacity-60"
        />
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-32 w-3 h-3 bg-jamaican-yellow-400 rounded-full opacity-60"
        />
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-1/4 w-5 h-5 bg-jamaican-green-400 rounded-full opacity-50"
        />
        <motion.div
          animate={{ y: [15, -15, 15] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-1/3 w-2 h-2 bg-jamaican-yellow-500 rounded-full opacity-70"
        />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start space-x-2 mb-6"
            >
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <Star className="w-5 h-5 text-jamaican-yellow-500 fill-current" />
                  </motion.div>
                ))}
              </div>
              <span className="text-sm font-medium text-gray-600 bg-white/80 px-3 py-1 rounded-full shadow-sm">
                Premium Organic Products
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight"
            >
              <span className="text-gradient block mb-2">Mamma's Nest</span>
              <span className="text-gray-800 block text-3xl md:text-4xl lg:text-5xl">
                Organic Tea & Honey
              </span>
            </motion.h1>

            {/* Enhanced Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Discover the purest organic teas and raw honey, carefully sourced and crafted with love. 
              Every product tells a story of tradition, quality, and natural goodness.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center space-x-3 text-lg px-8 py-4 shadow-xl"
              >
                <span>Explore Products</span>
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center space-x-3 text-lg px-8 py-4 shadow-xl"
              >
                <Leaf size={20} />
                <span>Learn Our Story</span>
              </motion.button>
            </motion.div>

            {/* Enhanced Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
              >
                <div className="w-3 h-3 bg-jamaican-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">100% Organic</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
              >
                <div className="w-3 h-3 bg-jamaican-yellow-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Sustainably Sourced</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
              >
                <div className="w-3 h-3 bg-jamaican-black-700 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Woman-Owned Business</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced Right Content - Product Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-jamaican-green-100/30 to-jamaican-yellow-100/30 rounded-3xl blur-3xl"></div>
            
            <div className="grid grid-cols-2 gap-6 relative z-10">
              {/* Tea Products */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="space-y-6"
              >
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="card p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-jamaican-green-300 to-jamaican-green-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <Leaf className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">Organic Herbal Tea</h3>
                  <p className="text-sm text-gray-600 mb-4">Naturally soothing blends</p>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-jamaican-yellow-400 fill-current" />
                    ))}
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="card p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-jamaican-green-400 to-jamaican-green-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <Leaf className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">Green Tea Collection</h3>
                  <p className="text-sm text-gray-600 mb-4">Antioxidant-rich varieties</p>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-jamaican-yellow-400 fill-current" />
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Honey Products */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="space-y-6"
              >
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="card p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-jamaican-yellow-300 to-jamaican-yellow-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">Raw Wildflower Honey</h3>
                  <p className="text-sm text-gray-600 mb-4">Pure, unprocessed goodness</p>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-jamaican-yellow-400 fill-current" />
                    ))}
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="card p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-jamaican-yellow-400 to-jamaican-yellow-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">Manuka Honey</h3>
                  <p className="text-sm text-gray-600 mb-4">Premium healing properties</p>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-jamaican-yellow-400 fill-current" />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Floating Sparkles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 text-jamaican-yellow-400 opacity-60"
            >
              <Sparkles size={24} />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 text-jamaican-green-400 opacity-60"
            >
              <Heart size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 