'use client'

import { motion } from 'motion/react'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Heart, Sparkles } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-jamaican-green-50 via-jamaican-yellow-50 to-jamaican-black-50 relative overflow-hidden">
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
            <MessageCircle className="w-5 h-5 text-jamaican-green-600" />
            <span className="text-jamaican-green-800 font-semibold text-sm">Let's Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about our Jamaican-inspired organic teas and honey? Want to place a custom order? 
            We'd love to hear from you and share the warmth of our community!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-jamaican-green-50/30 to-jamaican-yellow-50/30"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-jamaican-green-100 to-jamaican-green-200 rounded-full flex items-center justify-center">
                    <Send className="w-6 h-6 text-jamaican-green-600" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-800">Send us a Message</h3>
                </div>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-jamaican-green-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-jamaican-green-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-jamaican-green-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-jamaican-green-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm">
                      <option>General Inquiry</option>
                      <option>Product Questions</option>
                      <option>Custom Order</option>
                      <option>Wholesale Inquiry</option>
                      <option>Partnership</option>
                      <option>Jamaican Heritage Questions</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-jamaican-green-500 focus:border-transparent transition-all duration-200 resize-none bg-white/80 backdrop-blur-sm"
                      placeholder="Tell us how we can help you experience the authentic flavors of Jamaica..."
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-jamaican-green-600 to-jamaican-green-700 text-white rounded-xl font-bold text-lg hover:from-jamaican-green-700 hover:to-jamaican-green-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Business Info */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-jamaican-yellow-50/30 to-jamaican-green-50/30"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-jamaican-yellow-100 to-jamaican-yellow-200 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-jamaican-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-800">Contact Information</h3>
                </div>
                
                <div className="space-y-6">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-jamaican-green-50/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-jamaican-green-100 to-jamaican-green-200 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Mail className="w-6 h-6 text-jamaican-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                      <p className="text-gray-600 font-medium">hello@mammasnest.com</p>
                      <p className="text-gray-600 font-medium">orders@mammasnest.com</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-jamaican-yellow-50/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-jamaican-yellow-100 to-jamaican-yellow-200 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Phone className="w-6 h-6 text-jamaican-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Phone</h4>
                      <p className="text-gray-600 font-medium">(555) 123-4567</p>
                      <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-jamaican-green-50/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-jamaican-green-100 to-jamaican-green-200 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <MapPin className="w-6 h-6 text-jamaican-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Address</h4>
                      <p className="text-gray-600 font-medium">
                        123 Wellness Way<br />
                        Atlanta, GA 30301<br />
                        United States
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-jamaican-black-50/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-jamaican-black-100 to-jamaican-black-200 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Clock className="w-6 h-6 text-jamaican-black-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Business Hours</h4>
                      <p className="text-gray-600 font-medium">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600 font-medium">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-gray-600 font-medium">Sunday: Closed</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-jamaican-black-50/30 to-jamaican-green-50/30"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-jamaican-black-100 to-jamaican-black-200 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-jamaican-black-600" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-800">Quick Links</h3>
                </div>
                
                <div className="space-y-4">
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href="#products" 
                    className="block text-gray-700 hover:text-jamaican-green-600 transition-colors duration-200 font-medium p-3 rounded-xl hover:bg-jamaican-green-50/50"
                  >
                    → View Our Jamaican-Inspired Products
                  </motion.a>
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href="#" 
                    className="block text-gray-700 hover:text-jamaican-green-600 transition-colors duration-200 font-medium p-3 rounded-xl hover:bg-jamaican-green-50/50"
                  >
                    → Shipping Information
                  </motion.a>
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href="#" 
                    className="block text-gray-700 hover:text-jamaican-green-600 transition-colors duration-200 font-medium p-3 rounded-xl hover:bg-jamaican-green-50/50"
                  >
                    → Return Policy
                  </motion.a>
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href="#" 
                    className="block text-gray-700 hover:text-jamaican-green-600 transition-colors duration-200 font-medium p-3 rounded-xl hover:bg-jamaican-green-50/50"
                  >
                    → Wholesale Inquiries
                  </motion.a>
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href="#" 
                    className="block text-gray-700 hover:text-jamaican-green-600 transition-colors duration-200 font-medium p-3 rounded-xl hover:bg-jamaican-green-50/50"
                  >
                    → Our Jamaican Heritage
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-jamaican-yellow-50/30 to-jamaican-black-50/30"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-jamaican-yellow-100 to-jamaican-yellow-200 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-jamaican-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-800">Join Our Community</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Follow us for daily inspiration, Jamaican culture, wellness tips, and behind-the-scenes 
                  looks at how we create our authentic products.
                </p>
                
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="w-14 h-14 bg-gradient-to-br from-jamaican-green-100 to-jamaican-green-200 rounded-full flex items-center justify-center text-jamaican-green-600 hover:from-jamaican-green-200 hover:to-jamaican-green-300 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <span className="text-lg font-bold">f</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="w-14 h-14 bg-gradient-to-br from-jamaican-yellow-100 to-jamaican-yellow-200 rounded-full flex items-center justify-center text-jamaican-yellow-600 hover:from-jamaican-yellow-200 hover:to-jamaican-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <span className="text-lg font-bold">in</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="w-14 h-14 bg-gradient-to-br from-jamaican-green-100 to-jamaican-green-200 rounded-full flex items-center justify-center text-jamaican-green-600 hover:from-jamaican-green-200 hover:to-jamaican-green-300 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <span className="text-lg font-bold">ig</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="w-14 h-14 bg-gradient-to-br from-jamaican-black-100 to-jamaican-black-200 rounded-full flex items-center justify-center text-jamaican-black-600 hover:from-jamaican-black-200 hover:to-jamaican-black-300 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <span className="text-lg font-bold">t</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-jamaican-green-600 to-jamaican-yellow-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-white/5 rounded-full"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-serif font-bold mb-4">
                Ready to Experience Jamaica?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Connect with us today and discover the authentic flavors and traditions 
                that make Mamma's Nest so special. We're here to help you find your perfect blend.
              </p>
              <button className="bg-white text-jamaican-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                Start Your Journey
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 