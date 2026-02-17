const SECRET_KEY = "ACCESS123";

const modal = document.getElementById("keyModal");
const panel = document.getElementById("adminPanel");
const secretText = document.getElementById("secretText");

document.getElementById("secretBtn").addEventListener("click", () => {
  modal.classList.remove("hidden");
});

// Ctrl + K shortcut
document.addEventListener("keydown", e => {
  if (e.ctrlKey && e.key === "k") {
    modal.classList.remove("hidden");
  }
});

function checkKey() {
  const key = document.getElementById("accessKey").value;
  if (key === SECRET_KEY) {
    modal.classList.add("hidden");
    panel.classList.remove("hidden");
    console.log("Access granted 👑");
  } else {
    alert("Nice try 😏");
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function showSecret() {
  secretText.innerHTML = "🚀 You found the hidden zone. Respect.";
}

function downloadResume() {
  alert("Resume download triggered (add real file)");
}

// URL access ?key=ACCESS123
const params = new URLSearchParams(window.location.search);
if (params.get("key") === SECRET_KEY) {
  panel.classList.remove("hidden");
}

