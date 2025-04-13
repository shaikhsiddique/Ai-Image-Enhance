
# Image Enhancement App 🔍✨

This React application allows users to upload images and receive enhanced versions using a third-party AI-based image enhancement API.
### Live Link

```bash
https://venerable-lebkuchen-de9684.netlify.app/
```


## 🚀 Features

- Upload an image
- AI-enhanced output using upscale/clean APIs
- Automatic polling until enhancement is complete
- Displays final enhanced image
- Handles loading and error states

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/shaikhsiddique/Ai-Image-Enhance
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following values:

```bash
cp .env.example .env
```

Update the `.env` file with your actual API key.

### 4. Start the Development Server

```bash
npm run dev
```

Your app should now be running at `http://localhost:5173`.

---

## 📁 Project Structure

```
src/
├── Components/
│   ├── Home.jsx         # Main upload and display logic
│   └── utils/
│       └── Api.js       # Axios-based logic for image upload and polling
├── App.jsx              # Application root
└── main.jsx             # Entry point
```

---

## 🌐 Environment Variables

All sensitive values are stored in the `.env` file (not committed).

See `.env.example` for reference.

---

## 🧪 Tech Stack

- React.js
- Axios
- Vite
- Tailwind CSS

---



## ⚠️ Note

The enhanced image URLs are time-limited signed URLs and may expire after a certain period (usually 1 hour).

---

## 📝 License

MIT © 2025 Siddique Shaikh
