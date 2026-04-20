import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <motion.nav
        aria-label="Navigasi utama"
        className="fixed top-4 left-1/2 z-50"
        initial={{ opacity: 0, y: -20, x: '-50%' }}
        animate={{ opacity: 1, y: 0, x: '-50%' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="bg-white/70 backdrop-blur-md border border-white/40 shadow-sm rounded-full px-2 py-2 flex items-center justify-center gap-1 transition-all duration-300">
          <Link to="/" aria-label="Beranda" className="flex items-center gap-2 px-3 py-1 transition-all duration-300 ease-out hover:scale-105 hover:-rotate-2 focus-visible:ring-2 focus-visible:ring-sapa-accent focus-visible:ring-offset-2 rounded-full">
            <img
              src="/BEM.png"
              alt="Logo BEM Fasilkom Unsri"
              className="h-8 w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center justify-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`px-4 py-2 rounded-full text-sm font-display transition-all duration-200 focus-visible:ring-2 focus-visible:ring-sapa-accent focus-visible:ring-offset-2 ${
                  isActive(item.href)
                    ? 'bg-sapa-accent text-white shadow-md'
                    : 'text-sapa-primary hover:text-[#7A47A6] hover:-translate-y-0.5 hover:bg-sapa-highlight hover:opacity-80 active:scale-95 transition-all duration-300 ease-out'
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 150)}
                aria-expanded={isDropdownOpen}
                aria-haspopup="menu"
                className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-display transition-physical focus-visible:ring-2 focus-visible:ring-sapa-accent focus-visible:ring-offset-2 ${
                  isDropdownOpen ? 'bg-sapa-highlight text-sapa-primary' : 'text-sapa-primary hover:bg-sapa-highlight'
                }`}
              >
                BEM APPS
                <ChevronDown
                  aria-hidden="true"
                  width={16} height={16}
                  className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isDropdownOpen && (
                <motion.div
                  role="menu"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-40 bg-white/70 backdrop-blur-xl rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 overflow-hidden"
                >
                  {bemAppsItems.map((item) => (
                    <a
                      key={item.label}
                      role="menuitem"
                      href={item.href}
                      className="block px-4 py-3 text-sm font-body text-sapa-primary hover:bg-sapa-highlight transition-physical focus-visible:ring-2 focus-visible:ring-sapa-accent focus-visible:ring-inset"
                    >
                      {item.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>

            <button
              type="button"
              onClick={openTrackingModal}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-display text-sapa-primary hover:bg-sapa-highlight transition-all duration-200 active:scale-95 hover:opacity-80 ml-1 focus-visible:ring-2 focus-visible:ring-sapa-accent focus-visible:ring-offset-2"
            >
              <Search aria-hidden="true" width={16} height={16} />
              Cek Status
            </button>
          </div>

          <div className="flex md:hidden items-center gap-1">
            <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)} />
          </div>
        </div>
      </motion.nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
