let s = document.querySelector(".seconds");
let m = document.querySelector(".minutes");
let h = document.querySelector(".hours");

let [seconds , minutes , hours] = [0 ,0 ,0];

function timeIng(){
  seconds++;

  if(seconds == 60){
    seconds = 0;
    minutes++ ;
    

    if(minutes == 60){
      hours++;
      minutes = 0;
    }
  }

  seconds < 10 ? s.innerHTML ="0" + seconds: s.innerHTML =seconds;

  minutes < 10 ? m.innerHTML ="0" +minutes: m.innerHTML=minutes;

  hours < 10 ? h.innerHTML ="0" +hours: h.innerHTML=hours;
}

let timer = null;

function watchStart(){

  if (timer !== null){
    clearInterval(timer);
  }
  timer= setInterval(timeIng ,1000);
}

function watchStop() {
  clearInterval(timer);

}

function watchReset() {

  seconds = 0 ;
  minutes = 0;
  hours = 0;

  clearInterval(timer);

  s.innerHTML ="0" + seconds;

  m.innerHTML ="0" +minutes;

  h.innerHTML ="0" +hours;

}