// JavaScript to load quotes from JSON
document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.getElementById('quote-text');

    fetch('quotes.json')
        .then(response => response.json())
        .then(data => {
            let currentQuoteIndex = 0;

            // Function to update quote
            const updateQuote = () => {
                quoteText.textContent = data.quotes[currentQuoteIndex].text;
                currentQuoteIndex = (currentQuoteIndex + 1) % data.quotes.length;
            };

            // Initial quote display
            updateQuote();

            // Change quote every 10 seconds
            setInterval(updateQuote, 10000);
        })
        .catch(error => {
            quoteText.textContent = "Failed to load quotes.";
            console.error("Error fetching quotes:", error);
        });
});
