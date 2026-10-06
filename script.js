/** @format */

document.addEventListener("DOMContentLoaded", function () {
  const bookingForm = document.getElementById("bookingForm");
  const message = document.getElementById("message");
  const whatsappButton = document.getElementById("whatsappBooking");

  whatsappButton.addEventListener("click", function () {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;

    if (!name || !phone || !service) {
      alert("Please fill in your name, phone number and service first.");
      return;
    }

    const whatsappNumber = "919550688737";

    const whatsappMessage =
      `Hello Blush & Bloom Beauty Studio!\n` +
      `I would like to book an appointment.\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Service: ${service}`;

    const url =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(whatsappMessage);

    window.location.href = url;
  });
});
