import './sass/main.scss';
import colors from './db/colors.js';
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  let changeColorId=null;
  const refs={
      startBtn: document.querySelector('[data-action="start"]'),
      stopBtn: document.querySelector('[data-action="stop"]'),
      body: document.querySelector('body'),
  };
 const{startBtn,stopBtn,body}=refs;
startBtn.addEventListener('click', changeColorOfBody);
stopBtn.addEventListener('click', stopChangeColorOfBody);

function changeColorOfBody({target}){
    target.disabled=true;
    if(startBtn.disabled=true){
        stopBtn.disabled=false;
    }
 changeColorId=setInterval(()=>{
        body.style.backgroundColor=colors[randomIntegerFromInterval(0, colors.length - 1)];;
        
    },1000)
    
};
function stopChangeColorOfBody(){
    stopBtn.disabled=false;
    if(stopBtn.disabled=true){
        startBtn.disabled=false;
    }
    clearInterval(changeColorId);
}