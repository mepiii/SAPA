import { motion } from 'motion/react';
import {
  FileText,
  Send,
  Clock,
  CheckCircle2,
  BarChart3,
  Users,
  TrendingUp,
} from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import { Marquee } from '../components/ui/marquee';

const alurSteps = [
  {
    step: 1,
    title: 'Pilih Kategori',
    description: 'Tentukan kategori laporan yang sesuai',
    icon: FileText,
  },
  {
    step: 2,
    title: 'Isi Formulir',
    description: 'Lengkapi detail laporan Anda',
    icon: Send,
  },
  {
    step: 3,
    title: 'Terima ID Tracking',
    description: 'Simpan ID untuk memantau status',
    icon: Clock,
  },
  {
    step: 4,
    title: 'Pantau Progres',
    description: 'Cek status laporan kapan saja',
    icon: CheckCircle2,
  },
];

const stats = [
  { label: 'Laporan Diterima', value: '127', icon: BarChart3 },
  { label: 'Mahasiswa Aktif', value: '1,240', icon: Users },
  { label: 'Tingkat Respon', value: '94%', icon: TrendingUp },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Beranda() {
  return (
    <main className="min-h-screen bg-sapa-canvas">
      <HeroSection />

      {/* Alur Pelaporan Section */}
      <section id="alur" className="py-16 px-4">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-sapa-primary mb-4 tracking-tight">
              Alur Pelaporan
            </h2>
            <p className="text-sapa-secondary max-w-lg mx-auto">
              Empat langkah mudah untuk menyampaikan aspirasi Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {alurSteps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="glass rounded-2xl p-6 h-full">
                    <div className="w-12 h-12 rounded-xl bg-sapa-accent/10 flex items-center justify-center mb-4">
                      <Icon width={24} height={24} className="text-sapa-accent" strokeWidth={2} />
                    </div>
                    <div className="text-sm font-medium text-sapa-accent mb-2">
                      Langkah {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-sapa-primary mb-2 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-sapa-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {step.step < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 z-10">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="text-sapa-secondary/30"
                      >
                        <path
                          d="M6 3L11 8L6 13"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Statistik Section */}
      <section id="statistik" className="py-16 px-4">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-sapa-primary mb-4 tracking-tight">
              Statistik
            </h2>
            <p className="text-sapa-secondary max-w-lg mx-auto">
              Dampak nyata dari suara mahasiswa
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative glass-strong rounded-3xl p-8"
          >
            {/* Ambient Purple Glow */}
            <div
              className="absolute inset-0 -z-10 bg-[#7A47A6]/30 blur-[100px] rounded-3xl"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center">
                    <div className="w-14 h-14 rounded-xl bg-sapa-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Icon width={28} height={28} className="text-sapa-accent" strokeWidth={2} />
                    </div>
                    <div className="text-4xl font-display font-bold text-sapa-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-sapa-secondary">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Marquee Section */}
      <section className="py-8 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Marquee className="[--duration:20s]" pauseOnHover>
            {[
              'Laporan fasilitas telah diselesaikan',
              'Kebijakan baru diimplementasikan',
              'Seminar proposal disetujui',
              'Aspirasi mahasiswa ditindaklanjuti',
              'Fasilitas olahraga diperbaiki',
              'Layanan akademik dipercepat',
            ].map((text, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sapa-accent/5 text-sapa-secondary"
              >
                <CheckCircle2 width={16} height={16} className="text-sapa-accent" strokeWidth={2} />
                {text}
              </span>
            ))}
          </Marquee>
        </motion.div>
      </section>
    </main>
  );
}