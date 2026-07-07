document.addEventListener("DOMContentLoaded", () => {
<<<<<<< HEAD
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        status.textContent = "Please fill in all fields.";
        status.style.color = "red";
        return;
      }

      status.textContent = "Message sent successfully!";
      status.style.color = "green";
      form.reset();
    });
  }
=======
  const links = document.querySelectorAll(".nav-links a");
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      console.log(`Navigating to ${link.getAttribute("href")}`);
    });
  });
>>>>>>> 7f95c7df1c54013d14ee88fa71aa09a86532f063
});
