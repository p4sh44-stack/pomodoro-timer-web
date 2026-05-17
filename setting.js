const STORAGE_KEY = "pomodoroMinutes";

window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    document.getElementById("timerMinutes").value = saved;
  }
});

function saveSettings() {
  const input = document.getElementById("timerMinutes");
  const raw = input.value;

  if (raw === "") return;

  const minutes = parseInt(raw, 10);
  if (isNaN(minutes) || minutes < 1 || minutes > 60) return;

  localStorage.setItem(STORAGE_KEY, minutes);
  window.location.href = "index.html";
}
