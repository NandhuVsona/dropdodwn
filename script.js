
const bg = document.getElementById('center');
const box = document.getElementById('boxs');
const toogle = document.getElementById('circle')
const lefts=document.getElementById('left');
const rights = document.getElementById('right')
box.addEventListener('click', () => {
  if (bg.style.backgroundColor == "white" ) {
    bg.style.backgroundColor = 'black';
    lefts.style.backgroundColor = 'black';
    rights.style.backgroundColor = 'black';
    bg.style.color='white';
    rights.style.color='white';
    toogle.classList.toggle('show');
    box.style.backgroundColor = 'white';
    toogle.style.backgroundColor = 'black';
  }else{toogle.classList.toggle('show');
    bg.style.backgroundColor = 'white';
    bg.style.color='black';
    box.style.backgroundColor = 'black';
    toogle.style.backgroundColor = 'white';
    lefts.style.backgroundColor = 'white';
    rights.style.backgroundColor = 'white';
  }

})

//------------------

let btns = document.getElementById('button');
btns.addEventListener('click',funs);
function funs(){
  const audio = new Audio();
audio.src="audio.mp3";
  audio.play();
  
  btns.style.visibility='hidden'
let counter = document.getElementById('htag');
let Followers = document.getElementById('ptag');
let cis = document.getElementById('container')
cis.style.visibility='visible';




let count =1
setInterval(()=>{
  if(count<101){
  result=count++;
  counter.innerText=result+'%';}
},180);

setTimeout(()=>{
  let start = document.getElementById('start');
  let end = document.getElementById('end');
  start.style.display='block';
  end.style.display='none'


  Followers.innerHTML="Almost Done..."
},18800)

}

