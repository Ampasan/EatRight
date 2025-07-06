# EatRight\_Hackathon

> Transforming Health Through Innovation and AI Power

[![Last Commit](https://img.shields.io/github/last-commit/Ampasan/EatRight_Hackathon?style=flat-square)](https://github.com/Ampasan/EatRight_Hackathon)
[![Languages](https://img.shields.io/github/languages/count/Ampasan/EatRight_Hackathon?style=flat-square)]()

Built with the tools and technologies:

![JSON](https://img.shields.io/badge/JSON-000000?style=flat-square\&logo=json) ![Markdown](https://img.shields.io/badge/Markdown-000000?style=flat-square\&logo=markdown) ![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square\&logo=npm) ![Composer](https://img.shields.io/badge/Composer-885630?style=flat-square\&logo=composer) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square\&logo=javascript\&logoColor=black) ![React](https://img.shields.io/badge/React-20232a?style=flat-square\&logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square\&logo=typescript\&logoColor=white) ![Expo](https://img.shields.io/badge/Expo-000020?style=flat-square\&logo=expo\&logoColor=white) ![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat-square\&logo=php\&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square\&logo=vite\&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square\&logo=eslint) ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square\&logo=axios)

---

## Table of Contents

* [Overview](#overview)
* [Project Structure](#project-structure)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)

  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Usage](#usage)
* [Testing](#testing)
* [License](#license)

---

## Overview

EatRight is a health-focused mobile and web platform developed for a hackathon. The app empowers users to track nutrition, scan food, and get AI-generated diet recommendations. It uses advanced technologies such as OpenAI and Clarifai to analyze food images and provide nutritional breakdowns in real-time.

This is a **monorepo** containing:

* `backend/` - A Laravel 12 REST API using MongoDB, JWT auth, Cloudinary, Midtrans, and AI APIs.
* `frontend/` - A React Native app built with Expo and React Navigation for a seamless user experience.

---

## Project Structure

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

## Features

### Backend

* ✅ JWT Authentication (using `tymon/jwt-auth`)
* ☁️ Cloudinary integration for uploading food images
* 💳 Midtrans payment gateway support
* 🧠 OpenAI & Clarifai API for image recognition and diet suggestions
* 📦 MongoDB for flexible data storage

### Frontend

* 📱 Built with Expo & React Native
* 🎨 Modern UI for food scanning, chat with AI assistant, and food detail
* 📷 Camera access and gallery picker
* 🧠 AI Chatbot interaction screen
* 🍽️ Dynamic calorie and nutrition statistics with collapsible meals
* 🧾 Onboarding & OTP verification screens

---

## Tech Stack

### Backend

* **Laravel 12**
* **MongoDB**
* **JWT Auth**
* **Cloudinary**
* **Midtrans**
* **OpenAI / Clarifai API**

### Frontend

* **React Native** (with **Expo**)
* **React Navigation**
* **AsyncStorage**
* **Tailwind (via NativeWind)**
* **Expo Image Picker**
* **Axios**

---

## Getting Started

### Prerequisites

Before running the project, ensure you have the following installed:

#### General Requirements

* **Node.js** (v18+ recommended)
* **npm** or **yarn**
* **PHP** (>= 8.1)
* **Composer**
* **MongoDB** (running locally or via a cloud provider like MongoDB Atlas)

#### Laravel-Specific

* **MongoDB PHP Extension**

  The PHP MongoDB extension is required to allow Laravel to communicate with MongoDB.
  ⚠️ *Note:* XAMPP's default PHP does **not** include this extension by default.
  [For installation, please refer here](https://www.php.net/manual/en/install.pecl.php)

#### React Native / Expo

* **Expo Go** app (install from App Store or Play Store) — allows you to preview the app on a physical device wirelessly.

---

### Installation

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

> Ensure MongoDB connection config is set in `.env`

#### Frontend

```bash
cd frontend
npm install
npx expo start
```

---

### Usage

#### Image Scan Flow

1. User opens camera/gallery
2. Image sent to backend (stored in Cloudinary)
3. Clarifai/OpenAI analyzes food
4. Nutrition data returned and rendered in chat UI

#### Chatbot

* GPT-powered responses
* Adaptive prompts (based on image or manual text)

#### Payment

* Midtrans integrated for handling checkout/order flows

---

## Testing

> Testing setup still in progress

Planned:

* Feature tests (Laravel)
* Component tests (React Native + Jest)
* API endpoint tests

---

## License

[MIT](LICENSE)

---

> Made with ❤️ for the Hackathon by [Ampasan](https://github.com/Ampasan) & [Eclipse-02](https://github.com/Eclipse-02)
