import "./quote.modular.css";

const Quote = () => {
  const quotesList = [
    {
      line: "Food is the ingredient that binds us together.",
      author: "Chirag Kapil",
      id: 1,
    },
    {
      line: "Laughter is brightest in the place where food is.",
      author: "Irish Proverb",
      id: 2,
    },
    {
      line: "You do not need a silver fork to eat good food.",
      author: "Paul Prudhomme",
      id: 3,
    },
    {
      line: "People who love to eat are always the best people.",
      author: "Julia Child",
      id: 4,
    },
    {
      line: "Cooking is like love. It should be entered into with abandon or not at all.",
      author: "Harriet Van Horne",
      id: 5,
    },
    {
      line: "Let food be thy medicine, and medicine be thy food.",
      author: "Hippocrates",
      id: 6,
    },
    {
      line: "The belly rules the mind.",
      author: "Spanish Proverb",
      id: 7,
    },
    {
      line: "To eat is a necessity, but to eat intelligently is an art.",
      author: "Francois de La Rochefoucauld",
      id: 8,
    },
    {
      line: "Food brings us together, and it is often the center of our celebration.",
      author: "Anonymous",
      id: 9,
    },
    {
      line: "A balanced diet is a cookie in each hand.",
      author: "Anonymous",
      id: 10,
    },
    {
      line: "Life is too short for self-hatred and celery sticks.",
      author: "Julia Child",
      id: 11,
    },
    {
      line: "Food is not just fuel; it's information. It talks to your DNA and tells it what to do.",
      author: "Dr. Mark Hyman",
      id: 12,
    },
    {
      line: "There is no sincerer love than the love of food.",
      author: "George Bernard Shaw",
      id: 13,
    },
    {
      line: "One cannot think well, love well, sleep well if one has not dined well.",
      author: "Virginia Woolf",
      id: 14,
    },
    {
      line: "The only thing I like better than talking about food is eating.",
      author: "John Walters",
      id: 15,
    },
    {
      line: "Good food is the foundation of genuine happiness.",
      author: "Auguste Escoffier",
      id: 16,
    },
    {
      line: "There is no greater pleasure than to eat and drink with friends.",
      author: "Anonymous",
      id: 17,
    },
    {
      line: "Eat food, not much, mostly plants.",
      author: "Michael Pollan",
      id: 18,
    },
    {
      line: "Food is symbolic of love when words are inadequate.",
      author: "Alan D. Wolfelt",
      id: 19,
    },
    {
      line: "Eating is a necessity, but cooking is an art.",
      author: "Anonymous",
      id: 20,
    },
    {
      line: "In France, cooking is a serious art form and a national sport.",
      author: "Julia Child",
      id: 21,
    },
    {
      line: "The secret of happiness is to eat what you like and let the food fight it out inside.",
      author: "Mark Twain",
      id: 22,
    },
    {
      line: "Food is the most primitive form of comfort.",
      author: "Sheila Graham",
      id: 23,
    },
    {
      line: "Cooking is an expression of who you are.",
      author: "Anonymous",
      id: 24,
    },
    {
      line: "Every time you eat is an opportunity to nourish your body.",
      author: "Anonymous",
      id: 25,
    },
  ];
  
  return (
    <>
      {quotesList.map((data) => {
        return(
            <div className="quote-card" key={data.id}>
          <h1>{data.line}</h1>
          <p>{data.author}</p>
        </div>
        )
        
      })}
    </>
  );
};

export default Quote;
