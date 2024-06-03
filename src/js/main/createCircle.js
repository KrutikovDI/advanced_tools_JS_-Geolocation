let lineHeight = 630;
export let id = 4;

const circleLine = document.querySelector(".circle-line");
const line = document.querySelector(".line");

export default function createCircle(height) {
  circleLine.insertAdjacentHTML(
    "beforeend",
    `<div class="circle" style="top: ${lineHeight}px"></div>`
  );
  lineHeight = lineHeight + height + 20;
  line.style.height = lineHeight - 17 + "px";
  id = id + 1;
}
