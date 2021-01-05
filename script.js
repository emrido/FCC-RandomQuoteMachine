const textElement = document.getElementById("text");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");
const tweetQuote = document.getElementById("tweet-quote");
const URL =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc";

const getRandomNumber = () => Math.round(Math.random() * 101);
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const setQuote = (quotes, index) => {
  const { quote, author } = quotes[index];
  const fadeInAnimation = [
    [{ opacity: 0 }, { opacity: 1 }],
    {
      duration: 1500,
      easing: "ease",
    },
  ];

  textElement.innerText = quote;
  authorElement.innerText = author;

  textElement.animate(...fadeInAnimation);
  authorElement.animate(...fadeInAnimation);

  tweetQuote.innerHTML = `<a href="https://twitter.com/intent/tweet?text=${quote}%0A-${author}%0A&hashtags=quote"><i class="fab fa-twitter"></i></a>`;
};

fetch(URL)
  .then((res) => res.json())
  .then(({ quotes }) => {
    let randomNumber = getRandomNumber();
    setQuote(quotes, randomNumber);

    newQuoteButton.addEventListener("click", () => {
      setQuote(quotes, getRandomNumber());
      // document.body.style.backgroundColor = getRandomColor();
      // document.body.style.background = `linear-gradient(-45deg, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
    });
  });
