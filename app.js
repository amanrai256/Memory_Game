const cardArray = [
   {
    name: "fries", 
    img: 'image/fries.png'
   },
   {
    name: 'cheeseburger',
    img: 'image/cheeseburger.jpg'
   },
   {
    name: 'hotdog',
    img: 'image/hot.jpg'
   },
   {
    name: 'ice-cream',
    img: 'image/icecream.jpg'
   },
   {
    name: 'milshake',
    img : 'image/milkshake.jpg'
   },
   {
    name: 'pizza',
    img: 'image/piza.jpg'
   },
   {
    name: "fries",
    img: 'image/fries.png'
   },
   {
    name: 'cheeseburger',
    img: 'image/cheeseburger.jpg'
   },
   {
    name: 'hotdog',
    img: 'image/hot.jpg'
   },
   {
    name: 'ice-cream',
    img: 'image/icecream.jpg'
   },
   {
    name: 'milshake',
    img : 'image/milkshake.jpg'
   },
   {
    name: 'pizza',
    img: 'image/piza.jpg'
   }

]
cardArray.sort(() => 0.5 - Math.random())
// console.log(cardArray);
const gridDisplay = document.querySelector('#grid') ;
const resultDisplay = document.querySelector('#result') ;
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];
// console.log(gridDisplay);

function createBoard() {
   for(let i=0; i < cardArray.length; i++) {
      const card =document.createElement('img');
      card.setAttribute('src', 'image/img10.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      // console.log(card)
      gridDisplay.appendChild(card);
   }
}
createBoard();

function checkMatch(){
   const cards = document.querySelectorAll('img');
   const optionOneId = cardsChosenIds[0];
   const optionTwoId = cardsChosenIds[1];
   console.log("check for match");
   // if(optionOneId == optionTwoId){
   //    cards[cardsChosenIds[0]].setAttribute('src','image/img10.jpg')
   //    cards[cardsChosenIds[1]].setAttribute('src','image/img10.jpg')
   //    alert("you have click the same image");
   // }
   if(cardsChosen[0] == cardsChosen[1]){
      alert("you found a match");
      cards[optionOneId].setAttribute('src','image/contact.jpg')
      cards[optionTwoId].setAttribute('src','image/contact.jpg')
      cards[optionOneId].removeEventListener('click',flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen)
   }
   else{
      cards[optionOneId].setAttribute('src','image/img10.png');
      cards[optionTwoId].setAttribute('src','image/img10.png');
      alert('sorry try again')
   }
   resultDisplay.innerHTML = cardsWon.length;
   cardsChosen = [];
   cardsChosenIds = [];

   if(cardsWon.length == cardArray.length/2){
      resultDisplay.innerHTML = 'Congratulations you found them all!'
   }
}

function flipCard() {
   // console.log(cardArray);
   const cardId = this.getAttribute('data-id'); 
   cardsChosen.push(cardArray[cardId].name)
   cardsChosenIds.push(cardId)
   // console.log('clicked', cardId)
   // console.log(cardsChosen);
   this.setAttribute('src', cardArray[cardId].img);
   if(cardsChosen.length === 2){
      setTimeout(checkMatch, 500);
   }
}
