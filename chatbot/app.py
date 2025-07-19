from flask import Flask, render_template, request, jsonify
from transformers import AutoTokenizer, AutoModelForCausalLM
import torch
import os
import threading
import webbrowser
import time

app = Flask(__name__)

# Load the model (CPU-friendly)
model_id = "TinyLlama/TinyLlama-1.1B-Chat-v1.0"
tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(model_id, torch_dtype=torch.float32).to("cpu")

chat_history = []

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_input = data.get("message", "")

    if user_input.lower() in ["exit", "quit"]:
        return jsonify({"response": "Goodbye!", "exit": True})

    prompt = f"<|user|>\n{user_input}\n<|assistant|>\n"
    inputs = tokenizer(prompt, return_tensors="pt").to("cpu")

    with torch.no_grad():
        output = model.generate(
            **inputs,
            max_new_tokens=200,
            temperature=0.7,
            top_k=50,
            top_p=0.9,
            pad_token_id=tokenizer.eos_token_id,
            do_sample=True
        )

    full_response = tokenizer.decode(output[0], skip_special_tokens=True)
    bot_reply = full_response.split("<|assistant|>")[-1].strip()

    chat_history.append({"user": user_input, "bot": bot_reply})
    return jsonify({"response": bot_reply, "exit": False, "history": chat_history})


def open_browser():
    """Auto-open browser only for local testing."""
    time.sleep(1)
    if os.environ.get("FLASK_ENV") != "production":
        webbrowser.open(f"http://127.0.0.1:{PORT}")

if __name__ == "__main__":
    PORT = int(os.environ.get("PORT", 5000))
    threading.Thread(target=open_browser).start()
    app.run(host="0.0.0.0", port=PORT)
