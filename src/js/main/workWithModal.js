import validationInput from "./validationInput";
import viewPostField from "./viewPostField";
import textDate from "./textDate";

const cancell = document.querySelector(".cancell");
const ok = document.querySelector(".ok");
const inputCoordinates = document.querySelector(".input-coordinates");
const modal = document.querySelector(".modal");

export default function workWithModal() {
  if (modal.classList.contains(".modal-view")) return;
  cancell.addEventListener("click", () => {
    modal.classList.remove("modal-view");
    viewPostField(textDate().text, textDate().date);
  });
  ok.addEventListener("click", (e) => {
    e.preventDefault();
    const customCoordinates = inputCoordinates.value;
    inputCoordinates.value = "";
    const coordString = validationInput(customCoordinates);
    if (coordString) {
      viewPostField(textDate().text, textDate().date, coordString);
      modal.classList.toggle("modal-view");
    } else {
      alert("Введите координаты в указанном формате");
    }
  });
}
