# 🤖 TinyLlama Chatbot Web App (Flask + Hugging Face)

A lightweight, privacy-friendly AI chatbot using the **TinyLlama-1.1B-Chat-v1.0** model, built with **Flask**, **HTML/CSS/JS**, and hosted locally or deployable via Render. This project emulates the ChatGPT experience in your browser with persistent history and an auto-launching server.

---

## 📌 Features

- 🧠 Runs locally with **TinyLlama-1.1B-Chat-v1.0**
- 🌐 Web UI styled like ChatGPT
- 📜 Persistent chat history sidebar
- ⏳ “Bot is thinking…” loading indicator
- ⚙️ Flask-powered backend (production-ready)
- 🚀 Deployable on Render or run locally
- ✅ No API key or internet required after model is downloaded

---

## 📁 Folder Structure

chatbot/
│
├── app.py # Flask backend with model loading
├── requirements.txt # Python dependencies
├── Procfile # Render deployment instructions
├── .gitignore # Files to ignore in Git
│
├── templates/
│ └── index.html # Frontend UI (HTML)
│
└── static/
├── style.css # Custom styling
└── script.js # JavaScript chat logic

---

## 📦 Requirements

- Python 3.9 or above
- pip
- 8GB RAM or more (recommended for running TinyLlama on CPU)

---

## ⚙️ Local Setup Instructions

### 🔹 1. Clone the Repository

Open your terminal or command prompt and run:

```bash
git clone https://github.com/saleem-214/chatbot.git
cd tinyllama-flask-chatbot

🔹 2. Install Dependencies
Install all required packages using:
-pip install -r requirements.txt
Or manually install each package:
-pip install flask transformers torch sentencepiece

🔹 3. Run the App
Start the Flask server by running:
-python app.py
The model will automatically download the first time and load into memory.
Once loaded, your browser should open automatically at:
-http://127.0.0.1:5000
