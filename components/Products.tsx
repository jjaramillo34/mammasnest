'use client'

import { motion } from 'motion/react'
import { ShoppingCart, Star, Leaf, Heart, Sparkles, Award, TrendingUp } from 'lucide-react'

const Products = () => {
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
      badge: "Best Seller"
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
      badge: "Premium"
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
      badge: "Popular"
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
      badge: "New"
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
      badge: "Best Seller"
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
      badge: "Premium"
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
      badge: "Popular"
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
      badge: "Limited"
    }
  ]

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="products" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-4 h-4 bg-jamaican-green-200 rounded-full opacity-40"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-20 w-3 h-3 bg-jamaican-yellow-200 rounded-full opacity-40"
        />
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-1/4 w-5 h-5 bg-jamaican-green-100 rounded-full opacity-30"
        />
        <motion.div
          animate={{ y: [15, -15, 15] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-1/3 w-2 h-2 bg-jamaican-yellow-300 rounded-full opacity-50"
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-sm">
            <Sparkles className="w-5 h-5 text-jamaican-green-600" />
            <span className="text-jamaican-green-800 font-semibold">Premium Collection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            <span className="text-gradient">Our Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated collection of organic teas and premium honey, 
            each product crafted with love and tradition.
          </p>
        </motion.div>

        {/* Tea Products */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-jamaican-green-50 px-8 py-4 rounded-full mb-6 shadow-sm">
              <Leaf className="w-6 h-6 text-jamaican-green-600" />
              <span className="text-jamaican-green-800 font-bold text-lg">Organic Tea Collection</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6">
              Premium Organic Teas
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              From soothing herbal blends to antioxidant-rich green teas, each cup tells a story of natural wellness.
            </p>
          </div>

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
                whileHover={{ y: -8, scale: 1.02 }}
                className="card p-8 group relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-jamaican-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {product.badge}
                  </span>
                </div>

                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-jamaican-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="text-center mb-6 relative z-10">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{product.image}</div>
                  <div className="inline-flex items-center space-x-2 bg-jamaican-green-100 px-4 py-2 rounded-full shadow-sm">
                    <span className="text-sm text-jamaican-green-800 font-semibold">{product.category}</span>
                  </div>
                </div>
                
                <h4 className="font-bold text-gray-800 mb-3 text-center text-lg">{product.name}</h4>
                <p className="text-sm text-gray-600 text-center mb-6 leading-relaxed">{product.description}</p>
                
                <div className="flex items-center justify-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) 
                          ? 'text-jamaican-yellow-500 fill-current' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-2 font-medium">
                    ({product.reviews})
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-jamaican-green-600">{product.price}</span>
                  <div className="flex space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 text-gray-400 hover:text-jamaican-green-600 transition-colors bg-gray-100 hover:bg-jamaican-green-50 rounded-full"
                    >
                      <Heart size={18} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary text-sm py-3 px-6 flex items-center space-x-2 shadow-lg"
                    >
                      <ShoppingCart size={16} />
                      <span>Add</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Honey Products */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-jamaican-yellow-50 px-8 py-4 rounded-full mb-6 shadow-sm">
              <Star className="w-6 h-6 text-jamaican-yellow-600" />
              <span className="text-jamaican-yellow-800 font-bold text-lg">Premium Honey Collection</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6">
              Pure Natural Honey
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              From raw wildflower honey to premium Manuka, experience the pure sweetness of nature.
            </p>
          </div>

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
                whileHover={{ y: -8, scale: 1.02 }}
                className="card p-8 group relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-jamaican-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {product.badge}
                  </span>
                </div>

                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-jamaican-yellow-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="text-center mb-6 relative z-10">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{product.image}</div>
                  <div className="inline-flex items-center space-x-2 bg-jamaican-yellow-100 px-4 py-2 rounded-full shadow-sm">
                    <span className="text-sm text-jamaican-yellow-800 font-semibold">{product.category}</span>
                  </div>
                </div>
                
                <h4 className="font-bold text-gray-800 mb-3 text-center text-lg">{product.name}</h4>
                <p className="text-sm text-gray-600 text-center mb-6 leading-relaxed">{product.description}</p>
                
                <div className="flex items-center justify-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) 
                          ? 'text-jamaican-yellow-500 fill-current' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-2 font-medium">
                    ({product.reviews})
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-jamaican-green-600">{product.price}</span>
                  <div className="flex space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 text-gray-400 hover:text-jamaican-yellow-600 transition-colors bg-gray-100 hover:bg-jamaican-yellow-50 rounded-full"
                    >
                      <Heart size={18} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-secondary text-sm py-3 px-6 flex items-center space-x-2 shadow-lg"
                    >
                      <ShoppingCart size={16} />
                      <span>Add</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-primary rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-jamaican-green-100/30 to-jamaican-yellow-100/30"></div>
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
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
                <Award className="w-5 h-5 text-jamaican-green-600" />
                <span className="text-jamaican-green-800 font-semibold">Premium Quality</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Ready to Experience Natural Goodness?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Join thousands of customers who trust Mamma's Nest for their organic tea and honey needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-10 py-4 shadow-xl"
                >
                  Shop All Products
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-lg px-10 py-4 shadow-xl"
                >
                  <TrendingUp size={20} className="mr-2" />
                  View Best Sellers
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