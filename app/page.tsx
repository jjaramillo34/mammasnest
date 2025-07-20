'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import About from '@/components/About'
import CustomAnimation from '@/components/CustomAnimation'
import LottieAnimation from '@/components/LottieAnimation'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <About />
      <CustomAnimation />
      <LottieAnimation />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
} 