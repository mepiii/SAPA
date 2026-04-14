import { AnimatedHero } from '../ui/animated-hero';

export default function HeroSection() {
  return (
    <AnimatedHero
      badge="Dari Mahasiswa Untuk Kampus"
      title="Sampaikan Aspirasi"
      titleAccent="Bersama SAPA"
      subtitle="Platform aspirasi dan pengaduan digital yang transparan, cepat, dan mudah untuk seluruh mahasiswa Fasilkom Unsri."
      primaryCTA="Mulai Lapor"
      secondaryCTA="Pelajari Lebih Lanjut"
      onPrimaryClick={() => {
        const el = document.getElementById('lapor');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }}
      onSecondaryClick={() => {
        const el = document.getElementById('tentang');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }}
    />
  );
}