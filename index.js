const STORAGE_KEY = "pomodoroMinutes";

function getSavedSeconds() {
  return (parseInt(localStorage.getItem(STORAGE_KEY), 10) || 25) * 60;
}

let remainingSeconds = getSavedSeconds();
let intervalId = null;

window.addEventListener("DOMContentLoaded", updateDisplay);

function formatTime(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function updateDisplay() {
  document.querySelector(".timer").textContent = formatTime(remainingSeconds);
}

function start() {
  if (intervalId !== null) return;
  intervalId = setInterval(() => {
    if (remainingSeconds <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      return;
    }
    remainingSeconds--;
    updateDisplay();
  }, 1000);
}

function stop() {
  clearInterval(intervalId);
  intervalId = null;
}

function reset() {
  stop();
  remainingSeconds = getSavedSeconds();
  updateDisplay();
}
