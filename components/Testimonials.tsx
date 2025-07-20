'use client'

import { motion } from 'motion/react'
import { Star, Quote, Heart, Award, Sparkles } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Wellness Coach",
      image: "👩🏾",
      rating: 5,
      text: "Mamma's Nest has transformed my daily tea ritual. The Chamomile Calm blend is absolutely divine and helps me unwind after long days. The quality is unmatched and I love supporting a woman-owned business!"
    },
    {
      id: 2,
      name: "Marcus Williams",
      role: "Health Enthusiast",
      image: "👨🏾",
      rating: 5,
      text: "As someone who's passionate about natural health, I'm so impressed with their raw honey selection. The Manuka honey is pure gold - literally! The Jamaican heritage and traditional methods really shine through."
    },
    {
      id: 3,
      name: "Dr. Lisa Chen",
      role: "Naturopathic Doctor",
      image: "👩🏼",
      rating: 5,
      text: "I recommend Mamma's Nest products to my patients regularly. The organic certification and quality control are exactly what I look for. Their commitment to tradition and wellness is truly inspiring."
    },
    {
      id: 4,
      name: "Aisha Thompson",
      role: "Yoga Instructor",
      image: "👩🏾",
      rating: 5,
      text: "The Lavender Dreams tea has become a staple in my evening routine. It's so comforting and helps me prepare for deep, restful sleep. Love supporting a fellow Black woman entrepreneur with such authentic products!"
    },
    {
      id: 5,
      name: "David Rodriguez",
      role: "Chef",
      image: "👨🏽",
      rating: 5,
      text: "I use their wildflower honey in my restaurant's signature desserts. The flavor profile is incredible and my customers always ask about it. The Jamaican quality and tradition really make a difference."
    },
    {
      id: 6,
      name: "Michelle Davis",
      role: "Mom & Blogger",
      image: "👩🏾",
      rating: 5,
      text: "As a mom, I'm always looking for natural products for my family. Mamma's Nest delivers on every promise - organic, pure, and made with love. My kids love the honey on their morning toast!"
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-jamaican-green-50 via-jamaican-yellow-50 to-jamaican-black-50 relative overflow-hidden">
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-sm">
            <Heart className="w-5 h-5 text-jamaican-green-600" />
            <span className="text-jamaican-green-800 font-semibold text-sm">Customer Love</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            What Our <span className="text-gradient">Community Says</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our community of tea and honey lovers 
            have to say about their experience with Mamma's Nest products.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card p-8 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white relative overflow-hidden"
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-jamaican-green-50/30 to-jamaican-yellow-50/30"></div>
              
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating 
                          ? 'text-jamaican-yellow-500 fill-current' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="text-3xl bg-gradient-to-br from-jamaican-green-100 to-jamaican-yellow-100 rounded-full p-3">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-lg">{testimonial.name}</div>
                    <div className="text-sm text-jamaican-green-600 font-medium">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-white rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-jamaican-green-50/30 via-jamaican-yellow-50/30 to-jamaican-black-50/30"></div>
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
                <Award className="w-5 h-5 text-jamaican-green-600" />
                <span className="text-jamaican-green-800 font-semibold">Excellence Awarded</span>
              </div>
              
              <div className="flex items-center justify-center space-x-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-10 h-10 text-jamaican-yellow-500 fill-current"
                  />
                ))}
              </div>
              
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-800">
                4.9/5 Average Rating
              </h3>
              <p className="text-gray-600 mb-8 text-lg">
                Based on 1,247+ customer reviews
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-gradient-to-br from-jamaican-green-50 to-jamaican-green-100 rounded-2xl"
                >
                  <div className="text-3xl font-bold text-jamaican-green-600 mb-2">98%</div>
                  <div className="text-sm text-gray-600 font-medium">Would Recommend</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-gradient-to-br from-jamaican-yellow-50 to-jamaican-yellow-100 rounded-2xl"
                >
                  <div className="text-3xl font-bold text-jamaican-yellow-600 mb-2">1,247+</div>
                  <div className="text-sm text-gray-600 font-medium">Happy Customers</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-gradient-to-br from-jamaican-black-50 to-jamaican-black-100 rounded-2xl"
                >
                  <div className="text-3xl font-bold text-jamaican-black-600 mb-2">4.9★</div>
                  <div className="text-sm text-gray-600 font-medium">Average Rating</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-jamaican-green-600 to-jamaican-yellow-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-white/5 rounded-full"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-serif font-bold mb-4">
                Join Our Community
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Experience the authentic flavors of Jamaica and become part of our growing 
                community of tea and honey enthusiasts.
              </p>
              <button className="bg-white text-jamaican-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                Shop Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 