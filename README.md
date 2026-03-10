<div align="center">
  <img src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=800&auto=format&fit=crop" alt="Flora & Bloom Banner" width="100%" height="300" style="object-fit: cover; border-radius: 12px; margin-bottom: 20px;" />

  # 🌸 Flora & Bloom - Premium Florist Landing Page

  Sebuah *landing page* modern, elegan, dan dinamis untuk toko bunga premium. Dibuat dengan fokus pada performa yang tinggi, *user experience* (UX) yang halus, dan desain antarmuka (*user interface* - UI) yang menawan menggunakan efek animasi *glassmorphism* dan *physics-based*.

  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
  [![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
</div>

---

## ✨ Fitur Utama (Key Features)

Proyek ini tidak hanya sekadar *landing page* statis, melainkan sebuah demonstrasi interaksi web modern:

*   💧 **Liquid Shrinking Navbar:** Navigasi atas yang merespons secara mulus saat digulir. Awalnya menempel rata dari sisi ke sisi layar (*edge-to-edge*), dan ketika di-*scroll*, secara perlahan menyusut menjadi bentuk pil (*pill-shape*) di tengah layar.
*   🪟 **Glassmorphism Design:** Penggunaan efek `backdrop-blur` tingkat lanjut berpadu dengan *opacity* warna putih untuk menciptakan efek kaca buram premium, khususnya pada *navbar* dan *card* bayangan.
*   🎢 **Physics-Based Animations:** Menggunakan **Framer Motion** untuk menganimasikan elemen (seperti pelebaran *navbar layout*) menggunakan tipe transisi `spring` untuk *feel* yang realistis dan alami, bukan sekadar animasi linear biasa.
*   🖼️ **Arc Gallery Hero:** Elemen *hero* interaktif di bagian paling atas halaman yang memperkenalkan merek secara visual.
*   📱 **Fully Responsive:** Tata letak disesuaikan dengan indah dari layar ponsel pintar terkecil hingga monitor *ultrawide*.
*   🚀 **Tailwind CSS v4 Standard:** Memanfaatkan optimasi penulisan sintaks terbaru dari Tailwind seperti `aspect-4/5`, `grow`, dan `bg-linear-to-t`.

## 🛠️ Teknologi yang Digunakan (Tech Stack)

*   **Framework Utama:** [React](https://reactjs.org/) (menggunakan ekosistem Modern Hooks)
*   **Build Tool:** [Vite](https://vitejs.dev/) (waktu *build* secepat kilat dan HMR yang instan)
*   **Penggayaan (Styling):** [Tailwind CSS](https://tailwindcss.com/) (versi ^4.0.0.alpha)
*   **Pustaka Animasi:** [Framer Motion](https://www.framer.com/motion/)
*   **Ikonografi:** [Lucide React](https://lucide.dev/) (ikon berbasis SVG yang ringan dan bisa dikustomisasi)

## 📂 Struktur Proyek Terpenting

Secara umum, file yang sering disentuh pada folder `src/` adalah:

```text
src/
├── App.tsx                        // Komponen akar (Root component), menyusun layout & konten (Hero, Katalog, dll)
├── index.css                      // File entri CSS untuk Tailwind CSS v4 & konfigurasi Theme Custom
└── components/
    └── ui/
        ├── liquid-navbar.tsx      // [Highlight] Komponen navigasi atas animasi liquid glassmorphism
        ├── arc-gallery-hero...tsx // Komponen Hero Image
        ├── testimonials-...tsx    // Komponen kolom animasi untuk testimoni pelanggan
        └── footer-section.tsx     // Bagian kontak & informasi kaki halaman
```

## 🚀 Memulai Proyek Secara Lokal (Getting Started)

Untuk menjalankan *landing page* ini di mesin lokal Anda (PC/Laptop), ikuti langkah-langkah mudah berikut:

### 1. Prasyarat (Prerequisites)
Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) (disarankan versi LTS 18+ atau 20+) dan `npm` dari *command line* Anda.

### 2. Kloning Repositori (Clone Repository)
```bash
git clone https://github.com/farizhari-stack/LandingPage-TokoBunga.git
cd LandingPage-TokoBunga
```

### 3. Instal Dependensi (Install Dependencies)
Jalankan perintah ini di dalam folder proyek untuk mengunduh semua pustaka yang dibutuhkan (React, Vite, Framer Motion, dll).
```bash
npm install
```
*(Catatan: Jika Anda menemukan error `EPERM` di Windows, cobalah menghapus folder `node_modules` jika ada, pastikan tidak ada editor yang mengunci file, lalu jalankan ulang `npm install`)*.

### 4. Jalankan Server Pengembangan (Run Dev Server)
```bash
npm run dev
```
Secara bawaan, aplikasi akan terbuka di `http://localhost:3000` atau `http://localhost:3001` (jika port 3000 sedang terpakai). Tautan akses akan muncul di Terminal Anda.

---

## 🏗️ Mengemas untuk Produksi (Build for Production)

Jika Anda ingin mempublikasikan situs ini secara online (dideploy ke Vercel, Netlify, atau *hosting* manapun):

1.  Jalankan perintah *build*:
    ```bash
    npm run build
    ```
2.  Perintah di atas akan menghasilkan folder `dist/` yang berisikan file HTML, CSS, dan JavaScript statis yang sangat teroptimasi dan siap di-*deploy*.

---

<br />
<div align="center">
  <i>Dibuat dengan ❤️ untuk proyek kecantikan floral (bunga).</i>
</div>
