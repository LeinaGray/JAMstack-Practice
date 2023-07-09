
//Array of happy quotes
const quotes = [
    "...and you are awesome!",
    "...and you've got this!",
    "...have a wonderful day!",
    "...and so is this puppy!🐶"
  ];

//randomly choose one from quotes
var random_quote = quotes[Math.floor(Math.random() * Math.floor(quotes.length))];

//append random quote to .vibe class
document.querySelector('.vibe').append(random_quote);