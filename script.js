function showTool(id) {
  document.querySelectorAll('.tool').forEach(t => {
    t.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}
