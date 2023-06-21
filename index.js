let seconds = 0;      // seconds
let centiseconds = 0; // 1/100 seconds
let minutes = 0;
let hours = 0;
let spanCentiseconds =document.getElementById('centiseconds');
let spanSeconds = document.getElementById('seconds');
let spanMinutes = document.getElementById('minutes');
let spanHours = document.getElementById('hours');
let buttonStart = document.getElementById('button-start');
let buttonStop = document.getElementById('button-stop');
let buttonReset = document.getElementById('button-reset');
let interval;  // 1/100 초씩 자동실행되는 곳에 사용할 변수
 
// 시작버튼 누를시 실행함수
buttonStart.onclick = function() {
  if(buttonStart.disabled == false) {     // start버튼이 활성화 되었다면(여러번 실행되는 것 방지)
    interval = setInterval(startTimer, 10); // startTimer함수를 10/1000초마다 실행하겠다.
    buttonStart.disabled = true;      // start버튼을 비활성화 하기
  }
}
 
// 정지버튼을 누를시 실행함수
buttonStop.onclick = function() {
  clearInterval(interval); // 1/100초마다 실행되는 함수 멈춤
  buttonStart.disabled = false; // start 버튼을 활성화 하기
}
 
// 재시작 버튼 누를시 실행함수
buttonReset.onclick = function() {
  buttonStart.disabled == false;  // start 버튼을 활성화하기
  clearInterval(interval); // 1/100초마다 실행되는 함수 멈춤
  hours = 0;
  seconds = 0;
  minutes = 0;
  centiseconds = 0;
  spanCentiseconds.innerText = '00';
  spanSeconds.innerText = '00';
  spanMinutes.innerText = '00';
  spanHours.innerText = '00';
}
 
function startTimer() { // 1초, 2초......시간 계산하는 함수
  centiseconds++;  // 1증가 // centiseconds = centiseconds + 1
  if(centiseconds <= 9) spanCentiseconds.innerText = '0'+centiseconds;
  else spanCentiseconds.innerText = centiseconds;

  if(centiseconds > 99) {
    seconds++; // 1초 상승
    if(seconds <= 9) spanSeconds.innerText = '0' + seconds;
    else spanSeconds.innerText = seconds;
    centiseconds = 0;
    spanCentiseconds.innerText = '00';
  }
  if(seconds > 59){
    minutes++;
    if (minutes <= 9) spanMinutes.innerText = '0' + minutes;
    else spanMinutes.innerText = minutes;
    seconds = 0
    spanSeconds.innerText = '00';
  }

  if(minutes > 59){
    hours++;
    if (hours <= 9) spanHours.innerText = '0' + hours;
    else spanHours.innerText = hours;
    minutes = 0
    spanMinutes.innerText = '00';
  }
}
