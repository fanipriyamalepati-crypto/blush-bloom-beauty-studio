/** @format */

const bookingForm = document.getElementById("bookingForm");
const message = document.getElementById("message");

bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;

  if (!/^[0-9+\-\s()]{7,15}$/.test(phone)) {
    message.textContent = "Please enter a valid phone number.";
    return;
  }

  message.textContent = `Thank you, ${name}! Your ${service} appointment request has been received.`;

  bookingForm.reset();
});

const whatsappButton = document.getElementById("whatsappBooking");

// Replace this with your WhatsApp number
const whatsappNumber = "917207287236";

whatsappButton.addEventListener("click", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;

  if (!name || !phone || !service) {
    alert("Please fill in your name, phone number and service first.");
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
    return;
  }

  const message =
    `Hello Blush & Bloom Beauty Studio!\n` +
    `I would like to book an appointment.\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Service: ${service}`;

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
});
