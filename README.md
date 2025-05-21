# 🔗 URL Shortener Client (React + Bootstrap)

This is a modern frontend client for a URL shortener service, built with React and styled using Bootstrap.

---

## ✨ Features

- ✅ Submit long URLs to generate shortened versions.
- 🔗 Display shortened URLs immediately after submission.
- ⚠️ Show error messages for invalid URLs.
- 📈 View the Top 100 most accessed short URLs, sorted by click count.
- 🎨 Beautiful responsive design with Bootstrap.

---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js (v16+ recommended)
- Backend Rails API running on http://localhost:3000
- (Optional) yarn

---

## ⚙️ Project Setup & Run

### 🔹 Using Yarn

```bash
git clone https://github.com/sauravgr458/url-shortener-client.git
cd url-shortener-client
yarn install
yarn start
```

### 🔹 Using Yarn
```bash
git clone https://github.com/sauravgr458/url-shortener-client.git
cd url-shortener-client
npm install
npm start
```

### API Endpoints Used

These endpoints are expected to be exposed by the backend:
- POST /short_urls.json → Accepts a long URL and returns a shortened code.
- GET /short_urls.json → Returns the top 100 most accessed short URLs.

Ensure CORS is enabled on the backend (Rails) to allow requests from this client.
