'use client'

import { motion } from 'motion/react'
import { ArrowRight, Star, Leaf, Heart, Sparkles, Coffee, Zap, Shield } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated, config } from '@react-spring/web'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  })

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

  // Spring animations
  const titleSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: heroInView ? 1 : 0, transform: heroInView ? 'translateY(0px)' : 'translateY(50px)' },
    config: config.wobbly,
    delay: 200
  })

  const buttonSpring = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: heroInView ? 1 : 0, transform: heroInView ? 'scale(1)' : 'scale(0.8)' },
    config: config.gentle,
    delay: 600
  })

  const cardSpring = useSpring({
    from: { opacity: 0, transform: 'rotateY(90deg)' },
    to: { opacity: heroInView ? 1 : 0, transform: heroInView ? 'rotateY(0deg)' : 'rotateY(90deg)' },
    config: config.slow,
    delay: 800
  })

  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5
  }))

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-jamaican-green-50 to-jamaican-yellow-50 overflow-hidden"
    >
      {/* Enhanced Background Elements with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-jamaican-green-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{
            transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px)`
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-jamaican-yellow-200 rounded-full opacity-20"
        />
        
        {/* Animated Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -100, -200],
              x: [0, Math.random() * 50 - 25, Math.random() * 100 - 50]
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
        
        {/* Floating Elements with Enhanced Animation */}
        <motion.div
          animate={{ 
            y: [-10, 10, -10],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-4 h-4 bg-jamaican-green-300 rounded-full opacity-60"
        />
        <motion.div
          animate={{ 
            y: [10, -10, 10],
            rotate: [360, 180, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-32 w-3 h-3 bg-jamaican-yellow-400 rounded-full opacity-60"
        />
        <motion.div
          animate={{ 
            y: [-15, 15, -15],
            x: [0, 10, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-1/4 w-5 h-5 bg-jamaican-green-400 rounded-full opacity-50"
        />
        <motion.div
          animate={{ 
            y: [15, -15, 15],
            x: [0, -10, 0],
            scale: [1, 0.7, 1]
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-1/3 w-2 h-2 bg-jamaican-yellow-500 rounded-full opacity-70"
        />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content with Spring Animations */}
          <div className="text-center lg:text-left">
            {/* Premium Badge with Enhanced Animation */}
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
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
                    <Star className="w-5 h-5 text-jamaican-yellow-500 fill-current" />
                  </motion.div>
                ))}
              </div>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-sm font-medium text-gray-600 bg-white/80 px-3 py-1 rounded-full shadow-sm backdrop-blur-sm"
              >
                Premium Organic Products
              </motion.span>
            </motion.div>

            {/* Main Heading with Spring Animation */}
            <animated.h1
              style={titleSpring}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight"
            >
              <motion.span 
                className="text-gradient block mb-2"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(237, 170, 31, 0.5)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Mamma's Nest
              </motion.span>
              <motion.span 
                className="text-gray-800 block text-3xl md:text-4xl lg:text-5xl"
                whileHover={{ 
                  scale: 1.02,
                  color: "#5f725f"
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                Organic Tea & Honey
              </motion.span>
            </animated.h1>

            {/* Enhanced Description with Typewriter Effect */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                Discover the purest organic teas and raw honey, carefully sourced and crafted with love. 
                Every product tells a story of tradition, quality, and natural goodness.
              </motion.span>
            </motion.p>

            {/* Enhanced CTA Buttons with Spring Animation */}
            <animated.div
              style={buttonSpring}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 10px 25px rgba(237, 170, 31, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center space-x-3 text-lg px-8 py-4 shadow-xl relative overflow-hidden group"
              >
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Explore Products
                </motion.span>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowRight size={20} />
                </motion.div>
                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 10px 25px rgba(95, 114, 95, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center space-x-3 text-lg px-8 py-4 shadow-xl relative overflow-hidden group"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Leaf size={20} />
                </motion.div>
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Learn Our Story
                </motion.span>
              </motion.button>
            </animated.div>

            {/* Enhanced Trust Indicators with Hover Effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6"
            >
              {[
                { icon: Shield, text: "100% Organic", color: "jamaican-green-500" },
                { icon: Coffee, text: "Sustainably Sourced", color: "jamaican-yellow-500" },
                { icon: Zap, text: "Woman-Owned Business", color: "jamaican-black-700" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
                  }}
                  className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm cursor-pointer"
                >
                  <motion.div 
                    className={`w-3 h-3 bg-${item.color} rounded-full`}
                    whileHover={{ scale: 1.5, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <span className="text-sm font-medium text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Enhanced Right Content - Product Showcase with 3D Effects */}
          <animated.div
            style={cardSpring}
            className="relative"
          >
            {/* Background Glow with Parallax */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-jamaican-green-100/30 to-jamaican-yellow-100/30 rounded-3xl blur-3xl"
              style={{
                transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
              }}
            />
            
            <div className="grid grid-cols-2 gap-6 relative z-10">
              {/* Tea Products with Enhanced 3D Effects */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="space-y-6"
              >
                {[
                  { 
                    icon: Leaf, 
                    title: "Organic Herbal Tea", 
                    desc: "Naturally soothing blends",
                    gradient: "from-jamaican-green-300 to-jamaican-green-500"
                  },
                  { 
                    icon: Coffee, 
                    title: "Green Tea Collection", 
                    desc: "Antioxidant-rich varieties",
                    gradient: "from-jamaican-green-400 to-jamaican-green-600"
                  }
                ].map((product, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, rotateY: 90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
                    whileHover={{ 
                      y: -12, 
                      scale: 1.05,
                      rotateY: 5,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                    }}
                    className="card p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform-gpu"
                    style={{
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <motion.div 
                      className={`w-20 h-20 bg-gradient-to-br ${product.gradient} rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg`}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                      }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <product.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="font-bold text-gray-800 mb-3 text-lg">{product.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{product.desc}</p>
                    <motion.div 
                      className="flex justify-center space-x-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.4 + i * 0.1, type: "spring", stiffness: 300 }}
                          whileHover={{ scale: 1.3, rotate: 180 }}
                        >
                          <Star className="w-4 h-4 text-jamaican-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Honey Products with Enhanced 3D Effects */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="space-y-6"
              >
                {[
                  { 
                    icon: Star, 
                    title: "Raw Wildflower Honey", 
                    desc: "Pure, unprocessed goodness",
                    gradient: "from-jamaican-yellow-300 to-jamaican-yellow-500"
                  },
                  { 
                    icon: Heart, 
                    title: "Manuka Honey", 
                    desc: "Premium healing properties",
                    gradient: "from-jamaican-yellow-400 to-jamaican-yellow-600"
                  }
                ].map((product, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ delay: 1.0 + index * 0.2, duration: 0.8 }}
                    whileHover={{ 
                      y: -12, 
                      scale: 1.05,
                      rotateY: -5,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                    }}
                    className="card p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform-gpu"
                    style={{
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <motion.div 
                      className={`w-20 h-20 bg-gradient-to-br ${product.gradient} rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg`}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: -360,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                      }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <product.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="font-bold text-gray-800 mb-3 text-lg">{product.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{product.desc}</p>
                    <motion.div 
                      className="flex justify-center space-x-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4 + index * 0.1 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.6 + i * 0.1, type: "spring", stiffness: 300 }}
                          whileHover={{ scale: 1.3, rotate: -180 }}
                        >
                          <Star className="w-4 h-4 text-jamaican-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Enhanced Floating Elements */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 text-jamaican-yellow-400 opacity-60"
            >
              <Sparkles size={24} />
            </motion.div>
            <motion.div
              animate={{ 
                rotate: -360,
                scale: [1, 0.8, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 text-jamaican-green-400 opacity-60"
            >
              <Heart size={24} />
            </motion.div>
          </animated.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 