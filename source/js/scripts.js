var ceeloLink = document.querySelector(".artists-item__play-link--ceelo");
var henryLink = document.querySelector(".artists-item__play-link--henry");
var kamaalLink = document.querySelector(".artists-item__play-link--kamaal");
var secretLink = document.querySelector(".artists-item__play-link--secret");
var mrbLink = document.querySelector(".artists-item__play-link--mrb");
var ceeloPopup = document.querySelector(".popup--ceelo");
var henryPopup = document.querySelector(".popup--henry");
var kamaalPopup = document.querySelector(".popup--kamaal");
var secretPopup = document.querySelector(".popup--secret");
var mrbPopup = document.querySelector(".popup--mrb");
var ceeloClose = document.querySelector(".popup--ceelo .popup__close");
var henryClose = document.querySelector(".popup--henry .popup__close");
var kamaalClose = document.querySelector(".popup--kamaal .popup__close");
var secretClose = document.querySelector(".popup--secret .popup__close");
var mrbClose = document.querySelector(".popup--mrb .popup__close");

ceeloLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  ceeloPopup.classList.add("popup--show");
});

ceeloClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  ceeloPopup.classList.remove("popup--show");
})

henryLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  henryPopup.classList.add("popup--show");
});

henryClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  henryPopup.classList.remove("popup--show");
})

kamaalLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  kamaalPopup.classList.add("popup--show");
});

kamaalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  kamaalPopup.classList.remove("popup--show");
})

secretLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  secretPopup.classList.add("popup--show");
});

secretClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  secretPopup.classList.remove("popup--show");
})

mrbLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mrbPopup.classList.add("popup--show");
});

mrbClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mrbPopup.classList.remove("popup--show");
})
