if (!document.body.classList.contains("dark-theme")) {
  const darkStyle = document.createElement("style");
  darkStyle.id = "dark-mode-style";
  darkStyle.textContent = `
    html, body {
      background-color: #121212 !important;
      color: #ffffff !important;
    }
    a { color: #bb86fc !important; }
    img, video { filter: brightness(0.8) !important; }
  `;
  document.head.appendChild(darkStyle);
  document.body.classList.add("dark-theme");
} else {
  const darkStyle = document.getElementById("dark-mode-style");
  if (darkStyle) darkStyle.remove();
  document.body.classList.remove("dark-theme");
}
