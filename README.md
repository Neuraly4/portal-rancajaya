# Portal Rancajaya

Website resmi (Portal) untuk profil, informasi, potensi pertanian, dan layanan administrasi Desa Rancajaya. Dibangun menggunakan [Astro](https://astro.build) dan [Decap CMS](https://decapcms.org/).

## Konfigurasi GitHub Pages
Website ini dikonfigurasi untuk berjalan di GitHub Pages.
URL repositori: `https://github.com/Neuraly4/portal-rancajaya`
Live URL: `https://Neuraly4.github.io/portal-rancajaya`

## Cara Menjalankan di Lokal

1. **Clone repository ini**
   ```bash
   git clone https://github.com/Neuraly4/portal-rancajaya.git
   cd portal-rancajaya
   ```

2. **Instal dependensi**
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan**
   ```bash
   npm run dev
   ```

4. Buka browser dan arahkan ke `http://localhost:4321`. 
5. Untuk mengakses halaman Admin CMS, kunjungi `http://localhost:4321/admin/index.html`. 

*(Catatan: Saat ini backend Decap CMS terhubung ke GitHub `Neuraly4/portal-rancajaya`, pastikan Anda login menggunakan GitHub OAuth jika sudah disetup).*

## Struktur Proyek
- `src/pages/`: Berisi semua rute halaman website (`index.astro`, `profil.astro`, dll).
- `src/components/`: Komponen UI yang dapat digunakan kembali.
- `src/content/`: Koleksi konten markdown dari CMS.
- `public/admin/`: Konfigurasi CMS (`config.yml`).