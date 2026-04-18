import { useNavigate } from 'react-router-dom';
import { AnimatedHero } from '../ui/animated-hero';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <AnimatedHero
      badge="Dari Mahasiswa Untuk Kampus"
      title="Sampaikan Aspirasi"
      titleAccent="Bersama SAPA"
      subtitle="Platform aspirasi dan pengaduan digital yang transparan, cepat, dan mudah untuk seluruh mahasiswa Fasilkom Unsri."
      primaryCTA="Mulai Lapor"
      secondaryCTA="Pelajari Lebih Lanjut"
      onPrimaryClick={() => navigate('/lapor')}
      onSecondaryClick={() => navigate('/tentang-kami')}
    />
  );
}