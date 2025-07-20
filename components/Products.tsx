'use client'

import { motion } from 'motion/react'
import { ShoppingCart, Star, Leaf, Heart, Sparkles, Award, TrendingUp, Zap, Shield, Coffee } from 'lucide-react'
import { useState, useEffect } from 'react'

const Products = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const teaProducts = [
    {
      id: 1,
      name: "Chamomile Calm",
      description: "Soothing herbal blend for relaxation",
      price: "$12.99",
      image: "🍵",
      category: "Herbal",
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller",
      features: ["Caffeine Free", "Organic", "Relaxing"]
    },
    {
      id: 2,
      name: "Green Goddess",
      description: "Antioxidant-rich green tea blend",
      price: "$15.99",
      image: "🌿",
      category: "Green",
      rating: 4.9,
      reviews: 89,
      badge: "Premium",
      features: ["High Antioxidants", "Organic", "Energizing"]
    },
    {
      id: 3,
      name: "Lavender Dreams",
      description: "Floral blend for peaceful sleep",
      price: "$13.99",
      image: "💜",
      category: "Herbal",
      rating: 4.7,
      reviews: 156,
      badge: "Popular",
      features: ["Sleep Aid", "Organic", "Floral"]
    },
    {
      id: 4,
      name: "Peppermint Fresh",
      description: "Refreshing mint blend for digestion",
      price: "$11.99",
      image: "🌱",
      category: "Herbal",
      rating: 4.6,
      reviews: 203,
      badge: "New",
      features: ["Digestive Aid", "Organic", "Refreshing"]
    }
  ]

  const honeyProducts = [
    {
      id: 5,
      name: "Wildflower Raw Honey",
      description: "Pure, unprocessed wildflower honey",
      price: "$18.99",
      image: "🍯",
      category: "Raw",
      rating: 4.9,
      reviews: 234,
      badge: "Best Seller",
      features: ["Raw", "Unprocessed", "Pure"]
    },
    {
      id: 6,
      name: "Manuka Honey",
      description: "Premium healing honey from New Zealand",
      price: "$45.99",
      image: "🌟",
      category: "Premium",
      rating: 5.0,
      reviews: 67,
      badge: "Premium",
      features: ["Healing", "Premium", "Antibacterial"]
    },
    {
      id: 7,
      name: "Orange Blossom Honey",
      description: "Sweet citrus-infused honey",
      price: "$22.99",
      image: "🍊",
      category: "Flavored",
      rating: 4.8,
      reviews: 98,
      badge: "Popular",
      features: ["Citrus", "Flavored", "Sweet"]
    },
    {
      id: 8,
      name: "Buckwheat Honey",
      description: "Rich, dark honey with robust flavor",
      price: "$19.99",
      image: "🌾",
      category: "Raw",
      rating: 4.7,
      reviews: 145,
      badge: "Limited",
      features: ["Dark", "Rich", "Limited Edition"]
    }
  ]

  // Floating particles for enhanced background
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 3
  }))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotateY: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateY: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <section id="products" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Enhanced Floating Background Elements with Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -80, -160],
              x: [0, Math.random() * 40 - 20, Math.random() * 80 - 40]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
            className="absolute bg-jamaican-green-300 rounded-full"
          />
        ))}

        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`
          }}
          className="absolute top-20 left-10 w-4 h-4 bg-jamaican-green-200 rounded-full opacity-40"
        />
        <motion.div
          animate={{ 
            y: [20, -20, 20],
            rotate: [360, 180, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            transform: `translate(${-mousePosition.x * 20}px, ${-mousePosition.y * 20}px)`
          }}
          className="absolute top-40 right-20 w-3 h-3 bg-jamaican-yellow-200 rounded-full opacity-40"
        />
        <motion.div
          animate={{ 
            y: [-15, 15, -15],
            x: [0, 10, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-1/4 w-5 h-5 bg-jamaican-green-100 rounded-full opacity-30"
        />
        <motion.div
          animate={{ 
            y: [15, -15, 15],
            x: [0, -10, 0],
            scale: [1, 0.7, 1]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-1/3 w-2 h-2 bg-jamaican-yellow-300 rounded-full opacity-50"
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Enhanced Section Header with 3D Effects */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mb-20"
        >
          <motion.div 
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-jamaican-green-600" />
            </motion.div>
            <span className="text-jamaican-green-800 font-semibold">Premium Collection</span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
            whileHover={{ 
              scale: 1.02,
              textShadow: "0 0 20px rgba(95, 114, 95, 0.3)"
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <span className="text-gradient">Our Products</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Discover our carefully curated collection of organic teas and premium honey, 
            each product crafted with love and tradition.
          </motion.p>
        </motion.div>

        {/* Tea Products with Enhanced 3D Effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center space-x-3 bg-jamaican-green-50 px-8 py-4 rounded-full mb-6 shadow-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Leaf className="w-6 h-6 text-jamaican-green-600" />
              </motion.div>
              <span className="text-jamaican-green-800 font-bold text-lg">Organic Tea Collection</span>
            </motion.div>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6">
              Premium Organic Teas
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              From soothing herbal blends to antioxidant-rich green teas, each cup tells a story of natural wellness.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teaProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -12, 
                  scale: 1.03,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                onHoverStart={() => setHoveredProduct(product.id)}
                onHoverEnd={() => setHoveredProduct(null)}
                className="card p-8 group relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform-gpu"
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Enhanced Badge with Animation */}
                <motion.div 
                  className="absolute top-4 right-4 z-10"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <span className="bg-jamaican-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {product.badge}
                  </span>
                </motion.div>

                {/* Enhanced Background Glow with Parallax */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-jamaican-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
                  }}
                />

                <div className="text-center mb-6 relative z-10">
                  <motion.div 
                    className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300"
                    animate={hoveredProduct === product.id ? { 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    {product.image}
                  </motion.div>
                  <motion.div 
                    className="inline-flex items-center space-x-2 bg-jamaican-green-100 px-4 py-2 rounded-full shadow-sm"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-sm text-jamaican-green-800 font-semibold">{product.category}</span>
                  </motion.div>
                </div>
                
                <h4 className="font-bold text-gray-800 mb-3 text-center text-lg">{product.name}</h4>
                <p className="text-sm text-gray-600 text-center mb-6 leading-relaxed">{product.description}</p>
                
                {/* Enhanced Features List */}
                <motion.div 
                  className="flex flex-wrap justify-center gap-2 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {product.features.map((feature, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 200 }}
                      className="text-xs bg-jamaican-green-50 text-jamaican-green-700 px-2 py-1 rounded-full"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </motion.div>
                
                <div className="flex items-center justify-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 300 }}
                      whileHover={{ scale: 1.3, rotate: 180 }}
                    >
                      <Star
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) 
                            ? 'text-jamaican-yellow-500 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    </motion.div>
                  ))}
                  <span className="text-xs text-gray-500 ml-2 font-medium">
                    ({product.reviews})
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <motion.span 
                    className="text-2xl font-bold text-jamaican-green-600"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {product.price}
                  </motion.span>
                  <div className="flex space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 text-gray-400 hover:text-jamaican-green-600 transition-colors bg-gray-100 hover:bg-jamaican-green-50 rounded-full"
                    >
                      <Heart size={18} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary text-sm py-3 px-6 flex items-center space-x-2 shadow-lg relative overflow-hidden group"
                    >
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: -3 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        Add
                      </motion.span>
                      <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: 3, rotate: 360 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ShoppingCart size={16} />
                      </motion.div>
                      {/* Button shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Honey Products with Enhanced 3D Effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center space-x-3 bg-jamaican-yellow-50 px-8 py-4 rounded-full mb-6 shadow-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-6 h-6 text-jamaican-yellow-600" />
              </motion.div>
              <span className="text-jamaican-yellow-800 font-bold text-lg">Premium Honey Collection</span>
            </motion.div>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6">
              Pure Natural Honey
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              From raw wildflower honey to premium Manuka, experience the pure sweetness of nature.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {honeyProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -12, 
                  scale: 1.03,
                  rotateY: -5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                onHoverStart={() => setHoveredProduct(product.id)}
                onHoverEnd={() => setHoveredProduct(null)}
                className="card p-8 group relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform-gpu"
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Enhanced Badge with Animation */}
                <motion.div 
                  className="absolute top-4 right-4 z-10"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <span className="bg-jamaican-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {product.badge}
                  </span>
                </motion.div>

                {/* Enhanced Background Glow with Parallax */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-jamaican-yellow-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
                  }}
                />

                <div className="text-center mb-6 relative z-10">
                  <motion.div 
                    className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300"
                    animate={hoveredProduct === product.id ? { 
                      rotate: [0, -10, 10, 0],
                      scale: [1, 1.1, 1]
                    } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    {product.image}
                  </motion.div>
                  <motion.div 
                    className="inline-flex items-center space-x-2 bg-jamaican-yellow-100 px-4 py-2 rounded-full shadow-sm"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-sm text-jamaican-yellow-800 font-semibold">{product.category}</span>
                  </motion.div>
                </div>
                
                <h4 className="font-bold text-gray-800 mb-3 text-center text-lg">{product.name}</h4>
                <p className="text-sm text-gray-600 text-center mb-6 leading-relaxed">{product.description}</p>
                
                {/* Enhanced Features List */}
                <motion.div 
                  className="flex flex-wrap justify-center gap-2 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {product.features.map((feature, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 200 }}
                      className="text-xs bg-jamaican-yellow-50 text-jamaican-yellow-700 px-2 py-1 rounded-full"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </motion.div>
                
                <div className="flex items-center justify-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 300 }}
                      whileHover={{ scale: 1.3, rotate: -180 }}
                    >
                      <Star
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) 
                            ? 'text-jamaican-yellow-500 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    </motion.div>
                  ))}
                  <span className="text-xs text-gray-500 ml-2 font-medium">
                    ({product.reviews})
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <motion.span 
                    className="text-2xl font-bold text-jamaican-green-600"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {product.price}
                  </motion.span>
                  <div className="flex space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: -360 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 text-gray-400 hover:text-jamaican-yellow-600 transition-colors bg-gray-100 hover:bg-jamaican-yellow-50 rounded-full"
                    >
                      <Heart size={18} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-secondary text-sm py-3 px-6 flex items-center space-x-2 shadow-lg relative overflow-hidden group"
                    >
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: -3 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        Add
                      </motion.span>
                      <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: 3, rotate: 360 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ShoppingCart size={16} />
                      </motion.div>
                      {/* Button shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced CTA Section with 3D Effects */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center"
        >
          <div className="bg-gradient-primary rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
            {/* Enhanced Background Elements with Parallax */}
            <div className="absolute inset-0 bg-gradient-to-br from-jamaican-green-100/30 to-jamaican-yellow-100/30"></div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`
              }}
              className="absolute -top-20 -right-20 w-40 h-40 bg-jamaican-green-200 rounded-full opacity-20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              style={{
                transform: `translate(${-mousePosition.x * 20}px, ${-mousePosition.y * 20}px)`
              }}
              className="absolute -bottom-20 -left-20 w-48 h-48 bg-jamaican-yellow-200 rounded-full opacity-20"
            />
            
            <div className="relative z-10">
              <motion.div 
                className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Award className="w-5 h-5 text-jamaican-green-600" />
                </motion.div>
                <span className="text-jamaican-green-800 font-semibold">Premium Quality</span>
              </motion.div>
              <motion.h3 
                className="text-3xl md:text-4xl font-serif font-bold mb-6"
                whileHover={{ 
                  scale: 1.02,
                  textShadow: "0 0 20px rgba(95, 114, 95, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                Ready to Experience Natural Goodness?
              </motion.h3>
              <motion.p 
                className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Join thousands of customers who trust Mamma's Nest for their organic tea and honey needs.
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-10 py-4 shadow-xl relative overflow-hidden group"
                >
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Shop All Products
                  </motion.span>
                  {/* Button shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-lg px-10 py-4 shadow-xl relative overflow-hidden group"
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <TrendingUp size={20} className="mr-2" />
                  </motion.div>
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    View Best Sellers
                  </motion.span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Products 