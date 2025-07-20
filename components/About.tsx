'use client'

import { motion } from 'motion/react'
import { Heart, Leaf, Star, Award, Sparkles, Quote, User, Coffee, Zap, Shield } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredValue, setHoveredValue] = useState<number | null>(null)
  const [activeStat, setActiveStat] = useState(0)

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

  // Auto-rotate through stats for dynamic effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-jamaican-green-600" />,
      title: "Crafted with Love",
      description: "Every product is made with passion and care, honoring family traditions.",
      color: "jamaican-green"
    },
    {
      icon: <Leaf className="w-8 h-8 text-jamaican-green-500" />,
      title: "100% Organic",
      description: "We source only the finest organic ingredients, never compromising on quality.",
      color: "jamaican-green"
    },
    {
      icon: <Star className="w-8 h-8 text-jamaican-yellow-500" />,
      title: "Premium Quality",
      description: "From farm to table, we ensure every product meets our high standards.",
      color: "jamaican-yellow"
    },
    {
      icon: <Award className="w-8 h-8 text-jamaican-black-700" />,
      title: "Woman-Owned",
      description: "Proud to be a Black woman-owned business supporting our community.",
      color: "jamaican-black"
    }
  ]

  const stats = [
    { number: "500+", label: "Happy Customers", color: "jamaican-green" },
    { number: "12", label: "Product Varieties", color: "jamaican-yellow" },
    { number: "3", label: "Years of Excellence", color: "jamaican-black" }
  ]

  // Floating particles for enhanced background
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 3
  }))

  return (
    <section id="about" className="section-padding bg-gradient-primary relative overflow-hidden">
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
            y: [-15, 15, -15],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`
          }}
          className="absolute top-20 left-20 w-4 h-4 bg-jamaican-green-200 rounded-full opacity-40"
        />
        <motion.div
          animate={{ 
            y: [15, -15, 15],
            rotate: [360, 180, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            transform: `translate(${-mousePosition.x * 20}px, ${-mousePosition.y * 20}px)`
          }}
          className="absolute top-40 right-32 w-3 h-3 bg-jamaican-yellow-200 rounded-full opacity-40"
        />
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            x: [0, 10, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-1/4 w-5 h-5 bg-jamaican-green-100 rounded-full opacity-30"
        />
        <motion.div
          animate={{ 
            y: [20, -20, 20],
            x: [0, -10, 0],
            scale: [1, 0.7, 1]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-1/3 w-2 h-2 bg-jamaican-yellow-300 rounded-full opacity-50"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Left Content - Story with 3D Effects */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <div className="mb-8">
              <motion.div 
                className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Heart className="w-5 h-5 text-jamaican-green-600" />
                </motion.div>
                <span className="text-jamaican-green-800 font-semibold text-sm">Our Story</span>
              </motion.div>
              <motion.h2 
                className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight"
                whileHover={{ 
                  scale: 1.02,
                  textShadow: "0 0 20px rgba(95, 114, 95, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <span className="text-gradient block mb-2">Mamma's Nest</span>
                <span className="text-gray-800 block text-2xl md:text-3xl">A Legacy of Love</span>
              </motion.h2>
            </div>

            <div className="space-y-8 text-gray-700 leading-relaxed">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg leading-relaxed"
              >
                Born from the heart of a young African American entrepreneur, Mamma's Nest began as a dream 
                to share the healing power of natural ingredients with the world. Our founder grew up watching 
                her grandmother brew teas and harvest honey, learning the ancient wisdom passed down through generations.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg leading-relaxed"
              >
                Today, we honor those traditions while embracing modern sustainability practices. Every product 
                in our collection tells a story - from the wildflower honey harvested from local apiaries to 
                the carefully selected organic tea leaves sourced from ethical farms around the world.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-lg leading-relaxed"
              >
                As a woman-owned business, we're committed to empowering our community and creating opportunities 
                for other aspiring entrepreneurs. Mamma's Nest isn't just about selling products; it's about 
                building a legacy of wellness, tradition, and love.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-10"
            >
              <motion.button 
                className="btn-primary text-lg px-8 py-4 shadow-xl relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Read Our Full Story
                </motion.span>
                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Enhanced Right Content - Values & Stats with 3D Effects */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            {/* Enhanced Owner Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-12"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
                {/* Enhanced Background Glow with Parallax */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-jamaican-green-50/50 to-jamaican-yellow-50/50"
                  style={{
                    transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
                  }}
                />
                
                <div className="relative z-10 text-center">
                  <motion.div 
                    className="relative inline-block mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="w-24 h-24 bg-gradient-to-br from-jamaican-green-300 to-jamaican-yellow-300 rounded-full flex items-center justify-center shadow-lg mx-auto"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 360,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                      }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <User className="w-12 h-12 text-white" />
                    </motion.div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute -top-2 -right-2 text-jamaican-green-400"
                    >
                      <Sparkles size={20} />
                    </motion.div>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-2xl font-serif font-bold text-gray-800 mb-2"
                    whileHover={{ 
                      scale: 1.02,
                      textShadow: "0 0 10px rgba(95, 114, 95, 0.3)"
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    Kimberly Barnes
                  </motion.h3>
                  <p className="text-jamaican-green-600 font-semibold mb-4">Founder & CEO</p>
                  <motion.p 
                    className="text-gray-600 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    "My grandmother taught me that the best ingredients come from the heart. 
                    Every product we create honors her legacy and the traditions she passed down."
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, rotateY: 15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.03,
                    rotateY: 5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                  }}
                  onHoverStart={() => setHoveredValue(index)}
                  onHoverEnd={() => setHoveredValue(null)}
                  className="card p-6 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform-gpu"
                  style={{
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Enhanced Background Glow with Parallax */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br from-${value.color}-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    style={{
                      transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
                    }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="mb-4 transform group-hover:scale-110 transition-transform duration-300"
                      animate={hoveredValue === index ? { 
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, 0]
                      } : {}}
                      transition={{ duration: 0.6 }}
                    >
                      {value.icon}
                    </motion.div>
                    <h3 className="font-bold text-gray-800 mb-3 text-lg">{value.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Stats with Dynamic Animations */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6, type: "spring", stiffness: 100 }}
              className="bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden"
            >
              {/* Enhanced Background Glow with Parallax */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-jamaican-green-50/20 to-jamaican-yellow-50/20"
                style={{
                  transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
                }}
              />
              
              <div className="relative z-10 grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center relative overflow-hidden group"
                  >
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      style={{
                        transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
                      }}
                    />
                    <div className="relative z-10">
                      <motion.div 
                        className={`text-4xl font-bold text-${stat.color}-600 mb-2`}
                        whileHover={{ scale: 1.1 }}
                        animate={activeStat === index ? { 
                          scale: [1, 1.2, 1],
                          color: ["#5f725f", "#edaa1f", "#5f725f"]
                        } : {}}
                        transition={{ duration: 0.6 }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Mission Statement with 3D Effects */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="mt-24 text-center"
        >
          <div className="bg-white rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
            {/* Enhanced Background Elements with Parallax */}
            <div className="absolute inset-0 bg-gradient-to-br from-jamaican-green-50/30 to-jamaican-yellow-50/30"></div>
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
                className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-8 shadow-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Quote className="w-5 h-5 text-jamaican-green-600" />
                </motion.div>
                <span className="text-jamaican-green-800 font-semibold">Our Mission</span>
              </motion.div>
              <motion.h3 
                className="text-3xl md:text-4xl font-serif font-bold mb-8"
                whileHover={{ 
                  scale: 1.02,
                  textShadow: "0 0 20px rgba(95, 114, 95, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                Building a Legacy of Wellness
              </motion.h3>
              <motion.p 
                className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                "To provide the highest quality organic teas and honey while preserving the traditions 
                that have been passed down through generations. We believe in the power of natural healing 
                and are committed to sharing this wisdom with our community, one cup at a time."
              </motion.p>
              <motion.div 
                className="text-sm text-gray-500 font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                — Kimberly Barnes, Founder of Mamma's Nest
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 