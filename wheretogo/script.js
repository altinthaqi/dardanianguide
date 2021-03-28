$(document).ready(function () {
  $("#carousel").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      console.log($(slide.$slides.get(index)).attr("id"));
    }
  );
  $(".center").slick({
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: false,
    dots: true,
    arrows: true,
    accessability: true,
    cssEase: "ease",
    focusOnSelect: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false,

          slidesToShow: 1,
        },
      },
      {
        breakpoint: 380,
        settings: {
          arrows: false,

          slidesToShow: 1,
        },
      },
    ],
  });
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
const body = document.getElementsByTagName("BODY")[0];
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  console.log("Button Clicked");
  window.scrollTo(3200, 3200);
  body.classList.add("noscroll");
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  body.classList.remove("noscroll");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

const modal1 = document.querySelector(".modal1");
const overlay1 = document.querySelector(".overlay1");
const btnCloseModal1 = document.querySelector(".close-modal1");
const btnsOpenModal1 = document.querySelectorAll(".show-modal1");

const openModal1 = () => {
  modal1.classList.remove("hidden1");
  overlay1.classList.remove("hidden1");
  console.log("Button Clicked");
  window.scrollTo(1450, 1450);
  body.classList.add("noscroll1");
};

const closeModal1 = () => {
  modal1.classList.add("hidden1");
  overlay1.classList.add("hidden1");
  body.classList.remove("noscroll1");
};

for (let i = 0; i < btnsOpenModal1.length; i++) {
  btnsOpenModal1[i].addEventListener("click", openModal1);
}
btnCloseModal1.addEventListener("click", closeModal1);
overlay1.addEventListener("click", closeModal1);

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape" && !modal1.classList.contains("hidden1")) {
    closeModal1();
  }
});

let texts = [
  "Nature      ",
  "Landmarks      ",
  "Arts      ",
  "Museums      ",
  "Sights      ",
];
let count = 0;
let index = 0;
let fullText = "";
let currentText = "";

type = () => {
  if (count === texts.length) {
    count = 0;
  }
  fullText = texts[count];
  currentText = fullText.slice(0, ++index);
  document.querySelector(".typing").textContent = currentText;
  if (currentText.length === fullText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 400);
};
type();
