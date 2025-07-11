# EatRight - Hackathon

<p align="center">
 <img width="920" height="480" alt="Cover" src="https://github.com/user-attachments/assets/6bf1a79b-5132-4f7d-9cd9-562b71208de4" />
</p>

> Mengubah Pola Makan Sehat dengan Inovasi dan Kekuatan AI

[![Last Commit](https://img.shields.io/github/last-commit/Ampasan/EatRight_Hackathon?style=flat-square)](https://github.com/Ampasan/EatRight_Hackathon)
[![Languages](https://img.shields.io/github/languages/count/Ampasan/EatRight_Hackathon?style=flat-square)]()

Dibangun dengan teknologi modern:

![JSON](https://img.shields.io/badge/JSON-000000?style=flat-square\&logo=json) ![Markdown](https://img.shields.io/badge/Markdown-000000?style=flat-square\&logo=markdown) ![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square\&logo=npm) ![Composer](https://img.shields.io/badge/Composer-885630?style=flat-square\&logo=composer) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square\&logo=javascript\&logoColor=white) ![React](https://img.shields.io/badge/React-20232a?style=flat-square\&logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square\&logo=typescript\&logoColor=white) ![Expo](https://img.shields.io/badge/Expo-000020?style=flat-square\&logo=expo\&logoColor=white) ![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat-square\&logo=php\&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square\&logo=vite\&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square\&logo=eslint) ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square\&logo=axios)

---

## Daftar Isi

* [Ringkasan](#ringkasan)
* [Struktur Proyek](#struktur-proyek)
* [Fitur](#fitur)
* [Teknologi yang Digunakan](#teknologi-yang-digunakan)
* [Memulai Proyek](#memulai-proyek)

  * [Prasyarat](#prasyarat)
  * [Instalasi](#instalasi)
  * [Penggunaan](#penggunaan)
* [Pengujian](#pengujian)
* [Referensi Tambahan](#referensi-tambahan)
* [Lisensi](#lisensi)

---

## 🧭 Ringkasan

EatRight adalah aplikasi mobile dan web yang dirancang untuk membantu pengguna mengelola asupan nutrisi mereka, memindai makanan, dan mendapatkan rekomendasi diet berbasis AI. Teknologi seperti OpenAI dan Clarifai digunakan untuk mengenali makanan dari gambar dan memberikan estimasi nutrisi secara langsung.

Repositori ini merupakan monorepo yang terdiri dari:

* `backend/` - REST API Laravel 12 yang menggunakan MongoDB, JWT, Cloudinary, Midtrans, dan integrasi AI.
* `frontend/` - Aplikasi React Native menggunakan Expo dan React Navigation.

---

## 🗂 Struktur Proyek

```bash
EatRight_Hackathon/
├── backend/
│   ├── app/
│   │   ├── Http/
│   │   ├── Models/
│   │   ├── Providers/
│   │   └── Services/
│   ├── config/
│   ├── routes/
│   └── ...
├── frontend/
│   ├── app/
│   │   ├── (auth)/
│   │   ├── (tabs)/
│   ├── assets/
│   ├── components/
│   └── ...
```

---

## ✨ Fitur

### Backend

* ✅ Autentikasi JWT (`tymon/jwt-auth`)
* ☁️ Penyimpanan gambar makanan menggunakan Cloudinary
* 💳 Integrasi pembayaran Midtrans
* 🧠 Analisis gambar makanan menggunakan API OpenAI & Clarifai
* 📦 Basis data MongoDB

### Frontend

* 📱 Dibangun dengan Expo dan React Native
* 🎨 UI modern untuk pemindaian makanan, chatbot AI, dan detail makanan
* 📷 Akses kamera dan galeri
* 🧠 Chatbot interaktif berbasis GPT
* 🍽️ Statistik nutrisi dinamis dengan tampilan harian dan mingguan
* 🔐 Layar onboarding & verifikasi OTP

---

## 🧰 Teknologi yang Digunakan

### Backend

* **Laravel 12**
* **MongoDB**
* **JWT Auth**
* **Cloudinary**
* **Midtrans**
* **OpenAI / Clarifai API**

### Frontend

* **React Native** (Expo)
* **React Navigation**
* **AsyncStorage**
* **Tailwind (via NativeWind)**
* **Expo Image Picker**
* **Axios**

---

## 🚀 Memulai Proyek

### 🔧 Prasyarat

Sebelum menjalankan proyek, pastikan Anda memiliki:

#### Umum

* **Node.js** (disarankan versi 18+)
* **npm** atau **yarn**
* **PHP** (>= 8.1)
* **Composer**
* **MongoDB** (lokal atau MongoDB Atlas)

#### Backend (Laravel)

* **Ekstensi PHP MongoDB**

  > *XAMPP secara default tidak menyertakan ekstensi ini, jadi Anda perlu memasangnya secara manual.*
  > [Untuk instalasi, silakan merujuk ke dokumentasi resmi di sini](https://www.php.net/manual/en/install.pecl.php)

#### Frontend (React Native / Expo)

* **Expo Go** (diunduh dari App Store atau Play Store)

  > Memungkinkan Anda menjalankan aplikasi di perangkat fisik secara nirkabel.

---

### 📦 Instalasi

#### Backend

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan jwt:secret
php artisan migrate
php artisan serve
```

> Pastikan konfigurasi MongoDB telah diatur di file `.env`

#### Frontend

```bash
cd frontend
npm install
npx expo start
```

---

### 📲 Penggunaan

#### Alur Pemindaian Gambar

1. Pengguna membuka kamera atau galeri
2. Gambar dikirim ke backend dan disimpan di Cloudinary
3. Clarifai/OpenAI menganalisis gambar
4. Data nutrisi dikembalikan dan ditampilkan melalui UI chatbot

#### Chatbot

* Didukung GPT (OpenAI)
* Respon adaptif berdasarkan gambar atau input teks

#### Pembayaran

* Menggunakan Midtrans untuk alur checkout atau transaksi dalam aplikasi

---

## 🧪 Pengujian

> Konfigurasi pengujian masih dalam pengembangan

Direncanakan:

* Pengujian fitur Laravel
* Pengujian komponen React Native menggunakan Jest
* Pengujian endpoint API

---

## 📎 Referensi Tambahan

- 🎨 [Figma Prototipe UI](https://www.figma.com/design/G8D1s6pxzb1rHrCtMsKNn9/Untitled?node-id=0-1&t=NowEeXeZbKuVEy9T-1)
- 📩 [Prototipe APK](https://drive.google.com/drive/folders/16V6m_KIWlP7xxASGK99IDfd3V2c86eXB)
- 🗃️ [Rancangan Database (ERD/Schema)](https://docs.google.com/document/d/13QZXYRamX24mJpg1sGRinFQaoS18k9V5/edit?usp=sharing&ouid=117854055119066232629&rtpof=true&sd=true)

---

## 📄 Lisensi

Proyek ini menggunakan lisensi [MIT](LICENSE).
