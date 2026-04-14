import BentoGrid from '../components/sections/BentoGrid';

export default function Lapor() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero-like header for Lapor page */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-sapa-primary mb-4 tracking-tight">
            Sampaikan Aspirasi Anda
          </h1>
          <p className="text-sapa-secondary max-w-lg mx-auto">
            Pilih kategori yang sesuai dengan laporan Anda. Semua laporan akan
            ditindaklanjuti oleh tim BEM Fasilkom.
          </p>
        </div>
      </section>
      <BentoGrid />
    </main>
  );
}