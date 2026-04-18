import { createContext, useContext, useState } from 'react';
import { toast } from 'sonner';

const SheetContext = createContext(null);

export function SheetProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState(null);
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);

  const openSheet = (categoryKey) => {
    setCategory(categoryKey);
    setIsSubmitted(false);
    setTrackingId(null);
    setIsOpen(true);
  };

  const closeSheet = () => {
    setIsOpen(false);
    setTimeout(() => {
      setCategory(null);
      setIsSubmitted(false);
      setTrackingId(null);
    }, 300);
  };

  const submitForm = (formData) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const id = Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    const newTrackingId = `SAPA-${id}`;
    setTrackingId(newTrackingId);
    setIsSubmitted(true);

    // Premium Toast Notification
    toast.success(`Berhasil! Laporan Anda telah diterima. Resi: ${newTrackingId}`, {
      style: {
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        color: '#300B55',
        boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
        fontFamily: 'Campton, Plus Jakarta Sans, sans-serif'
      }
    });

    console.log('Form submitted:', { category, formData, trackingId: newTrackingId });
    return newTrackingId;
  };

  const openTrackingModal = () => setIsTrackingModalOpen(true);
  const closeTrackingModal = () => setIsTrackingModalOpen(false);

  return (
    <SheetContext.Provider value={{
      isOpen,
      category,
      isSubmitted,
      trackingId,
      isTrackingModalOpen,
      openSheet,
      closeSheet,
      submitForm,
      openTrackingModal,
      closeTrackingModal,
    }}>
      {children}
    </SheetContext.Provider>
  );
}

export function useSheet() {
  const context = useContext(SheetContext);
  if (!context) {
    throw new Error('useSheet must be used within a SheetProvider');
  }
  return context;
}