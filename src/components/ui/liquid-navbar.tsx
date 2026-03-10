'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { Flower2, ShoppingCart, MessageCircle, Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  id: string;
}

const navItems: NavItem[] = [
  { name: 'Beranda', id: 'beranda' },
  { name: 'Katalog', id: 'katalog' },
  { name: 'Tentang Kami', id: 'tentang' },
  { name: 'Testimoni', id: 'testimoni' },
  { name: 'Kontak', id: 'kontak' },
];

export const LiquidNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center items-start pointer-events-none">
      <motion.div
        layout
        initial={false}
        animate={{
          borderRadius: isScrolled ? 999 : 0,
          marginTop: isScrolled ? 12 : 0,
          paddingLeft: isScrolled ? 24 : 32,
          paddingRight: isScrolled ? 12 : 32,
        }}
        transition={{
          layout: { type: 'spring', stiffness: 200, damping: 25 },
          borderRadius: { duration: 0.2 },
          marginTop: { type: 'spring', stiffness: 200, damping: 25 },
          paddingLeft: { duration: 0.2 },
          paddingRight: { duration: 0.2 },
        }}
        className={`
          pointer-events-auto
          flex items-center justify-between
          bg-white/80 backdrop-blur-xl border-b border-slate-200/50
          ${isScrolled ? 'border shadow-[0_8px_32px_rgb(0,0,0,0.08)] w-[90%] md:w-max' : 'border-t-0 border-x-0 shadow-none w-full'}
          h-16 md:h-20
          mx-auto
        `}
      >
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer shrink-0 pr-4"
          onClick={() => scrollToSection('beranda')}
        >
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
            <Flower2 className="text-primary w-6 h-6" />
          </div>
          <motion.span 
            animate={{ 
              opacity: isScrolled ? 0 : 1, 
              width: isScrolled ? 0 : 'auto',
              marginRight: isScrolled ? 0 : 8
            }}
            className="text-xl font-bold tracking-tight text-slate-900 hidden sm:block overflow-hidden whitespace-nowrap"
          >
            Flora & Bloom
          </motion.span>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors relative group"
            >
              {item.name}
              <motion.div 
                className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform"
              />
            </button>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-2 pl-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              bg-primary text-white rounded-full font-bold text-sm
              transition-all duration-300
              ${isScrolled ? 'px-6 py-2' : 'px-8 py-3'}
              shadow-lg shadow-primary/20
              flex items-center gap-2
            `}
          >
            <MessageCircle className="w-4 h-4" />
            <span className={isScrolled ? 'hidden lg:inline' : 'inline'}>Pesan</span>
          </motion.button>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.div>


      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-200 shadow-2xl p-6 flex flex-col gap-4 pointer-events-auto"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left py-3 px-4 rounded-xl hover:bg-slate-50 text-slate-800 font-semibold"
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
