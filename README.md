# ✦ Quote Gallery

A clean, responsive quote browsing app built with **React + Vite**, fetching live data from the [FreeAPI](https://freeapi.app) public quotes endpoint.

---

## 📸 Preview

> A grid of elegant quote cards, each showing the quote text, author name, and category badge — with a smooth hover lift effect.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/quote-gallery.git
cd quote-gallery

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
quote-gallery/
├── public/
├── src/
│   ├── App.jsx        # Main component — fetches & renders quotes
│   ├── App.css        # All styles for the app
│   └── main.jsx       # React entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 🔌 API

**Endpoint:** `GET https://api.freeapi.app/api/v1/public/quotes`

Each quote object contains:

| Field      | Type   | Description              |
|------------|--------|--------------------------|
| `id`       | number | Unique quote ID          |
| `quote`    | string | The quote text           |
| `author`   | string | Author of the quote      |
| `category` | string | Category/tag of the quote|

---

## ✨ Features

- 📡 Fetches live quotes from a public REST API
- 🃏 Responsive card grid layout (auto-fill columns)
- 🎨 Purple-accented design with hover animations
- ⚠️ Handles loading, error, and empty states gracefully
- 🔁 Flexible data parsing — works even if the API response shape changes

---

## 🛠️ Built With

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- Plain CSS (no external UI library)
- [FreeAPI](https://freeapi.app) — public quotes API

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).