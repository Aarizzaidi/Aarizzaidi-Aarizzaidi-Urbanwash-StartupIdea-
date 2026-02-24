const bookBtn = document.getElementById("bookBtn");
const bookingForm = document.getElementById("bookingForm");

bookBtn.addEventListener("click", () => {
  document.getElementById("book")
    .scrollIntoView({ behavior: "smooth" });
});

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! UrbanWash will contact you shortly.");
  bookingForm.reset();
});