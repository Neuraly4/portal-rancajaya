import { z, defineCollection } from 'astro:content';

const beritaCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(['Berita', 'Agenda', 'Artikel', 'Pengumuman']),
    thumbnail: z.string().optional(),
    excerpt: z.string(),
    author: z.string().default('Admin Desa'),
    featured: z.boolean().default(false),
  }),
});

const perangkatDesaCollection = defineCollection({
  type: 'content',
  schema: z.object({
    nama: z.string(),
    jabatan: z.string(),
    foto: z.string().optional(),
    urutan: z.number(),
    deskripsi: z.string().optional(),
  }),
});

const wisataCollection = defineCollection({
  type: 'content',
  schema: z.object({
    nama: z.string(),
    jenis: z.enum(['Alam', 'Budaya', 'Kuliner', 'Edukasi']),
    lokasi: z.string(),
    foto: z.string().optional(),
    status: z.enum(['Aktif', 'Dalam Pengembangan']),
  }),
});

const umkmCollection = defineCollection({
  type: 'content',
  schema: z.object({
    nama_produk: z.string(),
    harga: z.string(),
    kategori: z.enum(['Makanan', 'Minuman', 'Kerajinan', 'Pertanian', 'Lainnya']),
    toko: z.string(),
    whatsapp: z.string(),
    foto: z.string().optional(),
    status: z.enum(['Aktif', 'Nonaktif']),
  }),
});

const galeriCollection = defineCollection({
  type: 'content',
  schema: z.object({
    judul: z.string(),
    tanggal: z.date(),
    kategori: z.enum(['Kegiatan', 'Pembangunan', 'Budaya', 'Pertanian', 'Lainnya']),
    foto: z.string(),
    deskripsi: z.string(),
  }),
});

const kelompokTaniCollection = defineCollection({
  type: 'content',
  schema: z.object({
    nama: z.string(),
    ketua: z.string(),
    dusun: z.string(),
    komoditas_utama: z.string(),
    jumlah_anggota: z.number(),
    deskripsi: z.string(),
    kontak: z.string().optional(),
  }),
});

const layananDaruratCollection = defineCollection({
  type: 'content',
  schema: z.object({
    nama: z.string(),
    jenis: z.enum(['Kesehatan', 'Keamanan', 'Darurat']),
    telepon: z.string(),
    alamat: z.string(),
    deskripsi: z.string(),
  }),
});

const pengaturanCollection = defineCollection({
  type: 'data',
  schema: z.object({
    nama_desa: z.string().optional(),
    kecamatan: z.string().optional(),
    kabupaten: z.string().optional(),
    provinsi: z.string().optional(),
    visi: z.string().optional(),
    sejarah: z.string().optional(),
    misi: z.array(z.string()).optional(),
    alamat_kantor: z.string().optional(),
    telepon: z.string().optional(),
    email: z.string().optional(),
    jam_operasional: z.string().optional(),
  }),
});

const halamanCollection = defineCollection({
  type: 'data',
  schema: z.object({
    // Beranda
    hero_title: z.string().optional(),
    hero_subtitle: z.string().optional(),
    hero_bg: z.string().optional(),
    highlight_title: z.string().optional(),
    highlight_desc: z.string().optional(),
    highlight_image: z.string().optional(),
    statistik: z.array(z.object({
      label: z.string(),
      value: z.string()
    })).optional(),
    
    // Profil
    sambutan: z.string().optional(),
    nama_kades: z.string().optional(),
    foto_kades: z.string().optional(),
    luas_wilayah: z.string().optional(),
    dusun: z.array(z.string()).optional(),
    penduduk_total: z.string().optional(),
    penduduk_pria: z.string().optional(),
    penduduk_wanita: z.string().optional(),
    
    // Pertanian
    luas_lahan: z.string().optional(),
    komoditas: z.string().optional(),
    jumlah_kelompok: z.string().optional(),
    jumlah_petani: z.string().optional(),
    irigasi: z.string().optional(),
    produktivitas: z.string().optional(),
  }),
});

export const collections = {
  'berita': beritaCollection,
  'perangkat-desa': perangkatDesaCollection,
  'wisata': wisataCollection,
  'umkm': umkmCollection,
  'galeri': galeriCollection,
  'kelompok-tani': kelompokTaniCollection,
  'layanan-darurat': layananDaruratCollection,
  'pengaturan': pengaturanCollection,
  'halaman': halamanCollection,
};
