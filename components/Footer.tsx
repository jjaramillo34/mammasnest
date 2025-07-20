'use client'

import { motion } from 'motion/react'
import { Heart, Leaf, Star, Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Side - Logo & Brand */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              {/* Logo */}
              <div className="flex flex-col items-center lg:items-start mb-8">
                <div className="relative flex items-center justify-center mb-6">
                  <span className="absolute inline-flex h-[120px] w-[120px] rounded-full bg-gradient-to-br from-jamaican-green-200 to-jamaican-yellow-200 opacity-40 blur-xl"></span>
                  <Image
                    src="/logo_mammas.png"
                    alt="Mamma's Nest Logo"
                    width={120}
                    height={120}
                    className="relative z-10 rounded-full bg-white shadow-2xl border-4 border-jamaican-green-300 ring-4 ring-jamaican-yellow-200"
                    priority
                  />
                </div>
              </div>

              {/* Brand Description */}
              <p className="text-gray-300 mb-8 leading-relaxed">
                Premium organic teas and honey, crafted with love and tradition. 
                Supporting wellness one cup at a time. Owned by a passionate African American entrepreneur.
              </p>

              {/* Social Media */}
              <div className="flex justify-center space-x-4 mb-8">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-jamaican-green-600 transition-colors duration-200"
                  >
                    <span className="text-sm font-bold">f</span>
                  </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-jamaican-yellow-600 transition-colors duration-200"
                  >
                    <span className="text-sm font-bold">in</span>
                  </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-jamaican-green-600 transition-colors duration-200"
                  >
                    <span className="text-sm font-bold">ig</span>
                  </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-jamaican-black-600 transition-colors duration-200"
                  >
                    <span className="text-sm font-bold">t</span>
                  </a>
                </motion.div>
              </div>

              {/* Made with Love */}
              <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-jamaican-green-500 fill-current" />
                <span>by a Black woman entrepreneur</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Content Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <h3 className="text-lg font-semibold mb-6 text-center md:text-left">Quick Links</h3>
                <ul className="space-y-3 text-center md:text-left">
                  <li>
                    <a href="#home" className="text-gray-300 hover:text-jamaican-green-400 transition-colors duration-200">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#products" className="text-gray-300 hover:text-jamaican-green-400 transition-colors duration-200">
                      Products
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="text-gray-300 hover:text-jamaican-green-400 transition-colors duration-200">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-gray-300 hover:text-jamaican-green-400 transition-colors duration-200">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-jamaican-green-400 transition-colors duration-200">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-jamaican-green-400 transition-colors duration-200">
                      FAQ
                    </a>
                  </li>
                </ul>
              </motion.div>

              {/* Products */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h3 className="text-lg font-semibold mb-6 text-center md:text-left">Products</h3>
                <ul className="space-y-3 text-center md:text-left">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-jamaican-green-400 transition-colors duration-200 flex items-center justify-center md:justify-start space-x-2">
                      <Leaf className="w-4 h-4" />
                      <span>Organic Teas</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-jamaican-yellow-400 transition-colors duration-200 flex items-center justify-center md:justify-start space-x-2">
                      <Star className="w-4 h-4" />
                      <span>Raw Honey</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-jamaican-green-400 transition-colors duration-200 flex items-center justify-center md:justify-start space-x-2">
                      <Heart className="w-4 h-4" />
                      <span>Gift Sets</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-jamaican-yellow-400 transition-colors duration-200 flex items-center justify-center md:justify-start space-x-2">
                      <Star className="w-4 h-4" />
                      <span>Manuka Honey</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-jamaican-green-400 transition-colors duration-200 flex items-center justify-center md:justify-start space-x-2">
                      <Leaf className="w-4 h-4" />
                      <span>Herbal Blends</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-jamaican-yellow-400 transition-colors duration-200 flex items-center justify-center md:justify-start space-x-2">
                      <Star className="w-4 h-4" />
                      <span>Green Tea Collection</span>
                    </a>
                  </li>
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h3 className="text-lg font-semibold mb-6 text-center md:text-left">Contact Info</h3>
                <div className="space-y-4 text-center md:text-left">
                  <div className="flex items-start justify-center md:justify-start space-x-3">
                    <Mail className="w-5 h-5 text-jamaican-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300">hello@mammasnest.com</p>
                      <p className="text-gray-300">orders@mammasnest.com</p>
                    </div>
                  </div>
                  <div className="flex items-start justify-center md:justify-start space-x-3">
                    <Phone className="w-5 h-5 text-jamaican-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300">(555) 123-4567</p>
                      <p className="text-gray-400 text-sm">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>
                  <div className="flex items-start justify-center md:justify-start space-x-3">
                    <MapPin className="w-5 h-5 text-jamaican-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300">
                        123 Wellness Way<br />
                        Atlanta, GA 30301<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm text-center md:text-left">
                {/* change the current year programmatically */}
                © {new Date().getFullYear()} Mamma's Nest. All rights reserved. | 
                <a href="#" className="hover:text-jamaican-green-400 transition-colors duration-200 ml-1">
                  Privacy Policy
                </a> | 
                <a href="#" className="hover:text-jamaican-green-400 transition-colors duration-200 ml-1">
                  Terms of Service
                </a>
              </div>
              <div className="text-gray-400 text-sm">
                <span>Woman-Owned Business</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 