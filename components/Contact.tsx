'use client'

import { motion } from 'motion/react'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Heart, Sparkles, User, Map, Globe, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'

const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredContact, setHoveredContact] = useState<number | null>(null)
  const [activeSocial, setActiveSocial] = useState(0)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
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

  // Auto-rotate through social media for dynamic effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSocial((prev) => (prev + 1) % 4)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-jamaican-green-600" />,
      title: "Email",
      details: ["hello@mammasnest.com", "orders@mammasnest.com"],
      color: "jamaican-green",
      bgColor: "jamaican-green"
    },
    {
      icon: <Phone className="w-6 h-6 text-jamaican-yellow-600" />,
      title: "Phone",
      details: ["(555) 123-4567", "Mon-Fri, 9AM-6PM EST"],
      color: "jamaican-yellow",
      bgColor: "jamaican-yellow"
    },
    {
      icon: <MapPin className="w-6 h-6 text-jamaican-green-600" />,
      title: "Address",
      details: ["123 Wellness Way", "Atlanta, GA 30301", "United States"],
      color: "jamaican-green",
      bgColor: "jamaican-green"
    },
    {
      icon: <Clock className="w-6 h-6 text-jamaican-black-600" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
      color: "jamaican-black",
      bgColor: "jamaican-black"
    }
  ]

  const socialMedia = [
    { name: "Facebook", icon: "f", color: "jamaican-green" },
    { name: "LinkedIn", icon: "in", color: "jamaican-yellow" },
    { name: "Instagram", icon: "ig", color: "jamaican-green" },
    { name: "Twitter", icon: "t", color: "jamaican-black" }
  ]

  const quickLinks = [
    "View Our Jamaican-Inspired Products",
    "Shipping Information",
    "Return Policy",
    "Wholesale Inquiries",
    "Our Jamaican Heritage"
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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-jamaican-green-50 via-jamaican-yellow-50 to-jamaican-black-50 relative overflow-hidden">
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
              <MessageCircle className="w-5 h-5 text-jamaican-green-600" />
            </motion.div>
            <span className="text-jamaican-green-800 font-semibold text-sm">Let's Connect</span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
            whileHover={{ 
              scale: 1.02,
              textShadow: "0 0 20px rgba(95, 114, 95, 0.3)"
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Get in <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Have questions about our Jamaican-inspired organic teas and honey? Want to place a custom order? 
            We'd love to hear from you and share the warmth of our community!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Form with 3D Effects */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              {/* Enhanced Background glow with Parallax */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-jamaican-green-50/30 to-jamaican-yellow-50/30"
                style={{
                  transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
                }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="flex items-center space-x-3 mb-8"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-jamaican-green-100 to-jamaican-green-200 rounded-full flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Send className="w-6 h-6 text-jamaican-green-600" />
                  </motion.div>
                  <h3 className="text-2xl font-serif font-bold text-gray-800">Send us a Message</h3>
                </motion.div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name
                      </label>
                      <motion.input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-jamaican-green-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
                        placeholder="Your first name"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name
                      </label>
                      <motion.input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-jamaican-green-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
                        placeholder="Your last name"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <motion.input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-jamaican-green-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
                      placeholder="your.email@example.com"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <motion.select 
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-jamaican-green-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <option>General Inquiry</option>
                      <option>Product Questions</option>
                      <option>Custom Order</option>
                      <option>Wholesale Inquiry</option>
                      <option>Partnership</option>
                      <option>Jamaican Heritage Questions</option>
                    </motion.select>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <motion.textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-jamaican-green-500 focus:border-transparent transition-all duration-200 resize-none bg-white/80 backdrop-blur-sm"
                      placeholder="Tell us how we can help you experience the authentic flavors of Jamaica..."
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-jamaican-green-600 to-jamaican-green-700 text-white rounded-xl font-bold text-lg hover:from-jamaican-green-700 hover:to-jamaican-green-800 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                  >
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: -3 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Send size={20} />
                    </motion.span>
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: -3 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      Send Message
                    </motion.span>
                    {/* Button shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Contact Information with 3D Effects */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="space-y-8"
          >
            {/* Enhanced Business Info */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              {/* Enhanced Background glow with Parallax */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-jamaican-yellow-50/30 to-jamaican-green-50/30"
                style={{
                  transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
                }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="flex items-center space-x-3 mb-8"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-jamaican-yellow-100 to-jamaican-yellow-200 rounded-full flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Heart className="w-6 h-6 text-jamaican-yellow-600" />
                  </motion.div>
                  <h3 className="text-2xl font-serif font-bold text-gray-800">Contact Information</h3>
                </motion.div>
                
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
                      whileHover={{ 
                        x: 8, 
                        scale: 1.02,
                        rotateY: 5,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                      }}
                      onHoverStart={() => setHoveredContact(index)}
                      onHoverEnd={() => setHoveredContact(null)}
                      className={`flex items-start space-x-4 p-4 rounded-2xl hover:bg-${contact.bgColor}-50/50 transition-all duration-500 transform-gpu`}
                      style={{
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      <motion.div 
                        className={`w-12 h-12 bg-gradient-to-br from-${contact.bgColor}-100 to-${contact.bgColor}-200 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}
                        animate={hoveredContact === index ? { 
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, 0]
                        } : {}}
                        transition={{ duration: 0.6 }}
                      >
                        {contact.icon}
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">{contact.title}</h4>
                        {contact.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 font-medium">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Quick Links */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              {/* Enhanced Background glow with Parallax */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-jamaican-black-50/30 to-jamaican-green-50/30"
                style={{
                  transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
                }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="flex items-center space-x-3 mb-8"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-jamaican-black-100 to-jamaican-black-200 rounded-full flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Sparkles className="w-6 h-6 text-jamaican-black-600" />
                  </motion.div>
                  <h3 className="text-2xl font-serif font-bold text-gray-800">Quick Links</h3>
                </motion.div>
                
                <div className="space-y-4">
                  {quickLinks.map((link, index) => (
                    <motion.a 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
                      whileHover={{ 
                        x: 8, 
                        scale: 1.02,
                        color: "#5f725f"
                      }}
                      href={index === 0 ? "#products" : "#"} 
                      className="block text-gray-700 hover:text-jamaican-green-600 transition-colors duration-200 font-medium p-3 rounded-xl hover:bg-jamaican-green-50/50"
                    >
                      → {link}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Social Media */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              {/* Enhanced Background glow with Parallax */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-jamaican-yellow-50/30 to-jamaican-black-50/30"
                style={{
                  transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
                }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="flex items-center space-x-3 mb-8"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-jamaican-yellow-100 to-jamaican-yellow-200 rounded-full flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Heart className="w-6 h-6 text-jamaican-yellow-600" />
                  </motion.div>
                  <h3 className="text-2xl font-serif font-bold text-gray-800">Join Our Community</h3>
                </motion.div>
                
                <motion.p 
                  className="text-gray-600 mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Follow us for daily inspiration, Jamaican culture, wellness tips, and behind-the-scenes 
                  looks at how we create our authentic products.
                </motion.p>
                
                <div className="flex space-x-4">
                  {socialMedia.map((social, index) => (
                    <motion.a
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.15, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                                             animate={activeSocial === index ? { 
                         scale: [1, 1.2, 1],
                         rotate: [0, 180, 360]
                       } : {}}
                      href="#"
                      className={`w-14 h-14 bg-gradient-to-br from-${social.color}-100 to-${social.color}-200 rounded-full flex items-center justify-center text-${social.color}-600 hover:from-${social.color}-200 hover:to-${social.color}-300 transition-all duration-200 shadow-lg hover:shadow-xl`}
                    >
                      <span className="text-lg font-bold">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Call to Action with 3D Effects */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mt-20"
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
                Ready to Experience Jamaica?
              </motion.h3>
              <motion.p 
                className="text-xl mb-8 opacity-90 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Connect with us today and discover the authentic flavors and traditions 
                that make Mamma's Nest so special. We're here to help you find your perfect blend.
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
                  Start Your Journey
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

export default Contact 