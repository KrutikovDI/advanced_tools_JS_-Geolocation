const input = document.querySelector(".input");
const modal = document.querySelector(".modal");

import viewGeolocation from "./main/viewGeolocation";
import textDate from "./main/textDate";
import viewPostField from "./main/viewPostField";
import workWithModal from "./main/workWithModal";

input.addEventListener("keydown", async (e) => {
  if (e.key !== "Enter") return;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (data) {
        const { latitude, longitude } = data.coords;
        const coord = viewGeolocation(latitude, longitude);
        viewPostField(textDate().text, textDate().date, coord);
      },
      function (err) {
        console.log(err);
        modal.classList.toggle("modal-view");
        workWithModal();
      },
      { enableHighAccuracy: true }
    );
  }
});
