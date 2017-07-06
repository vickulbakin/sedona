var link = document.querySelector(".search-btn");
var popupMap = document.querySelector(".search-form");
var arrivalDate = document.querySelector("[name=arrivalDate]");

popupMap.classList.add("js-form-hidden");
popupMap.classList.add("js-form-transition");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.toggle("js-form-hidden");
  arrivalDate.focus();
})
