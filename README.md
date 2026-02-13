# 🚀 AuthKit Pro

![npm](https://img.shields.io/npm/v/authkit-pro)
![downloads](https://img.shields.io/npm/dm/authkit-pro)
![license](https://img.shields.io/npm/l/authkit-pro)
![nextjs](https://img.shields.io/badge/Next.js-App%20Router-black)
![typescript](https://img.shields.io/badge/TypeScript-Ready-blue)

**AuthKit Pro** is a production-ready authentication CLI for **Next.js App Router** that scaffolds a complete authentication system in minutes — not hours.

## It generates everything you need:

- Preconfigured OAuth providers
- Database integration (Prisma or MongoDB)
- Middleware protection
- Login UI scaffolding
- Type-safe developer experience

# 📦 Installation

```bash
npx authkit-pro init
```

Answer a few prompts and your authentication system is ready.

# ✨ What It Generates

## 🔐 Authentication Providers

- Google OAuth
- GitHub OAuth
- Facebook OAuth
- Credentials (Email / Password)

## 🗄 Database

Choose your database during setup:

- PostgreSQL (Prisma ORM)
- MongoDB (Mongoose)
- No database (OAuth only)

## 🧩 UI Components (TypeScript)

- Login Page
- Profile Component
- Sign Out Button

Clean, minimal, production-ready UI.

## 🛡 Security Features

- Optional route middleware protection
- Secure JWT session handling
- Environment variable auto-generation
- Type-safe configuration

## ⚙️ Developer Experience

- Built specifically for Next.js App Router
- Fully typed
- Modular provider system
- Config injection support
- Clean folder structure
- CLI-based setup flow

---

### 🚀 Quick Start

After running:

```bash
npx authkit-pro init
```

## 1️⃣ Fill Environment Variables

A .env file is generated automatically.

```env
AUTH_SECRET=your_secret

GOOGLE_CLIENT_ID=your_id
GOOGLE_CLIENT_SECRET=your_secret

GITHUB_CLIENT_ID=your_id
GITHUB_CLIENT_SECRET=your_secret

DATABASE_URL=postgres_connection_string or mongodb_connection_string
```

---

## 2️⃣ Auth Route Setup

AuthKit generates your auth configuration automatically.

```ts
// app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
```

---

## 4️⃣ Optional Middleware Protection

If you choose middleware protection during setup, it will automatically generate:

# 🧱 Generated Components

AuthKit automatically scaffolds:

Auto generated `Profile` component in `@/components/auth/Profile`.
Auto generated `SignOutButton` component in `@/components/auth/SignOutButton`.
Auto generated `Login` component in `@/app/Login/page.tsx`.

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

- Scaleable Backend Architecture and Database Integration
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
