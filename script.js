
function toggleChatbot() {
    const chatbot = document.getElementById("chatbot");
    chatbot.style.display = chatbot.style.display === "none" ? "block" : "none";
}

function handleFAQClick(question) {
    // Display selected FAQ question as a user message
    addMessageToChat(question, "user");

    // Generate bot response based on the FAQ question
    generateBotResponse(question);
}

function addMessageToChat(message, sender) {
    const messagesContainer = document.getElementById("messages");

    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.textContent = message;

    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateBotResponse(question) {
    let botResponse;

    // Predefined responses for FAQ questions
    switch (question) {
        case "What are your hours of operation?":
            botResponse = "We're open from 8 AM to 4 PM, Monday to Friday.";
            break;
        case "How can I contact customer support?":
            botResponse = "Our developers are proficient in HTML, CSS, JavaScript, TypeScript, C, Flutter & Dart.";
            break;
        case "Where is your office located?":
            botResponse = "Our office is located at 19 Ameshoff St, Braamfontein, Johannesburg.";
            break;
        case "What services do you offer?":
            botResponse = "We offer a variety of services including consulting, support, and software development.";
            break;
        default:
            botResponse = "I'm here to help! Feel free to ask any questions from the options above.";
            break;
    }

    // Display bot message after a short delay
    setTimeout(() => addMessageToChat(botResponse, "bot"), 500);
}

