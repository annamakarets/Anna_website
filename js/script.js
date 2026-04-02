
function loadQuote() {
  fetch("https://dummyjson.com/quotes/random")
    .then(response => response.json())
    .then(data => {
      const quote = document.getElementById("quote");
      if (quote) {
        quote.textContent = `“${data.quote}“ — ${data.author}`;
      }
    })
    .catch(() => {
      const quote = document.getElementById("quote");
      if (quote) {
        quote.textContent = '“Creativity grows through small ideas and personal projects.“ — Anna Makarets';
      }
    });
}

const slides = [
  "images/brand-slide-1.jpg",
  "images/brand-slide-2.jpg",
  "images/brand-slide-3.jpg"
];
let currentSlide = 0;

function showSlide() {
  const image = document.getElementById("brandSlide");
  if (image) {
    image.style.opacity = 0;
    setTimeout(() => {
      image.src = slides[currentSlide];
      image.style.opacity = 1;
    }, 400);
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide();
}

function submitForm() {
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const phoneField = document.getElementById("phone");
  const bouquetField = document.getElementById("bouquet");
  const msg = document.getElementById("formMessage");

  if (!nameField.value.trim() || !emailField.value.trim() || !phoneField.value.trim() || !bouquetField.value.trim()) {
    msg.textContent = "Please fill in all required fields.";
    return false;
  }

  msg.textContent = "Thank you. Your enquiry has been sent.";
  return false;
}
