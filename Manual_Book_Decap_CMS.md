# Manual Book Penggunaan Decap CMS
## Portal Desa Rancajaya

Website Desa Rancajaya dikelola menggunakan **Decap CMS**. Sistem ini memungkinkan Anda (Admin) untuk memperbarui konten website dengan mudah tanpa perlu memahami kode pemrograman (HTML/CSS/Javascript).

### 1. Cara Mengakses Halaman Admin
1. Buka browser web (Chrome, Firefox, Safari).
2. Kunjungi halaman utama website Desa Rancajaya.
3. Tambahkan `/admin` di akhir URL. Contoh: `https://rancajaya.desa.id/admin`.
4. Anda akan melihat halaman login.

### 2. Cara Login
1. Pada halaman login, klik tombol **"Continue with Netlify Identity"**.
2. Masukkan alamat email dan kata sandi yang telah didaftarkan.
3. Klik "Log in".
4. Setelah berhasil masuk, Anda akan diarahkan ke *Dashboard* utama Decap CMS yang berwarna hijau gelap dan emas (Agraris).

---

### 3. Memahami Struktur Konten (Collections)
Di sisi kiri layar (Sidebar), Anda akan melihat beberapa menu (Collections). Berikut penjelasan untuk setiap menu:

#### A. Halaman Beranda, Profil, Pertanian, Layanan
Digunakan untuk mengubah konten utama di masing-masing halaman.
- **Beranda**: Mengubah kalimat ucapan selamat datang, deskripsi potensi unggulan, dan statistik ringkas.
- **Profil**: Mengubah kata sambutan Kepala Desa, merubah struktur demografi penduduk (chart akan otomatis ter-update), dan memperbarui data Transparansi APBDes tahunan.
- **Pertanian**: Mengubah angka produktivitas, luas lahan, dan penjelasan komoditas.
- **Layanan**: Menambahkan *Link Formulir Google Form* untuk layanan administrasi (contoh: SKTM, SKU) dan menambahkan pertanyaan FAQ (Tanya Jawab).

#### B. Berita & Informasi
Kumpulan artikel, pengumuman, dan berita agenda desa.
- Klik **"New Berita & Informasi"** untuk membuat berita baru.
- Isi *Judul*, *Tanggal*, dan pilih *Kategori* (Berita, Agenda, Artikel, Pengumuman). Kategori sangat penting agar sistem filter di halaman Informasi berfungsi.
- Anda dapat mengunggah gambar *Thumbnail* dengan menekan area "Choose an image".
- Tuliskan ringkasan (Excerpt) pendek, dan isi isi lengkap berita pada kolom *Body* (mendukung format tulisan tebal, miring, list, dsb).

#### C. Galeri (Dokumentasi Kegiatan)
Kumpulan foto-foto kegiatan desa.
- Sangat penting untuk mengisi *Kategori*. Jika Anda mengisi kategori **"Pertanian"**, maka foto tersebut akan otomatis muncul di bagian Dokumentasi halaman Pertanian.

#### D. Kelompok Tani
Daftar seluruh Gapoktan/Poktan di desa. Menambahkan nama ketua, dusun, komoditas utama, dan jumlah anggota.

#### E. Layanan Darurat
Daftar nomor kontak penting (Puskesmas, Bhabinkamtibmas, Babinsa, dll). Data yang Anda masukkan akan langsung ditampilkan di halaman "Layanan" bagian bawah.

#### F. Pengaturan Umum
Mengatur data inti website seperti:
- Nama Desa, Kecamatan, Kabupaten, Provinsi.
- Visi & Misi Desa.
- Sejarah Singkat.
- Nomor Telepon Resmi, Email, Alamat Lengkap, dan Jam Operasional Kantor.
*Catatan: Pastikan Anda tidak menghapus data pada Pengaturan Umum, melainkan hanya mengedit teksnya.*

---

### 4. Alur Kerja (Workflow) Draft & Publikasi
Website ini menggunakan sistem *Editorial Workflow*. Artinya, ketika Anda membuat atau mengedit konten, perubahan tidak langsung tayang ke publik sebelum Anda menyetujuinya.

**Langkah-langkah Mempublikasikan Konten Baru:**
1. Klik tombol **New** pada salah satu koleksi (misal: Berita).
2. Isi seluruh formulir.
3. Di kanan atas, klik tombol **Save**.
4. Status tulisan Anda saat ini adalah **Draft**. 
5. Untuk mempublikasikannya, perhatikan tombol di kanan atas. Klik *Update Status* lalu pilih **Ready**.
6. Terakhir, klik **Publish**. 
7. Akan muncul pesan "Publishing...", tunggu beberapa menit (biasanya 1-3 menit) hingga Netlify selesai membangun ulang website (re-build).
8. Silakan *Refresh* website utama untuk melihat perubahannya.

**Menghapus / Membatalkan Publikasi:**
- Buka konten yang sudah tayang.
- Klik tombol **Unpublish**. Konten akan kembali menjadi draft.
- Untuk menghapus secara permanen, pilih **Delete entry**.

---

### 5. Pengelolaan Gambar (Media Library)
- Anda dapat mengelola seluruh gambar desa melalui tombol **"Media"** di bagian navigasi atas.
- Disarankan untuk **mengkompres ukuran foto (di bawah 1 MB)** sebelum diunggah agar website tetap cepat diakses oleh warga.

Selamat mengelola Portal Desa Rancajaya!
