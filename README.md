# 🤖 TinyLlama Chatbot Web App (Flask + Hugging Face)

A lightweight, privacy-friendly AI chatbot using the **TinyLlama-1.1B-Chat-v1.0** model, built with **Flask**, **HTML/CSS/JS**, and hosted locally or deployable via Render. This project emulates the ChatGPT experience in your browser with persistent history and an auto-launching server.

---

## 📌 Features

- 🧠 Locally loaded LLM (`TinyLlama-1.1B-Chat-v1.0`)
- 🌐 Web UI with a ChatGPT-like interface
- 📜 Chat history sidebar with persistent display
- ⏳ “Bot is thinking…” placeholder for slow responses
- ⚙️ Flask-based backend (production ready)
- 🚀 Easy deployment on [Render](https://render.com) or local
- ✅ No API key or external calls required — runs offline

---

## 📁 Folder Structure

chatbot/
│
├── app.py # Flask backend & model logic
├── requirements.txt # Python dependencies
├── Procfile # For Render deployment
├── .gitignore # Git ignore rules
│
├── templates/
│ └── index.html # Frontend layout
│
├── static/
│ ├── style.css # Custom styling
│ └── script.js # JavaScript logic

---

---

## 📦 Requirements

- Python 3.9 or above
- pip
- 8GB RAM or more (for TinyLlama on CPU)

---

## ⚙️ Installation & Running Locally

### 1. Clone the Repository

```bash(open the command prompt and run this command for project installation and setup)
git clone https://github.com/yourusername/tinyllama-flask-chatbot.git
cd tinyllama-flask-chatbot

### 2.Install Dependencies
```bash  "runn this command  to install all necessary pakages"
-pip install -r requirements.txt
-you must install the following dependencies:
 flask
 torch
 transformers
 sentencepiece

-you can also download the requirements manually:
  pip install flask transformers torch sentencepiece



### 3.RUn The App
-python app.py
  First run this app.py in command prompt within the directory path using the command "python app.py" so that it will download the tinyLlama  model and loads.
-Your browser will open automatically at:
   http://127.0.0.1:5000

