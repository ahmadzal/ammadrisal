# Portfolio UI/UX Designer & Full Stack Developer

Portfolio website modern dan menarik yang dibuat dengan Next.js 14, TypeScript, dan Tailwind CSS. Website ini menampilkan projects, certificates, dan skills dengan design yang clean dan professional.

## ✨ Fitur

- 🎨 **Design Modern**: UI/UX yang clean dengan dark theme
- ⚡ **Next.js 14**: Framework React terbaru dengan App Router
- 🎭 **Animasi Smooth**: Menggunakan Framer Motion untuk transisi yang halus
- 📱 **Responsive**: Tampilan optimal di semua ukuran layar
- 🎯 **SEO Optimized**: Metadata dan struktur yang baik untuk SEO
- 🚀 **Performance**: Fast loading dan optimized

## 📁 Struktur Halaman

- **Home (/)**: Landing page dengan hero section, about, skills, dan contact
- **Projects (/projects)**: Showcase semua project yang pernah dikerjakan
- **Certificates (/certificates)**: Daftar sertifikat dan achievements

## 🛠️ Teknologi

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 🚀 Cara Menjalankan

### 1. Install Dependencies

```bash
npm install
```

### 2. Jalankan Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### 3. Build untuk Production

```bash
npm run build
npm start
```

## 📝 Customization

### Mengubah Informasi Personal

Edit file-file berikut untuk mengubah konten:

1. **app/page.tsx** - Hero section, about, dan skills
2. **app/projects/page.tsx** - Daftar projects
3. **app/certificates/page.tsx** - Daftar certificates
4. **components/Footer.tsx** - Social links dan footer info

### Mengubah Warna

Edit `tailwind.config.ts` untuk mengubah color scheme:

```typescript
colors: {
  primary: {
    // Ubah warna di sini
  },
}
```

### Menambah Project Baru

Di `app/projects/page.tsx`, tambahkan object baru ke array `projects`:

```typescript
{
  id: 7,
  title: 'Project Baru',
  description: 'Deskripsi project',
  image: 'https://images.unsplash.com/...',
  tags: ['React', 'Node.js'],
  github: 'https://github.com/username/repo',
  demo: 'https://demo.com',
  category: 'Full Stack',
}
```

### Menambah Certificate Baru

Di `app/certificates/page.tsx`, tambahkan object baru ke array `certificates`:

```typescript
{
  id: 9,
  title: 'Certificate Baru',
  issuer: 'Platform/Institusi',
  date: 'Bulan Tahun',
  credentialId: 'ID-XXX',
  description: 'Deskripsi singkat',
  skills: ['Skill 1', 'Skill 2'],
  link: 'https://certificate-link.com',
  category: 'Category',
}
```

## 🎨 Personalisasi

Jangan lupa untuk mengubah:

- ✏️ Nama di hero section (`app/page.tsx`)
- 📧 Email dan lokasi di contact section
- 🔗 Social media links di `components/Footer.tsx`
- 📸 Foto/gambar projects (gunakan gambar sendiri)
- 🎯 Skills sesuai keahlian kamu

## 📦 Deploy

### Deploy ke Vercel (Recommended)

1. Push code ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Deploy otomatis!

### Deploy ke Netlify

1. Push code ke GitHub
2. Connect repository di [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

## 📄 License

Free to use untuk portfolio personal.

## 💡 Tips

- Gunakan gambar real dari project kamu
- Update certificates secara berkala
- Tambahkan project terbaru kamu
- Sesuaikan warna dengan brand personal kamu
- Test di berbagai device untuk memastikan responsive

---

Dibuat dengan ❤️ menggunakan Next.js
