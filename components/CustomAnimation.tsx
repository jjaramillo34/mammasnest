'use client'

import { motion, useAnimation } from 'motion/react'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const CustomAnimation = () => {
  const controls = useAnimation()
  const hummingbirdControls = useAnimation()
  const nestControls = useAnimation()
  const textControls = useAnimation()
  const [showText, setShowText] = useState(false)
  const [animationCount, setAnimationCount] = useState(0)

  useEffect(() => {
    const startAnimation = async () => {
      // Reset states
      setShowText(false)
      
      // Phase 1: Bee flies in from left with more dynamic path
      await controls.start({
        x: [0, 150, 300, 450, 600, 750, 800],
        y: [100, 30, 180, 20, 160, 40, 200],
        rotate: [0, 25, -15, 30, -20, 15, 0],
        scale: [0.3, 0.6, 0.9, 1.1, 0.8, 1.2, 1],
        transition: { 
          duration: 4, 
          ease: "easeInOut",
          times: [0, 0.15, 0.3, 0.45, 0.6, 0.8, 1]
        }
      })
      
      // Phase 1.5: Hummingbird flies in from right with graceful path
      await hummingbirdControls.start({
        x: [1200, 1000, 900, 850, 820],
        y: [50, 120, 80, 140, 180],
        rotate: [0, -15, 10, -8, 5],
        scale: [0.2, 0.4, 0.6, 0.8, 0.9],
        transition: { 
          duration: 3, 
          ease: "easeInOut",
          delay: 1
        }
      })
      
      // Phase 2: Both creatures hover around nest with more erratic movement
      await Promise.all([
        controls.start({
          x: [800, 750, 850, 780, 820, 760, 840, 800],
          y: [200, 170, 230, 180, 220, 160, 240, 200],
          rotate: [0, 12, -8, 18, -12, 15, -10, 0],
          scale: [1, 1.15, 0.85, 1.1, 0.9, 1.2, 0.8, 1],
          transition: { 
            duration: 3, 
            ease: "easeInOut",
            repeat: 2,
            repeatType: "reverse"
          }
        }),
        hummingbirdControls.start({
          x: [820, 780, 860, 790, 830, 770, 850, 820],
          y: [180, 150, 210, 160, 200, 140, 220, 180],
          rotate: [5, -10, 8, -12, 10, -8, 12, 5],
          scale: [0.9, 1.1, 0.8, 1.05, 0.95, 1.15, 0.85, 0.9],
          transition: { 
            duration: 3, 
            ease: "easeInOut",
            repeat: 2,
            repeatType: "reverse"
          }
        })
      ])
      
      // Phase 3: Nest spins fast when creatures get close
      await nestControls.start({
        rotate: [0, 360, 720, 1080, 1440],
        scale: [1, 1.1, 1.2, 1.1, 1],
        transition: { 
          duration: 2, 
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1]
        }
      })
      
      // Phase 4: Both creatures land in nest with impact effect
      await Promise.all([
        controls.start({
          x: 800,
          y: 200,
          rotate: 0,
          scale: [1, 1.3, 0.8, 1],
          transition: { 
            duration: 1.5, 
            ease: "easeOut",
            times: [0, 0.3, 0.7, 1]
          }
        }),
        hummingbirdControls.start({
          x: 820,
          y: 180,
          rotate: 0,
          scale: [0.9, 1.2, 0.7, 0.9],
          transition: { 
            duration: 1.5, 
            ease: "easeOut",
            times: [0, 0.3, 0.7, 1]
          }
        })
      ])
      
      // Nest splash effect when creatures land
      await nestControls.start({
        scale: [1, 1.2, 0.9, 1.1, 1],
        rotate: [0, -5, 5, -2, 0],
        transition: { 
          duration: 1.2, 
          ease: "easeOut",
          times: [0, 0.2, 0.5, 0.8, 1]
        }
      })
      
      // Show text with bounce effect
      setTimeout(() => setShowText(true), 300)
      
      // Text splash effect
      setTimeout(async () => {
        await textControls.start({
          scale: [0.8, 1.3, 0.9, 1.1, 1],
          rotate: [0, -3, 3, -1, 0],
          y: [0, -20, 10, -5, 0],
          transition: { 
            duration: 1.5, 
            ease: "backOut",
            times: [0, 0.2, 0.5, 0.8, 1]
          }
        })
      }, 500)
      
      // Hide text after delay
      setTimeout(() => setShowText(false), 4000)
      
      // Phase 5: Return to start with more dynamic path
      setTimeout(async () => {
        await Promise.all([
          controls.start({
            x: [800, 600, 400, 200, 0],
            y: [200, 120, 80, 40, 100],
            rotate: [0, -20, -15, -10, 0],
            scale: [1, 0.8, 0.6, 0.4, 0.3],
            transition: { 
              duration: 3, 
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1]
            }
          }),
          hummingbirdControls.start({
            x: [820, 1000, 1100, 1200],
            y: [180, 100, 60, 50],
            rotate: [0, 15, 10, 0],
            scale: [0.9, 0.6, 0.4, 0.2],
            transition: { 
              duration: 3, 
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 1]
            }
          })
        ])
        
        // Restart animation after pause
        setTimeout(() => {
          setAnimationCount(prev => prev + 1)
        }, 1000)
      }, 5000)
    }

    startAnimation()
  }, [controls, hummingbirdControls, nestControls, textControls, animationCount])

  // Honey drop bubble component with Jamaican colors
  const HoneyDrop = ({ delay = 0, size = 'medium', position = 'random' }: {
    delay?: number;
    size?: 'small' | 'medium' | 'large';
    position?: 'left' | 'center' | 'right' | 'random';
  }) => {
    const sizes = {
      small: 'w-5 h-5',
      medium: 'w-7 h-7', 
      large: 'w-10 h-10'
    }
    
    const positions = {
      left: 'left-1/4',
      center: 'left-1/2',
      right: 'left-3/4',
      random: `left-${Math.floor(Math.random() * 4) * 25 + 12}%`
    }

    const colors = [
      'from-jamaican-yellow-300 to-jamaican-yellow-500',
      'from-jamaican-green-300 to-jamaican-green-500',
      'from-jamaican-black-400 to-jamaican-black-600',
      'from-yellow-400 to-orange-500'
    ]

    const randomColor = colors[Math.floor(Math.random() * colors.length)]

    return (
      <motion.div
        initial={{ 
          y: 600, 
          x: 0, 
          opacity: 0, 
          scale: 0 
        }}
        animate={{ 
          y: -100,
          x: [0, Math.random() * 40 - 20, Math.random() * 60 - 30],
          opacity: [0, 1, 0],
          scale: [0, 1, 0.8]
        }}
        transition={{
          duration: 8 + Math.random() * 4,
          delay: delay + Math.random() * 2,
          ease: "easeOut",
          repeat: Infinity,
          repeatDelay: Math.random() * 3
        }}
        className={`absolute ${positions[position]} ${sizes[size]} z-5`}
      >
        <div className={`w-full h-full bg-gradient-to-br ${randomColor} rounded-full opacity-70 shadow-lg`}>
          {/* Honey drop shine effect */}
          <div className="w-1/3 h-1/3 bg-white rounded-full opacity-60 absolute top-1/4 left-1/4"></div>
        </div>
      </motion.div>
    )
  }

  // Falling leaf component with Jamaican colors
  const FallingLeaf = ({ delay = 0, size = 'medium', position = 'random', rotation = 0 }: {
    delay?: number;
    size?: 'small' | 'medium' | 'large';
    position?: 'left' | 'center' | 'right' | 'random';
    rotation?: number;
  }) => {
    const sizes = {
      small: 'w-6 h-8',
      medium: 'w-8 h-10', 
      large: 'w-10 h-12'
    }
    
    const positions = {
      left: 'left-1/6',
      center: 'left-1/2',
      right: 'left-5/6',
      random: `left-${Math.floor(Math.random() * 8) * 12 + 6}%`
    }

    const leafColors = [
      '#22c55e', // jamaican-green-500
      '#16a34a', // jamaican-green-600
      '#ca8a04', // jamaican-yellow-600
      '#eab308', // jamaican-yellow-500
      '#15803d', // jamaican-green-700
      '#1e293b', // jamaican-black-800
      '#475569', // jamaican-black-600
    ]

    const randomColor = leafColors[Math.floor(Math.random() * leafColors.length)]
    const randomStartX = Math.random() * 100 - 50
    const randomEndX = Math.random() * 100 - 50
    const randomMidX1 = Math.random() * 80 - 40
    const randomMidX2 = Math.random() * 60 - 30

    return (
      <motion.div
        initial={{ 
          y: -100, 
          x: randomStartX, 
          opacity: 0, 
          rotate: rotation,
          scale: 0 
        }}
        animate={{ 
          y: 700,
          x: [randomStartX, randomMidX1, randomMidX2, randomEndX],
          opacity: [0, 1, 1, 1],
          rotate: [rotation, rotation + 180, rotation + 360, rotation + 540],
          scale: [0, 1, 1, 1]
        }}
        transition={{
          duration: 8 + Math.random() * 8,
          delay: delay + Math.random() * 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: Math.random() * 6
        }}
        className={`absolute ${positions[position]} ${sizes[size]} z-5`}
      >
        <svg 
          viewBox="0 0 100 120" 
          className="w-full h-full drop-shadow-md"
          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
        >
          {/* Main leaf shape */}
          <path
            d="M50 10 
               C60 10, 70 15, 75 25
               C80 35, 85 45, 85 60
               C85 75, 80 85, 75 95
               C70 105, 60 110, 50 115
               C40 110, 30 105, 25 95
               C20 85, 15 75, 15 60
               C15 45, 20 35, 25 25
               C30 15, 40 10, 50 10 Z"
            fill={randomColor}
            opacity="0.8"
          />
          
          {/* Leaf vein */}
          <path
            d="M50 10 L50 115"
            stroke="#166534"
            strokeWidth="1"
            opacity="0.6"
          />
          
          {/* Side veins */}
          <path
            d="M50 20 Q60 25, 65 30
               M50 35 Q55 40, 60 45
               M50 50 Q58 55, 65 60
               M50 65 Q55 70, 60 75
               M50 80 Q58 85, 65 90"
            stroke="#166534"
            strokeWidth="0.5"
            opacity="0.4"
            fill="none"
          />
          
          <path
            d="M50 20 Q40 25, 35 30
               M50 35 Q45 40, 40 45
               M50 50 Q42 55, 35 60
               M50 65 Q45 70, 40 75
               M50 80 Q42 85, 35 90"
            stroke="#166534"
            strokeWidth="0.5"
            opacity="0.4"
            fill="none"
          />
          
          {/* Leaf stem */}
          <path
            d="M50 115 L50 125"
            stroke="#166534"
            strokeWidth="2"
            opacity="0.8"
          />
          
          {/* Leaf tip highlight */}
          <ellipse
            cx="50"
            cy="25"
            rx="8"
            ry="4"
            fill="rgba(255,255,255,0.3)"
            opacity="0.6"
          />
        </svg>
      </motion.div>
    )
  }

  // Hummingbird component
  const Hummingbird = () => {
    return (
      <motion.div
        initial={{ x: 1200, y: 50, scale: 0.2 }}
        animate={hummingbirdControls}
        className="absolute z-20"
      >
        <svg 
          width="80" 
          height="60" 
          viewBox="0 0 80 60"
          className="drop-shadow-lg"
        >
          {/* Hummingbird body */}
          <ellipse
            cx="40"
            cy="30"
            rx="12"
            ry="8"
            fill="#1e293b"
            opacity="0.9"
          />
          
          {/* Hummingbird head */}
          <circle
            cx="50"
            cy="25"
            r="6"
            fill="#1e293b"
            opacity="0.9"
          />
          
          {/* Beak */}
          <path
            d="M56 25 L65 23 L65 27 Z"
            fill="#ca8a04"
            opacity="0.8"
          />
          
          {/* Wings */}
          <motion.path
            animate={{ 
              d: [
                "M30 20 Q20 15, 15 25 Q20 35, 30 30",
                "M30 20 Q15 10, 10 25 Q15 40, 30 30",
                "M30 20 Q20 15, 15 25 Q20 35, 30 30"
              ]
            }}
            transition={{
              duration: 0.1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            fill="#22c55e"
            opacity="0.8"
          />
          
          <motion.path
            animate={{ 
              d: [
                "M30 40 Q20 45, 15 35 Q20 25, 30 30",
                "M30 40 Q15 50, 10 35 Q15 20, 30 30",
                "M30 40 Q20 45, 15 35 Q20 25, 30 30"
              ]
            }}
            transition={{
              duration: 0.1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.05
            }}
            fill="#22c55e"
            opacity="0.8"
          />
          
          {/* Tail */}
          <path
            d="M25 30 L15 25 L15 35 Z"
            fill="#eab308"
            opacity="0.9"
          />
          
          {/* Eye */}
          <circle
            cx="52"
            cy="23"
            r="1.5"
            fill="#eab308"
          />
        </svg>
      </motion.div>
    )
  }

  return (
    <section className="section-padding bg-gradient-to-br from-jamaican-green-50 via-jamaican-yellow-50 to-jamaican-black-50 relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            <span className="text-gradient">Our Story</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Like a bee finding its perfect nest, we've created a home for the finest organic teas and honey. 
            Our journey began in the heart of Jamaica, where the vibrant colors of the flag - the lush green 
            of our mountains, the golden yellow of our sunshine, and the strength of our black heritage - 
            inspired everything we do. Just as the hummingbird dances with grace and the bee works with 
            purpose, we blend tradition with innovation to bring you nature's purest gifts.
          </motion.p>
        </div>

        <div className="relative flex justify-center items-center min-h-[600px]">
          {/* Honey Drop Bubbles with Jamaican colors */}
          {Array.from({ length: 20 }).map((_, i) => (
            <HoneyDrop 
              key={`honey-${i}`}
              delay={i * 0.5}
              size={i % 3 === 0 ? 'large' : i % 2 === 0 ? 'medium' : 'small'}
              position={i % 4 === 0 ? 'left' : i % 4 === 1 ? 'center' : i % 4 === 2 ? 'right' : 'random'}
            />
          ))}

          {/* Falling Leaves with Jamaican colors */}
          {Array.from({ length: 30 }).map((_, i) => (
            <FallingLeaf 
              key={`leaf-${i}`}
              delay={i * 0.3 + Math.random() * 2}
              size={i % 4 === 0 ? 'large' : i % 3 === 0 ? 'medium' : 'small'}
              position={i % 6 === 0 ? 'left' : i % 6 === 1 ? 'center' : i % 6 === 2 ? 'right' : 'random'}
              rotation={i * 15 + Math.random() * 360}
            />
          ))}

          {/* Background decorative elements with Jamaican colors */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center opacity-10"
          >
            <div className="w-96 h-96 border-2 border-jamaican-green-300 rounded-full"></div>
          </motion.div>
          
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center opacity-5"
          >
            <div className="w-80 h-80 border border-jamaican-yellow-300 rounded-full"></div>
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center opacity-3"
          >
            <div className="w-64 h-64 border border-jamaican-black-300 rounded-full"></div>
          </motion.div>

          {/* Middle section floating elements with Jamaican colors */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute left-1/4 top-1/4 z-5"
          >
            <div className="w-8 h-8 bg-jamaican-green-300 rounded-full opacity-60"></div>
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -8, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute right-1/3 top-1/3 z-5"
          >
            <div className="w-6 h-6 bg-jamaican-yellow-300 rounded-full opacity-50"></div>
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, -10, 0],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute left-1/3 bottom-1/3 z-5"
          >
            <div className="w-4 h-4 bg-jamaican-black-400 rounded-full opacity-70"></div>
          </motion.div>

          {/* Nest - Enhanced with splash effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            animate={nestControls}
            className="absolute right-0 bottom-0 z-10"
          >
            <Image 
              src="/nest.png" 
              alt="Nest" 
              width={200} 
              height={200}
              className="drop-shadow-2xl"
            />
          </motion.div>

          {/* Bee - Enhanced animation */}
          <motion.div
            initial={{ x: 0, y: 100, scale: 0.3 }}
            animate={controls}
            className="absolute z-20"
          >
            <Image 
              src="/bee.png" 
              alt="Bee" 
              width={120} 
              height={120}
              className="drop-shadow-lg"
            />
          </motion.div>

          {/* Hummingbird */}
          <Hummingbird />

          {/* Text - Enhanced with splash effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={showText ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="absolute right-0 bottom-0 z-30"
            style={{ transform: 'translate(50px, -50px)' }}
          >
            <motion.div
              animate={textControls}
            >
              <Image 
                src="/text.png" 
                alt="Mamma's Nest Text" 
                width={300} 
                height={100}
                className="drop-shadow-xl"
              />
            </motion.div>
          </motion.div>

          {/* Enhanced particle effects around nest when creatures land */}
          {showText && (
            <div className="absolute right-0 bottom-0 z-15">
              {Array.from({ length: 15 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0], 
                    scale: [0, 1.5, 0],
                    x: [0, Math.cos(i * 24 * Math.PI / 180) * (80 + Math.random() * 40)],
                    y: [0, Math.sin(i * 24 * Math.PI / 180) * (80 + Math.random() * 40)]
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.08,
                    ease: "easeOut"
                  }}
                  className={`absolute w-4 h-4 rounded-full ${
                    i % 3 === 0 ? 'bg-jamaican-green-400' : 
                    i % 3 === 1 ? 'bg-jamaican-yellow-400' : 
                    'bg-jamaican-black-400'
                  }`}
                  style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
                />
              ))}
            </div>
          )}

          {/* Additional splash particles for nest */}
          {showText && (
            <div className="absolute right-0 bottom-0 z-15">
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={`nest-${i}`}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0], 
                    scale: [0, 2, 0],
                    x: [0, (Math.random() - 0.5) * 100],
                    y: [0, (Math.random() - 0.5) * 100]
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.15,
                    ease: "easeOut"
                  }}
                  className={`absolute w-2 h-2 rounded-full ${
                    i % 2 === 0 ? 'bg-jamaican-yellow-300' : 'bg-jamaican-green-300'
                  }`}
                  style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Enhanced story content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-white rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Background with Jamaican colors */}
            <div className="absolute inset-0 bg-gradient-to-br from-jamaican-green-50/30 via-jamaican-yellow-50/30 to-jamaican-black-50/30"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-serif font-bold mb-8 text-gray-800">
                A Legacy Rooted in Jamaican Heritage
              </h3>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-jamaican-green-700">Our Beginning</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    In the heart of Jamaica, where the mountains meet the sea, our founder Kimberly Barnes 
                    discovered the ancient wisdom of natural healing. Growing up in a family that cherished 
                    traditional remedies, she learned that the best medicine comes from the earth itself.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The vibrant colors of the Jamaican flag became our inspiration - the green representing 
                    our lush landscapes and natural ingredients, the yellow symbolizing the golden honey and 
                    warm sunshine, and the black honoring our rich heritage and strength.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-jamaican-yellow-700">Our Promise</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Like the hummingbird that dances with grace and the bee that works with purpose, 
                    we blend tradition with innovation. Every product tells a story of our island's 
                    natural abundance and the wisdom passed down through generations.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    From our organic tea gardens to our wildflower honey, we honor the natural rhythms 
                    of the earth and the healing power of pure, unadulterated ingredients. This is 
                    more than just tea and honey - it's a celebration of life, tradition, and the 
                    beautiful spirit of Jamaica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              className="card p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-jamaican-green-100 to-jamaican-green-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">🐝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Natural Process</h3>
              <p className="text-gray-600 leading-relaxed">
                Just like bees work naturally, we preserve the natural goodness in every product, 
                honoring the traditional methods passed down through generations.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              className="card p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-jamaican-yellow-100 to-jamaican-yellow-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Home Crafted</h3>
              <p className="text-gray-600 leading-relaxed">
                Every product is crafted with love, just like a bee building its perfect nest. 
                We create each blend with care, ensuring the highest quality and authenticity.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              className="card p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-jamaican-black-100 to-jamaican-black-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Pure Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Only the finest organic ingredients, sourced with care and tradition. 
                We believe in the power of natural healing and sustainable practices.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CustomAnimation 