const statusText = document.getElementById("statusText");

const messages = [
  "💪 힘내서 오늘 하루도 이겨내자!",
  "⭐ 오늘도 충분히 잘하고 있어!",
  "✨ 별돌이가 항상 응원하고 있어!",
  "🌱 작은 한 걸음도 큰 발전이야!",
  "🚀 오늘의 너를 응원할게!",
];

let currentIndex = 0;

window.setInterval(() => {
  currentIndex = (currentIndex + 1) % messages.length;
  statusText.textContent = messages[currentIndex];
}, 1800);
