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


const gridDisplay = document.getElementById('grid');

function createBoard() {
    imageArray.forEach((img, index) => {
        const card = document.createElement('img');

        card.setAttribute('src', 'images/question.jpeg');
        card.setAttribute('data-id', index)
       // console.log(card);
        card.addEventListener("click", flipCard);
        gridDisplay.appendChild(card); 
    
       // console.log(card);
    });
}

createBoard();

function flipCard()
{
  //  console.log('Click');
    const cardId = this.getAttribute('data-id');
 //   console.log(cardId)
    this.setAttribute('src',imageArray[cardId].image)
    console.log(imageArray[cardId].name);
}
