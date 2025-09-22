const btn_1 = document.getElementById("btn_1");
const btn_2 = document.getElementById("btn_2");
const btn_3 = document.getElementById("btn_3");

const squares = document.querySelectorAll(".square");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;
let time = 800;

const sound = new Audio("some animal noise.wav");

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("emoji");
  });

  let randomSqaure = squares[Math.floor(Math.random() * 9) + 1];
  randomSqaure.classList.add("emoji");
  hitPosition = randomSqaure.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      
      //medium learner
      sound.play();
      
      result++;
      score.textContent = result;
      hitPosition = null;
      
    }
  });
});

function moveEmoji() {
  timerId = setInterval(randomSquare, time);

  btn_1.addEventListener('click', () => {
    time = 1500
    timerId = setInterval(randomSquare, time);
     btn_2.disabled = true;
     btn_3.disabled = true;
  });

  btn_2.addEventListener('click', () => {
    time= 800
    timerId = setInterval(randomSquare, time);
     btn_1.disabled = true;
     btn_3.disabled = true;
  });

  btn_3.addEventListener('click', () => {
    time= 500
    timerId = setInterval(randomSquare, time);
     btn_1.disabled = true;
     btn_2.disabled = true;
  });
}

moveEmoji();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert(`Game Over! Your final Score Is ${result}`);
  }
}

let countDownTimerId = setInterval(countDown, 1000);