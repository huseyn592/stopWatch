start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
lap.addEventListener("click", lapTimer);

function startTimer() {
  timer = setInterval(() => {
    millisecond += 10;
    if (millisecond >= 1000) {
      millisecond = 0;
      second++;
    }
    if (second >= 60) {
      second = 0;
      minute++;
    }
    updateDisplay();
  }, 1);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  minute = 0;
  second = 0;
  millisecond = 0;
  updateDisplay();
  lapList.innerHTML = "";
  lapCount = 0;
}

function lapTimer() {
  lapCount++;
  const lapTime = `${pad(minute)}:${pad(second)}:${pad(Math.floor(millisecond / 10))}`;
  const lapItem = document.createElement("div");
  lapItem.textContent = ` ${lapCount}: ${lapTime}`;
  lapList.appendChild(lapItem);
  


}

function updateDisplay() {
  minuteElement.textContent = `${pad(minute)}:`;
  secondElement.textContent = `${pad(second)}:`;
  milliSecondElement.textContent = `${pad(Math.floor(millisecond / 10))}`;
}

function pad(number) {
  return String(number).padStart(2, "0");
}













