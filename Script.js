document.addEventListener("DOMContentLoaded", () => {
  const sliderContent = document.querySelector(".slider-content");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const sliderDots = document.querySelector(".slider-dots");

  let currentSlide = 0;
  let autoPlayInterval; // Variable to hold the timer

  const slidesData = [
    {
      quote: "Super value deals on All products, Upto 40% offer available.",
      offer: "Trade-in-Offer",
      image: "assets/Brad_pitt.png",
      buttonText: "Explore Now",
      url: "products.html"
    },
    {
      quote:
        "Buy Original Football jerseys of your favourite club at offer price.",
      offer: "Exclusive Offer",
      image: "assets/CR7.png",
      buttonText: "Visit Sportswear",
      url: "products.html"
    },
    {
      quote: "Funky Graphic Tees, Neon Pants Limited Stock – Grab Yours!",
      offer: "One Time Offer",
      image: "assets/MNM.png",
      buttonText: "Shop Now",
      url: "products.html"
    },
  ];

  function createSlides() {
    slidesData.forEach((data, index) => {
      const slide = document.createElement("div");
      slide.classList.add("slide");
      slide.innerHTML = `
        <div class="quote-panel">
          <p class="quote-text">${data.quote}</p>
          <p class="quote-offer">${data.offer}</p>
          <a href="${data.url}" class="button-link">
        <button class="action-button">${data.buttonText}</button>
      </a>
        </div>
        <div class="image-panel">
          <img src="${data.image}" alt="${data.offer}">
        </div>
      `;
      sliderContent.appendChild(slide);

      const dot = document.createElement("span");
      dot.classList.add("dot");
      dot.addEventListener("click", () => goToSlide(index));
      sliderDots.appendChild(dot);
    });
  }

  function updateSlider() {
    const offset = -currentSlide * 100;
    sliderContent.style.transform = `translateX(${offset}%)`;
    updateDots();
  }

  function updateDots() {
    document.querySelectorAll(".dot").forEach((dot, index) => {
      dot.classList.toggle("active", index === currentSlide);
    });
  }

  // --- Auto-Play Logic ---
  function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 4000); // Change every 5 seconds
  }

  function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slidesData.length;
    updateSlider();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slidesData.length) % slidesData.length;
    updateSlider();
  }

  function goToSlide(index) {
    currentSlide = index;
    updateSlider();
    resetAutoPlay(); // Reset timer when user manually clicks
  }

  // Event Listeners
  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoPlay();
  });
  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoPlay();
  });

  // Pause on hover
  sliderContent.addEventListener("mouseenter", () =>
    clearInterval(autoPlayInterval),
  );
  sliderContent.addEventListener("mouseleave", startAutoPlay);

  createSlides();
  updateSlider();
  startAutoPlay();
});

// navbar ! important

const bar = document.getElementById("bar");
const closebtn = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("activee");
  });
}

if (closebtn) {
  closebtn.addEventListener("click", () => {
    nav.classList.remove("activee");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const userLink = document.getElementById("nav-user-contact");
  const storedName = localStorage.getItem("username");
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true" && storedName) {
    // 1. Update UI to show the username
    userLink.textContent = `Welcome, ${storedName}`;
    userLink.href = "#";
    // userLink.style.color = "#088178";
    userLink.style.color = "#004539";

    // 2. Add Click Listener for Logout
    userLink.addEventListener("click", (e) => {
      e.preventDefault(); // Prevents the page from jumping because of the "#" href

      // 3. Trigger the Alert/Confirm box
      const confirmLogout = confirm("Are you sure you want to logout?");

      if (confirmLogout) {
        // Clear specific items or everything
        localStorage.removeItem("username");
        localStorage.removeItem("isLoggedIn");

        alert("Logged out successfully!");

        // Redirect to home or refresh to update the navbar back to "Login"
        window.location.href = "index.html";
      }
    });
  }
});