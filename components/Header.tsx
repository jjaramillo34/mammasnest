'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Menu, X, ShoppingCart, Heart, Flower } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Blog', href: '#blog' },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <motion.header initial={{ y: -100 }} animate={{ y: 0 }}>
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <a href="#home" className="flex items-center space-x-3 focus:outline-none">
                <div className="w-10 h-10 bg-gradient-to-br from-jamaican-green-500 to-jamaican-yellow-500 rounded-full flex items-center justify-center shadow-md border border-jamaican-green-300">
                  <Flower className="w-6 h-6 text-white" />
                </div>
                <span className="font-serif font-bold text-xl text-gray-800">Mamma's Nest</span>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-jamaican-green-600 font-medium transition-colors duration-200 inline-block"
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <button className="p-2 text-gray-600 hover:text-jamaican-green-600 transition-colors duration-200">
                  <Heart size={20} />
                </button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <button className="p-2 text-gray-600 hover:text-jamaican-green-600 transition-colors duration-200">
                  <ShoppingCart size={20} />
                </button>
              </motion.div>
              <button className="btn-primary">
                Shop Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <motion.div whileTap={{ scale: 0.95 }}>
              <button
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </motion.div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="md:hidden border-t border-gray-100 py-4 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-gray-700 hover:text-jamaican-green-600 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex items-center space-x-4 pt-4">
                  <button className="p-2 text-gray-600 hover:text-jamaican-green-600">
                    <Heart size={20} />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-jamaican-green-600">
                    <ShoppingCart size={20} />
                  </button>
                  <button className="btn-primary">
                    Shop Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.header>
    </div>
  )
}

export default Header 