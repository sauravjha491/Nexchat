'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/maindashboard/topnavbar';
import Hero from '@/components/maindashboard/hero';
import Features from '@/components/maindashboard/features';
import Footer from '@/components/maindashboard/footer';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { LoginForm } from '@/components/auths/loginform';
import { SignupForm } from '@/components/auths/signupform';
import MobileBottomBar from '@/components/dashboard/mobillebuttombar';

/* ---------------- Auth Modal ---------------- */
const AuthModal: React.FC<{
  open: boolean;
  onClose: () => void;
  initialType: 'login' | 'register';
  isMobile: boolean;
}> = ({ open, onClose, initialType, isMobile }) => {
  const [modalMode, setModalMode] = useState<'login' | 'register'>(initialType);

  useEffect(() => {
    if (open) setModalMode(initialType);
  }, [open, initialType]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center p-4 z-50"
            initial={{ scale: isMobile ? 1 : 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: isMobile ? 1 : 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div
              className={`relative z-50 w-full ${
                isMobile ? ' rounded-none' : 'max-w-md max-h-screen rounded-xl'
              } overflow-auto bg-[#0f172a] p-6`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <div className="relative w-32 h-20">
                  <Image src="/logo.png" alt="Logo" fill style={{ objectFit: 'contain' }} priority />
                </div>
                <button
                  onClick={onClose}
                  className="text-slate-400 hover:text-white text-2xl leading-none"
                >
                  &times;
                </button>
              </div>

              {/* Forms */}
              {modalMode === 'login' ? (
                <LoginForm onSuccess={onClose} onSwitch={() => setModalMode('register')} />
              ) : (
                <SignupForm onSuccess={onClose} onSwitch={() => setModalMode('login')} />
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

/* ---------------- Home Page ---------------- */
export default function HomePage() {
 const [isMobile, setIsMobile] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'register'>('login');

  // Responsive check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  

  // HeroSection event listener
  useEffect(() => {
    const handleHeroAuth = (event: any) => {
      setAuthType(event.detail);
      setAuthOpen(true);
    };
    window.addEventListener('openAuthModal', handleHeroAuth);
    return () => window.removeEventListener('openAuthModal', handleHeroAuth);
  }, []);

  // Navbar auth click handler
  const handleAuthClick = (type: 'login' | 'register') => {
    setAuthType(type);
    setAuthOpen(true);
  };
  return (
  <div className="flex min-h-screen bg-[#141f27] text-white overflow-x-hidden">
      {/* Desktop Sidebar */}
      {!isMobile && (
        <motion.div
          
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed top-0 left-0 h-screen bg-[#0f1420] shadow-lg overflow-hidden z-50 flex flex-col"
        >
          
        </motion.div>
      )}

      {/* Top Navbar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-40"
        animate={{
       
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <Navbar  />
      </motion.div>

      {/* Main Content */}
      <motion.main
        className="flex-1 flex flex-col overflow-auto pt-[112px] pb-16 px-3 md:px-8"
        animate={{
         
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <Hero />
        <section>
          <Features />
        </section>
       
        <Footer />
      </motion.main>

      {/* Mobile Bottom Bar */}
      {isMobile && (
        <div className="fixed bottom-0 w-full z-50 h-16">
          <MobileBottomBar onBrowseClick={() => {}} />
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        initialType={authType}
        isMobile={isMobile}
      />
    </div>
  );
}
