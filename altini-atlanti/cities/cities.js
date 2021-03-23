let hotelsBtn = document.querySelector(".hotels");
let transportBtn = document.querySelector(".transport");

let contentTransport = document.querySelector(".contentTransport");
let contentHotel = document.querySelector(".contentHotel");

let displayNone = function () {
  contentTransport.style.display = "none";
  transportBtn.classList.remove("active");
  contentHotel.style.display = "none";
  hotelsBtn.classList.remove("active");
};

displayNone();
contentHotel.style.display = "";
hotelsBtn.classList.toggle("active");
hotelsBtn.classList.toggle("none");

hotelsBtn.addEventListener("click", () => {
  displayNone();
  contentHotel.style.display = "";
  hotelsBtn.classList.toggle("active");
  hotelsBtn.classList.toggle("none");
});

transportBtn.addEventListener("click", () => {
  displayNone();
  contentTransport.style.display = "";

  transportBtn.classList.toggle("active");
  transportBtn.classList.toggle("none");
});
