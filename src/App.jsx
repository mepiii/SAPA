import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SheetProvider } from './context/SheetContext';
import { BGPattern } from './components/ui/bg-pattern';
import FloatingPillNav from './components/layout/FloatingPillNav';
import SlideOutSheet from './components/forms/SlideOutSheet';
import TrackingModal from './components/forms/TrackingModal';
import Beranda from './pages/Beranda';
import TentangKami from './pages/TentangKami';
import Lapor from './pages/Lapor';
import { Toaster } from 'sonner';

function App() {
  return (
    <BrowserRouter>
      <SheetProvider>
        <div className="relative min-h-screen">
          {/* Global Background Pattern */}
          <BGPattern
            variant="grid"
            mask="fade-edges"
            className="fixed inset-0 z-[-1] pointer-events-none"
          />

          {/* Navigation */}
          <FloatingPillNav />

          {/* Main Content */}
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/tentang-kami" element={<TentangKami />} />
            <Route path="/lapor" element={<Lapor />} />
          </Routes>

          {/* Slide-out Sheet (Global) */}
          <SlideOutSheet />

          {/* Tracking Modal (Global) */}
          <TrackingModal />

          <Toaster position="bottom-right" />

          {/* Footer */}
          <footer className="py-8 px-4 text-center border-t border-sapa-secondary/10 mt-16">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <img src="/BEM.png" alt="BEM Logo" className="h-8 w-auto" />
                <span className="text-sm font-medium text-sapa-primary">
                  BEM Fasilkom Unsri
                </span>
              </div>
              <p className="text-xs text-sapa-secondary">
                © 2026 BEM Fasilkom Unsri, Kabinet Arka Satyawira. All rights reserved.
              </p>
              <p className="text-xs text-sapa-secondary/60 mt-2">
                Sentra Aspirasi Pengaduan Asa (SAPA)
              </p>
            </div>
          </footer>
        </div>
      </SheetProvider>
    </BrowserRouter>
  );
}

export default App;