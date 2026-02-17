function show(id) {
  document.querySelectorAll("section").forEach(s =>
    s.classList.add("hidden")
  );
  document.getElementById(id).classList.remove("hidden");
}

// ---- PasteBin ----
function createPaste() {
  const text = document.getElementById("pasteInput").value;
  const encoded = btoa(text);
  const url = `${location.origin}${location.pathname.replace("index.html","")}paste.html#${encoded}`;
  document.getElementById("pasteLink").innerHTML =
    `<a href="${url}" target="_blank">${url}</a>`;
}

// ---- Terminal ----
const output = document.getElementById("terminalOutput");
const input = document.getElementById("terminalInput");

input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const cmd = input.value;
    input.value = "";
    output.textContent += `> ${cmd}\n`;
    try {
      const result = eval(cmd);
      if (result !== undefined)
        output.textContent += result + "\n";
    } catch (err) {
      output.textContent += err + "\n";
    }
    output.scrollTop = output.scrollHeight;
  }
});
