import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { AnimatedUnderline } from '../components/ui/animated-underline';
import PageMeta from '../components/seo/PageMeta';

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
 transition: { type: 'spring', stiffness: 100, damping: 20, mass: 1 },
 },
 };

 return (
 <main id="main-content" className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16">
 <PageMeta
 title="Tentang Kami - SAPA"
 description="Pelajari tujuan, prinsip, dan manfaat SAPA sebagai platform aspirasi dan pengaduan mahasiswa BEM Fasilkom Unsri."
 />
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
 textClassName="text-4xl md:text-5xl font-display font-bold text-sapa-primary drop-shadow-heading dark:text-white/90 tracking-tight drop-shadow-sm"
 />
 </motion.div>

 <motion.div variants={itemVariants} className="space-y-6 bg-white/60 dark:bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-cinematic border border-white/50 dark:border-white/10 transition-physical">
 <p className="text-justify font-body leading-relaxed text-gray-700">
 <strong className="text-[#300B55]">SAPA (Sentra Aspirasi Pengaduan Asa)</strong> adalah platform digital aspirasi dan pengaduan yang dikembangkan oleh BEM Fasilkom Unsri untuk mewadahi suara mahasiswa dalam membangun kampus yang lebih baik.
 </p>

 <p className="text-justify font-body leading-relaxed text-gray-700">
 Dengan SAPA, mahasiswa dapat menyampaikan aspirasi, kritik, dan laporan
 secara transparan dan efisien. Platform ini dirancang dengan prinsip
 kemudahan akses, kecepatan respons, dan jaminan anonimitas bagi
 pelapor.
 </p>

 <p className="text-justify font-body leading-relaxed text-gray-700">
 Setiap laporan yang masuk akan diproses oleh tim BEM dan dapat
 dipantau statusnya melalui nomor resi yang diberikan setelah pengiriman.
 </p>
 </motion.div>

 <motion.section variants={itemVariants} className="mt-12" aria-labelledby="tentang-stats-title">
 <h2 id="tentang-stats-title" className="sr-only">Statistik SAPA</h2>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
 {[
 { number: '5', label: 'Kategori Laporan' },
 { number: '24/7', label: 'Akses Kapan Saja' },
 { number: '100%', label: 'Anonim' },
 { number: '1', label: 'Klik Lapor' },
 ].map((stat, i) => (
 <motion.div
 key={i}
 className="p-4 bg-white/60 dark:bg-white/10 backdrop-blur-md rounded-xl border border-white/50 dark:border-white/10 shadow-cinematic hover:shadow-cinematic dark:hover:shadow-glow-lg transition-physical"
 whileHover={{ y: -8, scale: 1.03 }} whileTap={{ scale: 0.95 }}
 >
 <p className="text-2xl font-display font-bold text-sapa-accent text-center">{stat.number}</p>
 <p className="text-sm font-body text-sapa-secondary dark:text-white/60 text-center">{stat.label}</p>
 </motion.div>
 ))}
 </div>
 </motion.section>

 <motion.div variants={itemVariants} className="mt-12 text-center">
 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
 <Link to="/lapor"
 className="inline-flex items-center gap-2 px-8 py-3 bg-sapa-accent text-white font-display font-semibold rounded-full hover:bg-sapa-primary transition-physical shadow-glow focus-visible:ring-2 focus-visible:ring-sapa-accent focus-visible:ring-offset-2"
 >
 Mulai Lapor
 </Link>
 </motion.div>
 </motion.div>
 </motion.div>
 </main>
 );
}
