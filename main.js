import CardGame from "./src/components/CardGame";


const divRoot = document.querySelector("#root");
const htmlCardGame = CardGame();

console.log(htmlCardGame);
divRoot.insertAdjacentHTML("beforeend", htmlCardGame);



