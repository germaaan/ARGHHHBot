var quotes = require("./quotes.json").quotes;

function randomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

module.exports = randomQuote;
