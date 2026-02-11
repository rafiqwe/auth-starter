# 🚀 AuthKit Pro

![npm](https://img.shields.io/npm/v/authkit-pro)
![downloads](https://img.shields.io/npm/dm/authkit-pro)
![license](https://img.shields.io/npm/l/authkit-pro)
![nextjs](https://img.shields.io/badge/Next.js-App%20Router-black)
![typescript](https://img.shields.io/badge/TypeScript-Ready-blue)

**AuthKit Pro** is a production-focused authentication starter toolkit for **Next.js App Router** that dramatically reduces setup time for authentication systems.

# Installation

```bash
npx authkit-pro init
```

It provides:

- Preconfigured OAuth providers
- Database integration
- Middleware protection
- Login UI scaffolding
- Type-safe developer experience

Designed for developers who want authentication working in minutes — not hours.

---

# ✨ Features

## 🔐 Authentication Providers

- Google OAuth
- GitHub OAuth
- Credentials (Email / Password)

## 🗄 Database

- PostgreSQL (v1 default)
- MongoDB _(coming soon)_

## 🧩 UI Components (TypeScript)

- Login Page
- Profile Component
- Sign Out Button

## 🛡 Security

- Optional route middleware protection
- Secure session handling
- Env auto configuration support

## ⚙️ Developer Experience

- Built for App Router
- Fully typed
- Modular provider system
- Easy config injection

---

# 📦 Installation

```bash
npx authkit-pro init
```

---

# 🚀 Quick Start

## 1️⃣ Environment Setup

Create `.env.local`

```env
AUTH_SECRET=your_secret

GOOGLE_CLIENT_ID=your_id
GOOGLE_CLIENT_SECRET=your_secret

GITHUB_CLIENT_ID=your_id
GITHUB_CLIENT_SECRET=your_secret

DATABASE_URL=postgres_connection_string
```

---

## 2️⃣ Configure Auth

```ts
// app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
```

---

## 4️⃣ Enable Middleware Protection

# 🧱 Components

Handles logout flow automatically.

---

# 📸 Screenshots

_(Add your UI screenshots here)_

```
/screenshots/login.png
/screenshots/profile.png
```

---

# 🎯 Roadmap

- MongoDB Adapter
- More OAuth Providers
- CLI Auth Generator
- Theme Customization
- Role-Based Access Control
- Multi-Tenant Support

---

# 🤝 Contributing

Contributions are welcome!

```bash
git clone repo
npm install
npm run dev
```

1️⃣ Fork
2️⃣ Create branch
3️⃣ Open PR

---

# 📄 License

MIT License

---

# 👨‍💻 Author

**Muhammad Rabbi**

Full-Stack Developer focused on frontend systems and developer tooling.

- Building UI systems
- Experimenting with AI tooling
- Creating production-ready dev utilities

---

# ⭐ Support

If you find this project useful:

- Star the repo
- Share with developers
- Contribute ideas

It helps the project grow ❤️

---
