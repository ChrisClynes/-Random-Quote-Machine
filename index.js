const quoteData = [
    {author: "John Mayer", quote: "Life is like a box of crayons."}, 
    {author: "Nelson Mandela", quote: "The greatest glory in living lies not in never falling, but in rising every time we fall."}, 
    {author: "Walt Disney", quote: "The way to get started is to quit talking and begin doing."}, 
    {author: "James Cameron", quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."}, 
    {author: "Aristotle", quote: "It is during our darkest moments that we must focus to see the light."}, 
    {author: "Benjamin Franklin", quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn."}, 
    {author: "Steve Jobs", quote: "Your time is limited, so don't waste it living someone else\'s life. Don't be trapped by dogma – which is living with the results of other people's thinking."}, 
    {author: "John Lennon", quote: "Life is what happens when you're busy making other plans"}, 
    {author: "Ralph Waldo Emerson", quote: "Do not go where the path may lead, go instead where there is no path and leave a trail."}
  ];
  
  const colorArr = [
    "#32064A",
    "#E56B1F",
    "#FCD02C",
    "#E42C6A",
    "#292930",
    "#F4ABAA",
    "#28559A",
    "#CAE7DF",
    "#3778C2"
    ];
  
  let quoteArrLen = quoteData.length; 
  let colorArrLen = colorArr.length;
  
  function randomBackground(){
    let getRandomColor = Math.floor(Math.random()*colorArrLen);
    document.body.style.background = colorArr[getRandomColor];
    document.body.style.color = colorArr[getRandomColor];
  }
  
  function generateQuoteData(){
    let getRandom = Math.floor(Math.random()*quoteArrLen);
    let tweetLink =  'https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&text=' +
        encodeURIComponent('"' + quoteData[getRandom].quote + '" -' + quoteData[getRandom].author);// converts spaces to %20 for URI link.
    
    document.getElementById("text").innerText = '"' + quoteData[getRandom].quote + '"'; //this sets value of element
    document.getElementById("author").innerText = quoteData[getRandom].author;
    document.getElementById("tweet-quote").href = tweetLink;
    console.log("Generated Quote")
  }
  
  function buttonPress() {
    generateQuoteData();
    randomBackground();
  }
  
  //call to run immediately on page load
  generateQuoteData();
  randomBackground();