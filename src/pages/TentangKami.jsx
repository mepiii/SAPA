import { motion } from 'motion/react';
import { AnimatedUnderline } from '../components/ui/animated-underline';
import { MagicText } from '../components/ui/magic-text';

export default function TentangKami() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16">
      <motion.div
        className="max-w-2xl w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-8">
          <AnimatedUnderline
            text="Tentang SAPA"
            as="h1"
            textClassName="text-4xl md:text-5xl font-bold text-sapa-primary tracking-tight drop-shadow-sm"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6 bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-sapa-secondary/10">
          <div className="text-justify leading-relaxed text-sapa-secondary">
            <MagicText
              text="SAPA (Sentra Aspirasi Pengaduan Asa) adalah platform digital aspirasi dan pengaduan yang dikembangkan oleh BEM Fasilkom Unsri untuk mewadahi suara mahasiswa dalam membangun kampus yang lebih baik."
            />
          </div>

          <p className="text-justify leading-relaxed text-sapa-secondary">
            Dengan SAPA, mahasiswa dapat menyampaikan aspirasi, kritik, dan laporan
            secara transparan dan efisien. Platform ini dirancang dengan prinsip
            kemudahan akses, kecepatan respons, dan jaminan anonimitas bagi
            pelapor.
          </p>

          <p className="text-justify leading-relaxed text-sapa-secondary">
            Setiap laporan yang masuk akan diproses oleh tim BEM dan dapat
            dipantau statusnya melalui nomor resi yang diberikan setelah pengiriman.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: '5', label: 'Kategori Laporan' },
              { number: '24/7', label: 'Akses Kapan Saja' },
              { number: '100%', label: 'Anonim' },
              { number: '1', label: 'Klik Lapor' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-sapa-secondary/10 shadow-sm hover:shadow-md transition-all"
                whileHover={{ y: -2 }}
              >
                <p className="text-2xl font-bold text-sapa-accent text-center">{stat.number}</p>
                <p className="text-sm text-sapa-secondary text-center">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 text-center">
          <motion.a
            href="/lapor"
            className="inline-flex items-center gap-2 px-8 py-3 bg-sapa-accent text-white font-semibold rounded-full hover:bg-sapa-primary transition-all duration-300 shadow-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Mulai Lapor
          </motion.a>
        </motion.div>
      </motion.div>
    </main>
  );
}