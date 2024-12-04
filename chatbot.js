// Predefined responses for the chatbot
const predefinedResponses = {
    "hours": "Our hours of operation are from 9 AM to 5 PM, Monday to Friday.",
    "contact support": "You can contact support at support@example.com or call us at (123) 456-7890.",
    "services": "We offer a variety of services including web development, mobile app development, and digital marketing.",
    "location": "Our office is located at 123 Main St, Anytown, USA.",
    "products": "We have a range of products available on our website. Please check our product page for more details."
};

// Function to toggle the visibility of the chatbot
function toggleChat() {
    const chatPopup = document.getElementById("chatPopup");
    
    // Toggle display of the chat popup
    if (chatPopup.style.display === "block") {
        chatPopup.style.display = "none";
        chatPopup.style.animation = "fadeOut 0.3s"; // Optional fade out effect
    } else {
        chatPopup.style.display = "block";
        chatPopup.style.animation = "fadeIn 0.3s"; // Fade in effect
        document.getElementById("userInput").focus(); // Focus on input field
    }
}

// Function to send a message from the user
function sendMessage() {
    const userInput = document.getElementById("userInput").value.trim();
    
    if (userInput) {
        const chatBody = document.getElementById("chatBody");
        
        // Create user message element
        const userMessage = document.createElement("div");
        userMessage.classList.add("message");
        userMessage.textContent = userInput; // Display user message
        chatBody.appendChild(userMessage); // Append message to chat body
        
        document.getElementById("userInput").value = ""; // Clear input field

        // Simulate bot response after a delay
        setTimeout(() => {
            const botResponse = getBotResponse(userInput);
            const botMessage = document.createElement("div");
            botMessage.classList.add("message", "bot");
            botMessage.textContent = botResponse; // Display bot response
            chatBody.appendChild(botMessage);
            chatBody.scrollTop = chatBody.scrollHeight; // Scroll to bottom
        }, 1000);
        
        chatBody.scrollTop = chatBody.scrollHeight; // Scroll to bottom
    }
}

// Function to send a predefined message based on the clicked option
function sendPredefinedMessage(keyword) {
    const predefinedQuestionMap = {
        'hours': 'What are your hours of operation?',
        'contact support': 'How can I contact support?',
        'services': 'Where can I find your services?',
        'location': 'Where is your office located?',
        'products': 'What products do you offer?'
    };
    
    const questionText = predefinedQuestionMap[keyword];
    
    if (questionText) {
        const chatBody = document.getElementById("chatBody");

        // Create user message element for predefined question
        const userMessage = document.createElement("div");
        userMessage.classList.add("message");
        userMessage.textContent = questionText; // Display clicked question
        chatBody.appendChild(userMessage); // Append message to chat body

        // Simulate bot response after a delay
        setTimeout(() => {
            const botResponse = predefinedResponses[keyword];
            const botMessage = document.createElement("div");
            botMessage.classList.add("message", "bot");
            botMessage.textContent = botResponse; // Display corresponding response
            chatBody.appendChild(botMessage);
            chatBody.scrollTop = chatBody.scrollHeight; // Scroll to bottom
        }, 1000);
        
        chatBody.scrollTop = chatBody.scrollHeight; // Scroll to bottom
    }
}

// Function to get the bot's response based on user input
function getBotResponse(input) {
    const lowerCaseInput = input.toLowerCase();
    
    for (const keyword in predefinedResponses) {
        if (lowerCaseInput.includes(keyword)) {
            return predefinedResponses[keyword];
        }
    }
    
    return "I'm sorry, I didn't understand that. Can you please rephrase?";
}