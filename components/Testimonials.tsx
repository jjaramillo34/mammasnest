'use client'

import { motion } from 'motion/react'
import { Star, Quote, Heart, Award, Sparkles, Users, TrendingUp, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'

const Testimonials = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(null)
  const [activeRating, setActiveRating] = useState(0)

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

  // Auto-rotate through ratings for dynamic effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRating((prev) => (prev + 1) % 6)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Wellness Coach",
      image: "👩🏾",
      rating: 5,
      text: "Mamma's Nest has transformed my daily tea ritual. The Chamomile Calm blend is absolutely divine and helps me unwind after long days. The quality is unmatched and I love supporting a woman-owned business!",
      category: "Tea Lover",
      verified: true
    },
    {
      id: 2,
      name: "Marcus Williams",
      role: "Health Enthusiast",
      image: "👨🏾",
      rating: 5,
      text: "As someone who's passionate about natural health, I'm so impressed with their raw honey selection. The Manuka honey is pure gold - literally! The Jamaican heritage and traditional methods really shine through.",
      category: "Honey Expert",
      verified: true
    },
    {
      id: 3,
      name: "Dr. Lisa Chen",
      role: "Naturopathic Doctor",
      image: "👩🏼",
      rating: 5,
      text: "I recommend Mamma's Nest products to my patients regularly. The organic certification and quality control are exactly what I look for. Their commitment to tradition and wellness is truly inspiring.",
      category: "Health Professional",
      verified: true
    },
    {
      id: 4,
      name: "Aisha Thompson",
      role: "Yoga Instructor",
      image: "👩🏾",
      rating: 5,
      text: "The Lavender Dreams tea has become a staple in my evening routine. It's so comforting and helps me prepare for deep, restful sleep. Love supporting a fellow Black woman entrepreneur with such authentic products!",
      category: "Wellness Coach",
      verified: true
    },
    {
      id: 5,
      name: "David Rodriguez",
      role: "Chef",
      image: "👨🏽",
      rating: 5,
      text: "I use their wildflower honey in my restaurant's signature desserts. The flavor profile is incredible and my customers always ask about it. The Jamaican quality and tradition really make a difference.",
      category: "Chef",
      verified: true
    },
    {
      id: 6,
      name: "Michelle Davis",
      role: "Mom & Blogger",
      image: "👩🏾",
      rating: 5,
      text: "As a mom, I'm always looking for natural products for my family. Mamma's Nest delivers on every promise - organic, pure, and made with love. My kids love the honey on their morning toast!",
      category: "Family",
      verified: true
    }
  ]

  // Floating particles for enhanced background
  const particles = Array.from({ length: 12 }, (_, i) => ({
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
    <section className="section-padding bg-gradient-to-br from-jamaican-green-50 via-jamaican-yellow-50 to-jamaican-black-50 relative overflow-hidden">
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
        {/* Enhanced Section Header with 3D Effects */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mb-16"
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
              <Heart className="w-5 h-5 text-jamaican-green-600" />
            </motion.div>
            <span className="text-jamaican-green-800 font-semibold text-sm">Customer Love</span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
            whileHover={{ 
              scale: 1.02,
              textShadow: "0 0 20px rgba(95, 114, 95, 0.3)"
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            What Our <span className="text-gradient">Community Says</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Don't just take our word for it. Here's what our community of tea and honey lovers 
            have to say about their experience with Mamma's Nest products.
          </motion.p>
        </motion.div>

        {/* Enhanced Testimonials Grid with 3D Effects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
              }}
              onHoverStart={() => setHoveredTestimonial(testimonial.id)}
              onHoverEnd={() => setHoveredTestimonial(null)}
              className="card p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform-gpu bg-white relative overflow-hidden"
              style={{
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Enhanced Background glow with Parallax */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-jamaican-green-50/30 to-jamaican-yellow-50/30"
                style={{
                  transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
                }}
              />
              
              <div className="relative z-10">
                {/* Enhanced Rating with Animation */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.1, type: "spring", stiffness: 300 }}
                        whileHover={{ scale: 1.3, rotate: 180 }}
                      >
                        <Star
                          className={`w-5 h-5 ${
                            i < testimonial.rating 
                              ? 'text-jamaican-yellow-500 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      </motion.div>
                    ))}
                  </div>
                  {/* Verified Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="flex items-center space-x-1 bg-jamaican-green-100 px-2 py-1 rounded-full"
                  >
                    <Sparkles className="w-3 h-3 text-jamaican-green-600" />
                    <span className="text-xs text-jamaican-green-700 font-medium">Verified</span>
                  </motion.div>
                </div>

                {/* Enhanced Quote with Animation */}
                <motion.blockquote 
                  className="text-gray-700 mb-6 italic text-lg leading-relaxed relative"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <motion.div
                    className="absolute -top-2 -left-2 text-jamaican-green-200"
                    animate={hoveredTestimonial === testimonial.id ? { 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, 0]
                    } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    <Quote size={24} />
                  </motion.div>
                  "{testimonial.text}"
                </motion.blockquote>

                {/* Enhanced Author Section */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className="text-3xl bg-gradient-to-br from-jamaican-green-100 to-jamaican-yellow-100 rounded-full p-3"
                      animate={hoveredTestimonial === testimonial.id ? { 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0]
                      } : {}}
                      transition={{ duration: 0.6 }}
                    >
                      {testimonial.image}
                    </motion.div>
                    <div>
                      <div className="font-bold text-gray-800 text-lg">{testimonial.name}</div>
                      <div className="text-sm text-jamaican-green-600 font-medium">{testimonial.role}</div>
                    </div>
                  </div>
                  {/* Category Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                    className="text-xs bg-jamaican-yellow-100 text-jamaican-yellow-700 px-2 py-1 rounded-full font-medium"
                  >
                    {testimonial.category}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Overall Rating with Dynamic Animations */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mt-20"
        >
          <div className="bg-white rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
            {/* Enhanced Background elements with Parallax */}
            <div className="absolute inset-0 bg-gradient-to-br from-jamaican-green-50/30 via-jamaican-yellow-50/30 to-jamaican-black-50/30"></div>
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
                  <Award className="w-5 h-5 text-jamaican-green-600" />
                </motion.div>
                <span className="text-jamaican-green-800 font-semibold">Excellence Awarded</span>
              </motion.div>
              
              {/* Dynamic Rating Stars */}
              <div className="flex items-center justify-center space-x-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1, type: "spring", stiffness: 300 }}
                    whileHover={{ scale: 1.3, rotate: 360 }}
                                         animate={activeRating === i ? { 
                       scale: [1, 1.2, 1],
                       rotate: [0, 180, 360]
                     } : {}}
                  >
                    <Star
                      className="w-10 h-10 text-jamaican-yellow-500 fill-current"
                    />
                  </motion.div>
                ))}
              </div>
              
              <motion.h3 
                className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-800"
                whileHover={{ 
                  scale: 1.02,
                  textShadow: "0 0 20px rgba(95, 114, 95, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                4.9/5 Average Rating
              </motion.h3>
              <motion.p 
                className="text-gray-600 mb-8 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Based on 1,247+ customer reviews
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 bg-gradient-to-br from-jamaican-green-50 to-jamaican-green-100 rounded-2xl relative overflow-hidden group"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-jamaican-green-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
                    }}
                  />
                  <div className="relative z-10">
                    <motion.div 
                      className="text-3xl font-bold text-jamaican-green-600 mb-2"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      98%
                    </motion.div>
                    <div className="text-sm text-gray-600 font-medium">Would Recommend</div>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 bg-gradient-to-br from-jamaican-yellow-50 to-jamaican-yellow-100 rounded-2xl relative overflow-hidden group"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-jamaican-yellow-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
                    }}
                  />
                  <div className="relative z-10">
                    <motion.div 
                      className="text-3xl font-bold text-jamaican-yellow-600 mb-2"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      1,247+
                    </motion.div>
                    <div className="text-sm text-gray-600 font-medium">Happy Customers</div>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 bg-gradient-to-br from-jamaican-black-50 to-jamaican-black-100 rounded-2xl relative overflow-hidden group"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-jamaican-black-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
                    }}
                  />
                  <div className="relative z-10">
                    <motion.div 
                      className="text-3xl font-bold text-jamaican-black-600 mb-2"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      4.9★
                    </motion.div>
                    <div className="text-sm text-gray-600 font-medium">Average Rating</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Call to Action with 3D Effects */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-jamaican-green-600 to-jamaican-yellow-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Enhanced Background elements with Parallax */}
            <div className="absolute inset-0 bg-black/10"></div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`
              }}
              className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              style={{
                transform: `translate(${-mousePosition.x * 20}px, ${-mousePosition.y * 20}px)`
              }}
              className="absolute -bottom-20 -left-20 w-48 h-48 bg-white/5 rounded-full"
            />
            
            <div className="relative z-10">
              <motion.h3 
                className="text-3xl font-serif font-bold mb-4"
                whileHover={{ 
                  scale: 1.02,
                  textShadow: "0 0 20px rgba(255, 255, 255, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                Join Our Community
              </motion.h3>
              <motion.p 
                className="text-xl mb-8 opacity-90 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Experience the authentic flavors of Jamaica and become part of our growing 
                community of tea and honey enthusiasts.
              </motion.p>
              <motion.button 
                className="bg-white text-jamaican-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Shop Now
                </motion.span>
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
      </div>
    </section>
  )
}

export default Testimonials 