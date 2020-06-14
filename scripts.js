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
// audio code...
$(document).ready(function(){
    $('[source]').on('click', function(){
        change( $(this).attr('source')  );
        button.text("PAUSE");
    });
});
function change(sourceUrl) {
    var audio = document.getElementById("player");
    source = document.getElementById("mp3_src");
    source.src = sourceUrl;
    audio.pause();
    audio.load();
    audio.play();
 }
 var button = $("#pause");
 $(button).on('click',function(){
   var identity = button.text();
   var audio = document.getElementById("player");
   if(identity ==='PAUSE'){
     button.text("PLAY");
     audio.pause();
   }
   else{
     button.text("PAUSE");
     audio.play();
   }
 });
