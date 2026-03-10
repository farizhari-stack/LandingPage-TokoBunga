import React from 'react';
import { motion } from 'framer-motion';
import { ContainerScroll } from './components/ui/container-scroll-animation';
import { TestimonialsColumn } from './components/ui/testimonials-columns-1';
import { Footer } from './components/ui/footer-section';
import { ArcGalleryHero } from './components/ui/arc-gallery-hero-component';
import { LiquidNavbar } from './components/ui/liquid-navbar';
import {
  Flower2,
  Leaf,
  Sparkles,
  Truck,
  CheckCircle2,
  ShoppingCart,
  MessageCircle,
  Star,
  Quote,
  MapPin,
  Phone,
  AtSign,
  Instagram,
  Twitter
} from 'lucide-react';

export default function App() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      text: "Bunganya sangat segar dan wanginya awet banget. Desain buketnya juga sangat modern dan elegan. Istri saya sangat senang!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      name: "Andi Pratama",
      role: "Pelanggan Setia",
    },
    {
      text: "Pesan papan bunga dadakan untuk grand opening klien, responnya sangat cepat dan hasilnya luar biasa rapi. Recommended banget!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      name: "Siska Amelia",
      role: "Corporate Client",
    },
    {
      text: "Pelayanan ramah sekali. Floristnya membantu pilih bunga yang cocok untuk wisuda adek saya. Warnanya pas banget!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
      name: "Dewi Lestari",
      role: "Mahasiswi",
    },
    {
      text: "Rangkaian bunga mejanya sangat cantik, membuat suasana ruang tamu jadi lebih hidup. Pengirimannya juga on time.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      name: "Budi Santoso",
      role: "Pelanggan Baru",
    },
    {
      text: "Sangat puas dengan wedding bouquet pesanan saya. Bunganya fresh dan dirangkai persis seperti referensi yang saya berikan.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
      name: "Rina Wijaya",
      role: "Bride-to-be",
    },
    {
      text: "Kualitas bunga impornya juara! Tahan lama dan warnanya sangat vibrant. Pasti akan pesan lagi untuk acara berikutnya.",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop",
      name: "Kevin Sanjaya",
      role: "Event Organizer",
    },
    {
      text: "Langganan dari tahun lalu untuk kirim bunga ke kolega bisnis. Selalu konsisten bagus dan pelayanannya profesional.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
      name: "Maya Sari",
      role: "HR Manager",
    },
    {
      text: "Flower box-nya sangat elegan, cocok banget buat kado anniversary. Packagingnya aman dan kelihatan mewah.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
      name: "Hendra Gunawan",
      role: "Pelanggan Setia",
    },
    {
      text: "Adminnya sangat responsif and helpful saat saya bingung pilih bunga. Hasil akhirnya sangat memuaskan!",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200&auto=format&fit=crop",
      name: "Putri Anisa",
      role: "Mahasiswi",
    },
  ];

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  const flowerImages = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBMv1QgfG2ovxo4ScdhsojvIPHTxsj-YUzcQJfXAcanU6HBotcwEohFUF0UAXlJM1sx6E0v_AlorJR-Jfhfs2Vdy8E3zVpwLL3GDp9qiOaYO676Ce9H1KoN-9QtaLiYPQsg6CCiAXO8m31KkC4HBhivga0R5A7cFo9szpk6keP6fIeQRL--G_3Z3vv4UkXvI-CQK4v-B9WE-Xbl_zwPSG5xoVY-YVFEiCN23CtD2PLwCOL-TPUzpLK2e1asn-1XKu3-QC7H5eeXfrQ',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCC6zq2hQf_NuNc0Pzz6DFOyskUV_NXnTHwI6U9IUS_Ks8ejbKeEXcHgu555SnH6Ltn26KHep-YWSvrmDZWH9F7oxik7l66eCPic0ETmMOCBqT_1fjz5czwzninfF0oBBeXrHGV9JfWGdVTu7DIEyUDFNJ_P0jpczLOpzggPbVCwUwysum9YnNPlvGsmfUPlHtGQygR_X476r2T2Wi6FlZ92lkhMAwMYjI8t1LagqXojdaWTATnynq2MuRWl1AKeYPdIwawNx16SAY',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCzuRNXO6_ocNW8-8-1p4K-FrUcyLW5S9MBQP91pMPYhC9sZfoyQNTA9fujEv6Yu68fG-28uKIyj99tgccDaC01WMyFn8SxmFWU1-QZThD-o_Y3lB9oHH0sE5FZL_ZjVXnGvSUvQ0o5zBcoEVRDNOGmDRtYOTo5NA8Xc_7bN3a_8ciPhbIiGqQds3CfjOeLrHqQcrsHs4o91unTSGxJtzjdIFvoLIDXaZ5_jWnBFPOkdJ1ycwTnLG7CD7auDQ5edZI8RVLSJ62udr8',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAQun0xTWfKimvrkiEWRTABoa9Bj3OYOD2_slfYS4wYaznn8iuUTDs6P_PKU04aidhqHsIqA9I9EWKPt_ySMXMUOpK-V2Js1i96B6mENXS4eoLBG6bIO3rcFgBgU1xEBgZzLd__cTYYZ37CVv8N1EPgPmjnCIS743t9hVoeSVvj2_3GvhaswBQDqi59Gj4i-kzbpdsdKC8OjXjebKUR9o2ZdxXaLd7pnJ539uQ8Vl1LbFgzmyf_LBsoQ_9sUky4clNy4h4WO_N1mUI',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBMv1QgfG2ovxo4ScdhsojvIPHTxsj-YUzcQJfXAcanU6HBotcwEohFUF0UAXlJM1sx6E0v_AlorJR-Jfhfs2Vdy8E3zVpwLL3GDp9qiOaYO676Ce9H1KoN-9QtaLiYPQsg6CCiAXO8m31KkC4HBhivga0R5A7cFo9szpk6keP6fIeQRL--G_3Z3vv4UkXvI-CQK4v-B9WE-Xbl_zwPSG5xoVY-YVFEiCN23CtD2PLwCOL-TPUzpLK2e1asn-1XKu3-QC7H5eeXfrQ',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCC6zq2hQf_NuNc0Pzz6DFOyskUV_NXnTHwI6U9IUS_Ks8ejbKeEXcHgu555SnH6Ltn26KHep-YWSvrmDZWH9F7oxik7l66eCPic0ETmMOCBqT_1fjz5czwzninfF0oBBeXrHGV9JfWGdVTu7DIEyUDFNJ_P0jpczLOpzggPbVCwUwysum9YnNPlvGsmfUPlHtGQygR_X476r2T2Wi6FlZ92lkhMAwMYjI8t1LagqXojdaWTATnynq2MuRWl1AKeYPdIwawNx16SAY',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCzuRNXO6_ocNW8-8-1p4K-FrUcyLW5S9MBQP91pMPYhC9sZfoyQNTA9fujEv6Yu68fG-28uKIyj99tgccDaC01WMyFn8SxmFWU1-QZThD-o_Y3lB9oHH0sE5FZL_ZjVXnGvSUvQ0o5zBcoEVRDNOGmDRtYOTo5NA8Xc_7bN3a_8ciPhbIiGqQds3CfjOeLrHqQcrsHs4o91unTSGxJtzjdIFvoLIDXaZ5_jWnBFPOkdJ1ycwTnLG7CD7auDQ5edZI8RVLSJ62udr8',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAQun0xTWfKimvrkiEWRTABoa9Bj3OYOD2_slfYS4wYaznn8iuUTDs6P_PKU04aidhqHsIqA9I9EWKPt_ySMXMUOpK-V2Js1i96B6mENXS4eoLBG6bIO3rcFgBgU1xEBgZzLd__cTYYZ37CVv8N1EPgPmjnCIS743t9hVoeSVvj2_3GvhaswBQDqi59Gj4i-kzbpdsdKC8OjXjebKUR9o2ZdxXaLd7pnJ539uQ8Vl1LbFgzmyf_LBsoQ_9sUky4clNy4h4WO_N1mUI',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBMv1QgfG2ovxo4ScdhsojvIPHTxsj-YUzcQJfXAcanU6HBotcwEohFUF0UAXlJM1sx6E0v_AlorJR-Jfhfs2Vdy8E3zVpwLL3GDp9qiOaYO676Ce9H1KoN-9QtaLiYPQsg6CCiAXO8m31KkC4HBhivga0R5A7cFo9szpk6keP6fIeQRL--G_3Z3vv4UkXvI-CQK4v-B9WE-Xbl_zwPSG5xoVY-YVFEiCN23CtD2PLwCOL-TPUzpLK2e1asn-1XKu3-QC7H5eeXfrQ',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCC6zq2hQf_NuNc0Pzz6DFOyskUV_NXnTHwI6U9IUS_Ks8ejbKeEXcHgu555SnH6Ltn26KHep-YWSvrmDZWH9F7oxik7l66eCPic0ETmMOCBqT_1fjz5czwzninfF0oBBeXrHGV9JfWGdVTu7DIEyUDFNJ_P0jpczLOpzggPbVCwUwysum9YnNPlvGsmfUPlHtGQygR_X476r2T2Wi6FlZ92lkhMAwMYjI8t1LagqXojdaWTATnynq2MuRWl1AKeYPdIwawNx16SAY',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCzuRNXO6_ocNW8-8-1p4K-FrUcyLW5S9MBQP91pMPYhC9sZfoyQNTA9fujEv6Yu68fG-28uKIyj99tgccDaC01WMyFn8SxmFWU1-QZThD-o_Y3lB9oHH0sE5FZL_ZjVXnGvSUvQ0o5zBcoEVRDNOGmDRtYOTo5NA8Xc_7bN3a_8ciPhbIiGqQds3CfjOeLrHqQcrsHs4o91unTSGxJtzjdIFvoLIDXaZ5_jWnBFPOkdJ1ycwTnLG7CD7auDQ5edZI8RVLSJ62udr8',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAQun0xTWfKimvrkiEWRTABoa9Bj3OYOD2_slfYS4wYaznn8iuUTDs6P_PKU04aidhqHsIqA9I9EWKPt_ySMXMUOpK-V2Js1i96B6mENXS4eoLBG6bIO3rcFgBgU1xEBgZzLd__cTYYZ37CVv8N1EPgPmjnCIS743t9hVoeSVvj2_3GvhaswBQDqi59Gj4i-kzbpdsdKC8OjXjebKUR9o2ZdxXaLd7pnJ539uQ8Vl1LbFgzmyf_LBsoQ_9sUky4clNy4h4WO_N1mUI',
  ];

  return (
    <div className="min-h-screen bg-background-light text-slate-900">
      {/* Top Navigation Bar */}
      <LiquidNavbar />

      <main>
        {/* Hero Section */}
        <ArcGalleryHero images={flowerImages} />

        {/* Scroll Animation Showcase */}
        <section className="bg-background-light overflow-hidden">
          <div className="flex flex-col overflow-hidden pb-[100px] pt-[50px] md:pt-[100px]">
            <ContainerScroll
              titleComponent={
                <>
                  <h1 className="text-4xl font-semibold text-slate-900 mb-4">
                    Temukan Keindahan <br />
                    <span className="text-4xl md:text-[5rem] font-bold mt-1 leading-none text-primary">
                      Koleksi Terbaik Kami
                    </span>
                  </h1>
                </>
              }
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 h-full overflow-y-auto bg-white dark:bg-zinc-900 rounded-2xl">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMv1QgfG2ovxo4ScdhsojvIPHTxsj-YUzcQJfXAcanU6HBotcwEohFUF0UAXlJM1sx6E0v_AlorJR-Jfhfs2Vdy8E3zVpwLL3GDp9qiOaYO676Ce9H1KoN-9QtaLiYPQsg6CCiAXO8m31KkC4HBhivga0R5A7cFo9szpk6keP6fIeQRL--G_3Z3vv4UkXvI-CQK4v-B9WE-Xbl_zwPSG5xoVY-YVFEiCN23CtD2PLwCOL-TPUzpLK2e1asn-1XKu3-QC7H5eeXfrQ" alt="Bunga 1" className="rounded-xl object-cover h-40 md:h-60 w-full aspect-4/5" referrerPolicy="no-referrer" />
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzuRNXO6_ocNW8-8-1p4K-FrUcyLW5S9MBQP91pMPYhC9sZfoyQNTA9fujEv6Yu68fG-28uKIyj99tgccDaC01WMyFn8SxmFWU1-QZThD-o_Y3lB9oHH0sE5FZL_ZjVXnGvSUvQ0o5zBcoEVRDNOGmDRtYOTo5NA8Xc_7bN3a_8ciPhbIiGqQds3CfjOeLrHqQcrsHs4o91unTSGxJtzjdIFvoLIDXaZ5_jWnBFPOkdJ1ycwTnLG7CD7auDQ5edZI8RVLSJ62udr8" alt="Bunga 2" className="rounded-xl object-cover h-40 md:h-60 w-full" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=800&auto=format&fit=crop" alt="Bunga 3" className="rounded-xl object-cover h-40 md:h-60 w-full" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1468327768560-75b778cbb551?q=80&w=800&auto=format&fit=crop" alt="Bunga 4" className="rounded-xl object-cover h-40 md:h-60 w-full" referrerPolicy="no-referrer" />
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQun0xTWfKimvrkiEWRTABoa9Bj3OYOD2_slfYS4wYaznn8iuUTDs6P_PKU04aidhqHsIqA9I9EWKPt_ySMXMUOpK-V2Js1i96B6mENXS4eoLBG6bIO3rcFgBgU1xEBgZzLd__cTYYZ37CVv8N1EPgPmjnCIS743t9hVoeSVvj2_3GvhaswBQDqi59Gj4i-kzbpdsdKC8OjXjebKUR9o2ZdxXaLd7pnJ539uQ8Vl1LbFgzmyf_LBsoQ_9sUky4clNy4h4WO_N1mUI" alt="Bunga 5" className="rounded-xl object-cover h-40 md:h-60 w-full" referrerPolicy="no-referrer" />
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC6zq2hQf_NuNc0Pzz6DFOyskUV_NXnTHwI6U9IUS_Ks8ejbKeEXcHgu555SnH6Ltn26KHep-YWSvrmDZWH9F7oxik7l66eCPic0ETmMOCBqT_1fjz5czwzninfF0oBBeXrHGV9JfWGdVTu7DIEyUDFNJ_P0jpczLOpzggPbVCwUwysum9YnNPlvGsmfUPlHtGQygR_X476r2T2Wi6FlZ92lkhMAwMYjI8t1LagqXojdaWTATnynq2MuRWl1AKeYPdIwawNx16SAY" alt="Bunga 6" className="rounded-xl object-cover h-40 md:h-60 w-full" referrerPolicy="no-referrer" />
              </div>
            </ContainerScroll>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          >
            <div className="text-center mb-16">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Keunggulan Kami</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">Mengapa Memilih Flora & Bloom?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              <div className="group flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 transition-all duration-300 hover:-translate-y-1">
                <div className="w-20 h-20 bg-primary/5 group-hover:bg-primary/10 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-300 rotate-3 group-hover:-rotate-3">
                  <Leaf className="text-primary w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Kualitas Segar</h3>
                <p className="text-slate-600 leading-relaxed">Bunga pilihan dari kebun lokal dan impor yang dijaga kesegarannya setiap hari untuk hasil yang sempurna.</p>
              </div>
              <div className="group flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 transition-all duration-300 hover:-translate-y-1">
                <div className="w-20 h-20 bg-primary/5 group-hover:bg-primary/10 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-300 -rotate-3 group-hover:rotate-3">
                  <Sparkles className="text-primary w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Florist Profesional</h3>
                <p className="text-slate-600 leading-relaxed">Setiap buket dirangkai dengan estetika tinggi dan penuh cinta oleh ahli bunga berpengalaman kami.</p>
              </div>
              <div className="group flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 transition-all duration-300 hover:-translate-y-1">
                <div className="w-20 h-20 bg-primary/5 group-hover:bg-primary/10 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-300 rotate-3 group-hover:-rotate-3">
                  <Truck className="text-primary w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Pengiriman Cepat</h3>
                <p className="text-slate-600 leading-relaxed">Layanan pengiriman aman dan tepat waktu di hari yang sama untuk seluruh area Jabodetabek.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About Us */}
        <section className="py-24 bg-background-light" id="tentang">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
                <img 
                  alt="About Flora and Bloom" 
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-4/5" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9OjHGSjNvVcuy66UYzCI_eYwnuiykxmd3dDc0wUlWlXsisL5kuICk0SMWuE5_84HUSogL60p7lY09mRZsgZ_WJ_y-KT4FmaeWDQ9IqKY22ou0Q7awAUVG2quZ5Hhhy4P-V4YsTafOtL8ITJutwgkYq3JtrSLxrB8XChkhVnrE3mmS7smx5eahVWx23YhDJcxDREGK9aZLeTL5BBMtAQnTa_7lbwNtZgZy5UW7ouyFt45bOjV9aGA91nP2ex72RnYOHCSWV59rZME"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-8 -right-8 p-8 bg-white rounded-xl shadow-xl hidden md:block">
                  <p className="text-primary text-4xl font-bold">10+</p>
                  <p className="text-sm font-medium text-slate-500">Tahun Pengalaman</p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 leading-tight">
                  Tentang Flora & Bloom
                </h2>
                <div className="w-20 h-1.5 bg-primary mb-8 rounded-full"></div>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Berawal dari kecintaan kecil terhadap keindahan alam, Flora & Bloom tumbuh menjadi destinasi floral yang mengedepankan kualitas dan seni. Kami percaya bahwa bunga bukan sekadar tanaman, melainkan pesan cinta, rasa syukur, dan kebahagiaan.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Misi kami adalah menyediakan bunga lokal dan impor terbaik dengan layanan sepenuh hati. Kami bekerja sama langsung dengan petani bunga terbaik untuk memastikan setiap kelopak yang sampai di tangan Anda adalah yang paling sempurna.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-6 h-6" />
                    <span className="font-medium">Bunga Segar Setiap Pagi</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-6 h-6" />
                    <span className="font-medium">Desain Custom Sesuai Keinginan</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-6 h-6" />
                    <span className="font-medium">Komitmen Kepuasan Pelanggan 100%</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Featured Collections */}
        <section className="py-24 bg-slate-50" id="katalog">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="text-center mb-16">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Katalog Kami</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-slate-900">Koleksi Unggulan</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">Temukan berbagai pilihan rangkaian bunga elegan untuk setiap momen berharga dalam hidup Anda.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Hand Bouquet */}
              <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col">
                <div className="relative overflow-hidden aspect-4/5">
                  <img 
                    alt="Hand Bouquet" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out aspect-4/5" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMv1QgfG2ovxo4ScdhsojvIPHTxsj-YUzcQJfXAcanU6HBotcwEohFUF0UAXlJM1sx6E0v_AlorJR-Jfhfs2Vdy8E3zVpwLL3GDp9qiOaYO676Ce9H1KoN-9QtaLiYPQsg6CCiAXO8m31KkC4HBhivga0R5A7cFo9szpk6keP6fIeQRL--G_3Z3vv4UkXvI-CQK4v-B9WE-Xbl_zwPSG5xoVY-YVFEiCN23CtD2PLwCOL-TPUzpLK2e1asn-1XKu3-QC7H5eeXfrQ"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-primary shadow-sm">Populer</div>
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Hand Bouquet</h3>
                  <p className="text-primary font-semibold mb-3 text-lg">Mulai Rp 150.000</p>
                  <p className="text-sm text-slate-500 mb-6 line-clamp-2 grow">Rangkaian bunga tangan cantik untuk kado ulang tahun atau kelulusan.</p>
                  <a href="https://wa.me/6281234567890?text=Halo%20Flora%20%26%20Bloom,%20saya%20tertarik%20untuk%20memesan%20Hand%20Bouquet." target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-[#25D366]/10 text-[#25D366] font-bold rounded-xl hover:bg-[#25D366] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" /> Pesan via WhatsApp
                  </a>
                </div>
              </div>
              
              {/* Papan Bunga */}
              <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col">
                <div className="relative overflow-hidden aspect-4/5">
                  <img 
                    alt="Papan Bunga" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out aspect-4/5" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC6zq2hQf_NuNc0Pzz6DFOyskUV_NXnTHwI6U9IUS_Ks8ejbKeEXcHgu555SnH6Ltn26KHep-YWSvrmDZWH9F7oxik7l66eCPic0ETmMOCBqT_1fjz5czwzninfF0oBBeXrHGV9JfWGdVTu7DIEyUDFNJ_P0jpczLOpzggPbVCwUwysum9YnNPlvGsmfUPlHtGQygR_X476r2T2Wi6FlZ92lkhMAwMYjI8t1LagqXojdaWTATnynq2MuRWl1AKeYPdIwawNx16SAY"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Papan Bunga</h3>
                  <p className="text-primary font-semibold mb-3 text-lg">Mulai Rp 500.000</p>
                  <p className="text-sm text-slate-500 mb-6 line-clamp-2 grow">Ucapan formal yang megah untuk peresmian, duka cita, atau pernikahan.</p>
                  <a href="https://wa.me/6281234567890?text=Halo%20Flora%20%26%20Bloom,%20saya%20tertarik%20untuk%20memesan%20Papan%20Bunga." target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-[#25D366]/10 text-[#25D366] font-bold rounded-xl hover:bg-[#25D366] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" /> Pesan via WhatsApp
                  </a>
                </div>
              </div>

              {/* Table Arrangement */}
              <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col">
                <div className="relative overflow-hidden aspect-4/5">
                  <img 
                    alt="Table Arrangement" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out aspect-4/5" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzuRNXO6_ocNW8-8-1p4K-FrUcyLW5S9MBQP91pMPYhC9sZfoyQNTA9fujEv6Yu68fG-28uKIyj99tgccDaC01WMyFn8SxmFWU1-QZThD-o_Y3lB9oHH0sE5FZL_ZjVXnGvSUvQ0o5zBcoEVRDNOGmDRtYOTo5NA8Xc_7bN3a_8ciPhbIiGqQds3CfjOeLrHqQcrsHs4o91unTSGxJtzjdIFvoLIDXaZ5_jWnBFPOkdJ1ycwTnLG7CD7auDQ5edZI8RVLSJ62udr8"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Table Flower</h3>
                  <p className="text-primary font-semibold mb-3 text-lg">Mulai Rp 250.000</p>
                  <p className="text-sm text-slate-500 mb-6 line-clamp-2 grow">Hiasan meja elegan untuk mempercantik sudut ruangan atau acara makan malam.</p>
                  <a href="https://wa.me/6281234567890?text=Halo%20Flora%20%26%20Bloom,%20saya%20tertarik%20untuk%20memesan%20Table%20Flower." target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-[#25D366]/10 text-[#25D366] font-bold rounded-xl hover:bg-[#25D366] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" /> Pesan via WhatsApp
                  </a>
                </div>
              </div>

              {/* Wedding Flowers */}
              <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col">
                <div className="relative overflow-hidden aspect-4/5">
                  <img 
                    alt="Wedding Flowers" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out aspect-4/5" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQun0xTWfKimvrkiEWRTABoa9Bj3OYOD2_slfYS4wYaznn8iuUTDs6P_PKU04aidhqHsIqA9I9EWKPt_ySMXMUOpK-V2Js1i96B6mENXS4eoLBG6bIO3rcFgBgU1xEBgZzLd__cTYYZ37CVv8N1EPgPmjnCIS743t9hVoeSVvj2_3GvhaswBQDqi59Gj4i-kzbpdsdKC8OjXjebKUR9o2ZdxXaLd7pnJ539uQ8Vl1LbFgzmyf_LBsoQ_9sUky4clNy4h4WO_N1mUI"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Wedding Flowers</h3>
                  <p className="text-primary font-semibold mb-3 text-lg">Custom Order</p>
                  <p className="text-sm text-slate-500 mb-6 line-clamp-2 grow">Dekorasi pernikahan impian mulai dari buket pengantin hingga pelaminan.</p>
                  <a href="https://wa.me/6281234567890?text=Halo%20Flora%20%26%20Bloom,%20saya%20tertarik%20untuk%20konsultasi%20Wedding%20Flowers." target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-[#25D366]/10 text-[#25D366] font-bold rounded-xl hover:bg-[#25D366] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" /> Konsultasi via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-background-light relative overflow-hidden" id="testimoni">
          <div className="container z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="border border-primary/20 text-primary py-1 px-4 rounded-full text-sm font-bold tracking-wider uppercase bg-primary/5">Testimoni</div>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mt-2 mb-4">
                Apa Kata Pelanggan Kami
              </h2>
              <div className="flex justify-center gap-1 text-yellow-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-center text-slate-600 opacity-90">
                Ribuan pelanggan telah mempercayakan momen spesial mereka kepada Flora & Bloom.
              </p>
            </motion.div>

            <div className="flex justify-center gap-6 mt-16 mask-[linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[740px] overflow-hidden">
              <TestimonialsColumn testimonials={firstColumn} duration={15} />
              <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
              <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-soft-green" id="kontak">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold mb-8">Hubungi Kami</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                      <MapPin className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Alamat Gallery</h4>
                      <p className="text-slate-600">Jl. Bunga Melati No. 123, Kebayoran Baru, Jakarta Selatan, 12110</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                      <Phone className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">WhatsApp / Telepon</h4>
                      <p className="text-slate-600">+62 812-3456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                      <AtSign className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Instagram</h4>
                      <p className="text-slate-600">@floraandbloom.id</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 p-6 bg-white rounded-xl shadow-lg">
                  <h4 className="font-bold mb-4">Kirim Pesan</h4>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                      <input className="w-full px-4 py-2 rounded-lg bg-slate-50 border-none focus:ring-2 focus:ring-primary outline-none" placeholder="Nama" type="text" />
                      <input className="w-full px-4 py-2 rounded-lg bg-slate-50 border-none focus:ring-2 focus:ring-primary outline-none" placeholder="Email" type="email" />
                    </div>
                    <textarea className="w-full px-4 py-2 rounded-lg bg-slate-50 border-none focus:ring-2 focus:ring-primary outline-none" placeholder="Pesan Anda" rows={4}></textarea>
                    <button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary/90 transition-all">
                      Kirim Sekarang
                    </button>
                  </form>
                </div>
              </div>
              
              <div className="h-full min-h-[400px]">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl border-4 border-white grayscale hover:grayscale-0 transition-all duration-700">
                  <div className="w-full h-full bg-slate-300 relative">
                    <img 
                      alt="Map Location" 
                      className="w-full h-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6tQseic2CcIVAojNQk7BVNO00ABruxlXaGJjIGDKr-kNGWdZc70rnIaeIpmCgBV1yJnHwJFnNiEcrgRlH2R7BbdnoFBTfi9vbzCXj2SVOH7pdjvD1ug9M2i3D3yEqpmqhHih56Xa0WjJnnTS4z2nGBWf5FSdCOnGif2FbvU5oKWCHxj5YKZUuW7YS4R6_GIlUFPGfC_c3M3NARiDLECqiYCsHiXpSYPs2Roepjn-WaWmOBtfMd5Ty52XllkPRSElvTQoqK278LqU"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-primary text-white p-3 rounded-full shadow-2xl animate-bounce">
                        <MapPin className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <div className="bg-background-dark pt-10">
        <Footer />
      </div>
    </div>
  );
}
