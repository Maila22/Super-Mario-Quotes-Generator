var quotes = [
    "It's a-me, Mario!",
    "Thank you so much for playing my game!",
    "Wa-hoo!",
    "Oh yeah!",
    "A-wa-wa-wa-wa!",
    "Let's a-go!",
    "Here we go!",
    "Luigi!",
    "Niiiiiiiiintendo! Wahoo!",
    "Let's-a go, little guys!",
    "Don't forget to thank Mr. Miyamoto!",
    "Mamma Mia!"
];

var length = quotes.length;

function loopQuotes() {
    var rand = Math.round(Math.random() * (length - 1));
    var newQuote = quotes[rand]
    document.getElementById('demo').innerHTML = newQuote;
    var newLink = 'https://twitter.com/intent/tweet? hashtags=supermario,leartocode,nontendo,javascript&text=' + newQuote + '@FreeCodeCamp https://codepen.io/Jmateus88/full/xVawvp';
    var a = document.getElementById('twitterLink');
    a.href = newLink;
}