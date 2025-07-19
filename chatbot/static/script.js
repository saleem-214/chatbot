<script>
    function toggleHistory() {
        const sidebar = document.getElementById("sidebar");
        const chatContainer = document.getElementById("chat-container");

        sidebar.classList.toggle("hidden");
        chatContainer.classList.toggle("shrinked");
    }

    function sendMessage() {
        const inputField = document.getElementById("user-input");
        const message = inputField.value.trim();
        if (!message) return;

        const chatBox = document.getElementById("chat-box");

        // ✅ Show user message and temporary bot thinking line
        chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
        chatBox.innerHTML += `<p id="bot-thinking"><strong>Bot:</strong> ⏳ Bot is thinking...</p>`;
        chatBox.scrollTop = chatBox.scrollHeight;

        fetch("/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: message })
        })
        .then(res => res.json())
        .then(data => {
            // ✅ Replace the "Bot is thinking..." placeholder
            const thinkingLine = document.getElementById("bot-thinking");
            thinkingLine.innerHTML = `<strong>Bot:</strong> ${data.response}`;
            chatBox.scrollTop = chatBox.scrollHeight;

            const historyList = document.getElementById("chat-history");
            historyList.innerHTML = "";
            data.history.forEach((entry, index) => {
                const li = document.createElement("li");
                li.textContent = entry.user.length > 30 ? entry.user.slice(0, 30) + "..." : entry.user;
                li.onclick = () => displayHistoryEntry(data.history[index]);
                historyList.appendChild(li);
            });

            if (data.exit) {
                inputField.disabled = true;
                document.getElementById("send").disabled = true;
            } else {
                inputField.value = "";
            }
        });
    }

    function displayHistoryEntry(entry) {
        const chatBox = document.getElementById("chat-box");
        chatBox.innerHTML = `
            <p><strong>You:</strong> ${entry.user}</p>
            <p><strong>Bot:</strong> ${entry.bot}</p>
        `;
    }

    function exitChat() {
        fetch("/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: "exit" })
        }).then(res => res.json()).then(data => {
            const chatBox = document.getElementById("chat-box");
            chatBox.innerHTML += `<p><strong>Bot:</strong> ${data.response}</p>`;
            document.getElementById("user-input").disabled = true;
            document.getElementById("send").disabled = true;
        });
    }

    // ✅ Optional: allow Enter key to submit message
    document.addEventListener("DOMContentLoaded", function () {
        const inputField = document.getElementById("user-input");
        inputField.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                sendMessage();
            }
        });
    });
</script>
