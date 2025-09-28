document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name && email && message) {
    document.getElementById("formMessage").textContent =
      "Thank you, " + name + "! Your message has been sent.";
    this.reset();
  } else {
    document.getElementById("formMessage").textContent =
      "Please fill in all fields.";
  }
});
