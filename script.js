function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
}

document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("active");
  });
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  const text = `Саламатсызбы!%0AАтым: ${name}%0AТелефон: ${phone}%0AКызмат: ${message}`;

  window.open("https://wa.me/996504553304?text=" + text, "_blank");
});