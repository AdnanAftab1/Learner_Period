var a=0;
let h="";
var b='';
var result="";
let flag=false;
const score={
  win:0,loss:0,tie:0
}
let intervalId;
document.body.addEventListener('keydown',(event)=>{
  if(event.key==='a')
    return resulter('Rock');
  if(event.key==='s')
    return resulter('Paper');
  if(event.key==='d')
    return resulter('Scissor');
  if(event.key==='w')
    return autoplayer();
  
})
mover();
function resulter(move) {
  mover();
  let k="";
  if(move==='Rock')
    {
    k="&#9994";
    if(b==='Rock')result='Tie.';
    if(b==='Scissor') result='Victory.';
    if (b==='Paper')result='Loss.';
  }
  if (move==='Scissor') {
    k="&#9996";
    if(b==='Scissor')result='Tie.';
    if(b==='Rock') result='Loss.';
    if (b==='Paper')result='Victory.';
  }
  if (move==='Paper') {
    k="&#128400";
    if(b==='Paper')result='Tie.';
    if(b==='Scissor') result='Loss.';
    if (b==='Rock')result='Victory.';
  }
  if (result=='Victory.') {
    score.win=score.win+1;
    document.querySelector(".Resulted").innerText=`You Won`;
  } else if(result==='Loss.') {
    document.querySelector(".Resulted").innerText=`You Loss`;
    score.loss=score.loss+1;
  }
  else{
    document.querySelector(".Resulted").innerText=`Tie`;
    score.tie=score.tie+1;
  }
  document.querySelector('.Player').innerText=`Win:${score.win} \t Loss:${score.loss} \t Tie:${score.tie}`;
  document.querySelector('.show').innerHTML=`You chose ${k} and ${h} was chosen by Computer`;
  localStorage.setItem('score',JSON.stringify(score));
} 
function mover()
{
  a=3*Math.random();
  a=Math.ceil(a);
  if(a==1){
    b='Rock';
    h="&#9994";
  }
  if(a==2){
    b='Paper';
    h="&#128400";
  }
  if(a==3){
    b='Scissor';
    h="&#9996";
  }
}
function autoplayer(){
  // mover();
  // flag=!flag;
  // if(flag){
  //   mover();
  //   setInterval(resulter(b), 1000);
  // }
  flag=!flag;
  if(flag){
    intervalId=setInterval(() => {
      mover();
      resulter(b);
    }, 1000);
  }
  else{
    clearInterval(intervalId);
  }
}
