'use client'

import { useEffect, useRef, useState } from 'react'
import Lottie from 'lottie-react'
import beeAnimation from '../public/bee_animation.json'
import { Play, Pause, RotateCcw, Sparkles, Award, Heart } from 'lucide-react'

const LottieAnimation = () => {
  const lottieRef = useRef<any>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    // Start playing when component mounts
    setIsPlaying(true)
  }, [])

  const handleAnimationComplete = () => {
    // Restart animation when it completes
    if (lottieRef.current) {
      lottieRef.current.play()
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-jamaican-green-50 via-jamaican-yellow-50 to-jamaican-black-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-4 h-4 bg-jamaican-green-200 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-jamaican-yellow-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-jamaican-green-100 rounded-full opacity-30 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-jamaican-yellow-300 rounded-full opacity-50 animate-pulse delay-3000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-sm">
            <Sparkles className="w-5 h-5 text-jamaican-green-600" />
            <span className="text-jamaican-green-800 font-semibold text-sm">Our Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            <span className="text-gradient">Mamma's Nest</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the journey of Mamma's Nest through our animated story. Watch as our bee 
            represents the natural process of creating the finest organic teas and honey, 
            honoring the traditions passed down through generations in Jamaica.
          </p>
        </div>

        <div className="flex justify-center items-center min-h-[500px] mb-12">
          <div className="relative">
            {/* Lottie Animation Container */}
            <div className="relative w-96 h-96 md:w-[500px] md:h-[500px] bg-white rounded-3xl shadow-2xl p-8 border border-jamaican-green-100">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-jamaican-green-50/50 to-jamaican-yellow-50/50 rounded-3xl"></div>
              
              {/* Lottie Animation */}
              <div className="relative z-10 w-full h-full">
                <Lottie
                  lottieRef={lottieRef}
                  animationData={beeAnimation}
                  loop={true}
                  autoplay={true}
                  onComplete={handleAnimationComplete}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>

              {/* Status indicator */}
              <div className="absolute top-4 right-4 z-20">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  isPlaying 
                    ? 'bg-jamaican-green-100 text-jamaican-green-800' 
                    : 'bg-jamaican-yellow-100 text-jamaican-yellow-800'
                }`}>
                  {isPlaying ? 'Playing' : 'Paused'}
                </div>
              </div>
            </div>

            {/* Overlay text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2">
                  Mamma's Nest
                </h3>
                <p className="text-jamaican-green-600 font-medium">Organic Tea & Honey</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Controls */}
        <div className="text-center mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold mb-6 text-gray-800">
              Experience Our Journey
            </h3>
            <div className="flex justify-center space-x-4 mb-6">
              <button
                onClick={() => {
                  if (lottieRef.current) {
                    lottieRef.current.play()
                    setIsPlaying(true)
                  }
                }}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-jamaican-green-600 to-jamaican-green-700 text-white rounded-xl hover:from-jamaican-green-700 hover:to-jamaican-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Play className="w-5 h-5" />
                <span className="font-semibold">Play</span>
              </button>
              <button
                onClick={() => {
                  if (lottieRef.current) {
                    lottieRef.current.pause()
                    setIsPlaying(false)
                  }
                }}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-jamaican-black-600 to-jamaican-black-700 text-white rounded-xl hover:from-jamaican-black-700 hover:to-jamaican-black-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Pause className="w-5 h-5" />
                <span className="font-semibold">Pause</span>
              </button>
              <button
                onClick={() => {
                  if (lottieRef.current) {
                    lottieRef.current.stop()
                    lottieRef.current.play()
                    setIsPlaying(true)
                  }
                }}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-jamaican-yellow-500 to-jamaican-yellow-600 text-black rounded-xl hover:from-jamaican-yellow-600 hover:to-jamaican-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <RotateCcw className="w-5 h-5" />
                <span className="font-semibold">Restart</span>
              </button>
            </div>
            
            <div className="text-sm text-gray-500 font-medium">
              Story Status: <span className={`font-bold ${isPlaying ? 'text-jamaican-green-600' : 'text-jamaican-yellow-600'}`}>
                {isPlaying ? 'Currently Playing' : 'Currently Paused'}
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced info cards */}
        <div className="mt-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-jamaican-green-100 to-jamaican-green-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Award className="w-10 h-10 text-jamaican-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Jamaican Heritage</h3>
              <p className="text-gray-600 leading-relaxed">
                Our story begins in the heart of Jamaica, where the vibrant colors of our flag 
                inspire everything we do. Green for our lush landscapes, yellow for golden honey, 
                and black for our rich heritage and strength.
              </p>
            </div>
            <div className="card p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-jamaican-yellow-100 to-jamaican-yellow-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Heart className="w-10 h-10 text-jamaican-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Natural Process</h3>
              <p className="text-gray-600 leading-relaxed">
                Like the bee that works with purpose, we honor the natural process of creating 
                the finest organic teas and honey. Every product reflects the wisdom passed down 
                through generations of Jamaican healers.
              </p>
            </div>
            <div className="card p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-jamaican-black-100 to-jamaican-black-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-jamaican-black-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Woman-Owned Business</h3>
              <p className="text-gray-600 leading-relaxed">
                Founded by Kimberly Barnes, Mamma's Nest is proud to be a Black woman-owned business. 
                We're committed to empowering our community and sharing the healing power of 
                natural ingredients with the world.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-jamaican-green-600 to-jamaican-yellow-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-white/5 rounded-full"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-serif font-bold mb-4">
                Taste the Tradition
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Experience the authentic flavors of Jamaica with our premium organic teas and honey. 
                Every sip tells a story of tradition, love, and the natural healing wisdom of our ancestors.
              </p>
              <button className="bg-white text-jamaican-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                Shop Our Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LottieAnimation 