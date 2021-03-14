const openPopupBtn = document.querySelector(".travel__btn"); // кнопка открытия попап
const closePopupBtn = document.querySelector(".button-close"); // кнопка закрытия попап
const overlay = document.querySelector(".overlay");//  overlay
const ESCAPE_KEY = "Escape";//кнопка Esc

function openPopup(elem) {
  //открытие попап
  elem.classList.add("overlay_opened");
  document.addEventListener("click", closeByOverlay);
  document.addEventListener("keydown", closeByEsc);
}

function closePopup(elem) {
  // закрытие попап
  document.removeEventListener("click", closeByOverlay);
  document.removeEventListener("keydown", closeByEsc);
  elem.classList.remove("overlay_opened");
}

function closeByEsc(evt) {
  // закрытие попап по нажатию на кнопку Esc
  const popupOpened = document.querySelector(".overlay_opened");
  if (evt.key === ESCAPE_KEY) {
    closePopup(popupOpened);
  }
}

function closeByOverlay(evt) {
  // закрытие попап по клику на overlay
  const popupOpened = document.querySelector(".overlay_opened");
  if (evt.target.classList.contains("overlay_opened")) {
    closePopup(popupOpened);
  }
}

openPopupBtn.addEventListener("click", () => openPopup(overlay)); //слушатель кнопки открытия попап
closePopupBtn.addEventListener("click", () => closePopup(overlay)); //слушатель кнопки закрытия попап
