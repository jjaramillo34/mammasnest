'use client'

import { motion } from 'motion/react'
import { Heart, Leaf, Star, Award, Sparkles, Quote, User } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-jamaican-green-600" />,
      title: "Crafted with Love",
      description: "Every product is made with passion and care, honoring family traditions."
    },
    {
      icon: <Leaf className="w-8 h-8 text-jamaican-green-500" />,
      title: "100% Organic",
      description: "We source only the finest organic ingredients, never compromising on quality."
    },
    {
      icon: <Star className="w-8 h-8 text-jamaican-yellow-500" />,
      title: "Premium Quality",
      description: "From farm to table, we ensure every product meets our high standards."
    },
    {
      icon: <Award className="w-8 h-8 text-jamaican-black-700" />,
      title: "Woman-Owned",
      description: "Proud to be a Black woman-owned business supporting our community."
    }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-primary relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-4 h-4 bg-jamaican-green-200 rounded-full opacity-40"
        />
        <motion.div
          animate={{ y: [15, -15, 15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-32 w-3 h-3 bg-jamaican-yellow-200 rounded-full opacity-40"
        />
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-1/4 w-5 h-5 bg-jamaican-green-100 rounded-full opacity-30"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-1/3 w-2 h-2 bg-jamaican-yellow-300 rounded-full opacity-50"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-sm">
                <Heart className="w-5 h-5 text-jamaican-green-600" />
                <span className="text-jamaican-green-800 font-semibold text-sm">Our Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                <span className="text-gradient block mb-2">Mamma's Nest</span>
                <span className="text-gray-800 block text-2xl md:text-3xl">A Legacy of Love</span>
              </h2>
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
              <button className="btn-primary text-lg px-8 py-4 shadow-xl">
                Read Our Full Story
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Values & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Owner Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-12"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-jamaican-green-50/50 to-jamaican-yellow-50/50"></div>
                
                <div className="relative z-10 text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-jamaican-green-300 to-jamaican-yellow-300 rounded-full flex items-center justify-center shadow-lg mx-auto">
                      <User className="w-12 h-12 text-white" />
                    </div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute -top-2 -right-2 text-jamaican-green-400"
                    >
                      <Sparkles size={20} />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2">Kimberly Barnes</h3>
                  <p className="text-jamaican-green-600 font-semibold mb-4">Founder & CEO</p>
                  <p className="text-gray-600 leading-relaxed">
                    "My grandmother taught me that the best ingredients come from the heart. 
                    Every product we create honors her legacy and the traditions she passed down."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="card p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="grid grid-cols-3 gap-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-jamaican-green-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600 font-medium">Happy Customers</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-jamaican-yellow-600 mb-2">12</div>
                  <div className="text-sm text-gray-600 font-medium">Product Varieties</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-jamaican-black-600 mb-2">3</div>
                  <div className="text-sm text-gray-600 font-medium">Years of Excellence</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="bg-white rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-jamaican-green-50/30 to-jamaican-yellow-50/30"></div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-40 h-40 bg-jamaican-green-200 rounded-full opacity-20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-20 -left-20 w-48 h-48 bg-jamaican-yellow-200 rounded-full opacity-20"
            />
            
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-8 shadow-sm">
                <Quote className="w-5 h-5 text-jamaican-green-600" />
                <span className="text-jamaican-green-800 font-semibold">Our Mission</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                Building a Legacy of Wellness
              </h3>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
                "To provide the highest quality organic teas and honey while preserving the traditions 
                that have been passed down through generations. We believe in the power of natural healing 
                and are committed to sharing this wisdom with our community, one cup at a time."
              </p>
              <div className="text-sm text-gray-500 font-medium">
                — Kimberly Barnes, Founder of Mamma's Nest
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 