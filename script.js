const imageArray = [
  {
    name: "bird",
    image: "images/bird.png",
  },
  {
    name: "bunny",
    image: "images/bunny.png",
  },
  {
    name: "fox",
    image: "images/fox.png",
  },
  {
    name: "lion",
    image: "images/lion.png",
  },
  {
    name: "mouse",
    image: "images/mouse.png",
  },
  {
    name: "owl",
    image: "images/owl.png",
  },
  {
    name: "bird",
    image: "images/bird.png",
  },
  {
    name: "bunny",
    image: "images/bunny.png",
  },
  {
    name: "fox",
    image: "images/fox.png",
  },
  {
    name: "lion",
    image: "images/lion.png",
  },
  {
    name: "mouse",
    image: "images/mouse.png",
  },
  {
    name: "owl",
    image: "images/owl.png",
  },
];

imageArray.sort(() => 0.5 - Math.random());

//console.log(imageArray);

let cardChoosen = [];

const gridDisplay = document.getElementById("grid");

function createBoard() {
  imageArray.forEach((img, index) => {
    const card = document.createElement("img");

    card.setAttribute("src", "images/question.jpeg");
    card.setAttribute("data-id", index);
    // console.log(card);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);

     
  });
}

createBoard();

function flipCard() {
  //  console.log('Click');
  const cardId = this.getAttribute("data-id");
  cardChoosen.push({...imageArray[cardId], id : cardId});
  //   console.log(cardId)
  this.setAttribute("src", imageArray[cardId].image);
  // console.log(imageArray[cardId].name);
   console.log(cardChoosen)

  if (cardChoosen.length === 2) {
    //checkMatch();
    setTimeout(checkMatch,500);
  }
}

function checkMatch() {
  const optionOne = cardChoosen[0];
  const optionTwo = cardChoosen[1]
  
  const cards = document.querySelectorAll('img');
  // console.log('optionOne', optionOne.name);
  // console.log('optionTwo',optionTwo)
 
  //chceck if two card matching
  if (optionOne.name === optionTwo.name) {
    cards[optionOne.id].setAttribute('src', 'images/tick.png');
    cards[optionTwo.id].setAttribute("src", "images/tick.png");

     cards[optionOne.id].removeEventListener("click", flipCard);
     cards[optionTwo.id].removeEventListener("click", flipCard);
  }
  else {
    cards[optionOne.id].setAttribute("src", "images/question.jpeg");
    cards[optionTwo.id].setAttribute("src", "images/question.jpeg");

     
     

  }
  cardChoosen = [];
}


