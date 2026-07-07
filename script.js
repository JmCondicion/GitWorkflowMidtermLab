document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-links a");
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      console.log(`Navigating to ${link.getAttribute("href")}`);
    });
  });
});
