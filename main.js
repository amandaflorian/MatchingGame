import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css'
import './src/styles/css/basic.css';



import BoardGame from './src/objects/BoardGame';


const divRoot = document.querySelector("#root");
const htmlBoardGame = BoardGame(6);



divRoot.insertAdjacentHTML("beforeend", htmlBoardGame);



