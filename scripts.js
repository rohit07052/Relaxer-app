var container = document.querySelector('.container');

var text = document.querySelector('#text');

var tt = 7500;
var bt= (tt/5)*2;
var ht= tt/5;
bA()


function bA(){
  text.innerHTML ="Breath In!";
  container.className= 'container grow';

  setTimeout(()=>{
    text.innerText ='Hold';
    setTimeout(()=>{
      text.innerText = 'Breathe Out!';
      container.className = 'container shrink';
    },ht)
  }, bt)
};
setInterval(bA,tt);
