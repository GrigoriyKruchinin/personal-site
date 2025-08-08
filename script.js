function toggleTheme() {
  document.body.dataset.theme =
    document.body.dataset.theme === "dark" ? "light" : "dark";
}

document.body.dataset.theme = "light"; // стартовая тема
