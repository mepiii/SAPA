import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronDown, Search } from 'lucide-react';
import MobileMenu, { MobileMenuButton } from './MobileMenu';
import { useSheet } from '../../context/SheetContext';

const navItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Kami', href: '/tentang-kami' },
  { label: 'Lapor', href: '/lapor' },
];

const bemAppsItems = [
  { label: 'BEM OFFICIAL', href: '#' },
  { label: 'ILKOM NEWS', href: '#' },
];

export default function FloatingPillNav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { openTrackingModal } = useSheet();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <motion.nav
        className="fixed top-4 left-1/2 z-50"
        initial={{ opacity: 0, y: -20, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="bg-white/70 backdrop-blur-md border border-white/40 shadow-sm rounded-full px-2 py-2 flex items-center justify-center gap-1 transition-all duration-300">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 px-3 py-1">
            <img
              src="/BEM.png"
              alt="BEM Logo"
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center justify-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 rounded-full text-sm font-display transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-sapa-accent text-white shadow-md'
                    : 'text-sapa-primary hover:bg-sapa-highlight hover:opacity-80 active:scale-95'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* BEM APPS Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 150)}
                className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-display transition-physical ${
                  isDropdownOpen ? 'bg-sapa-highlight text-sapa-primary' : 'text-sapa-primary hover:bg-sapa-highlight'
                }`}
              >
                BEM APPS
                <ChevronDown
                  width={16} height={16}
                  className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-40 bg-white/70 backdrop-blur-xl rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 overflow-hidden"
                >
                  {bemAppsItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-3 text-sm font-body text-sapa-primary hover:bg-sapa-highlight transition-physical"
                    >
                      {item.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Cek Status Button */}
            <button
              onClick={openTrackingModal}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-display text-sapa-primary hover:bg-sapa-highlight transition-all duration-200 active:scale-95 hover:opacity-80 ml-1"
            >
              <Search width={16} height={16} />
              Cek Status
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-1">
            <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)} />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}