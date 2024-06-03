import createCircle from "./createCircle";
import { id } from "./createCircle";

const postsField = document.querySelector(".posts-field");

export default function viewPostField(text, date, position = "не определено") {
  postsField.insertAdjacentHTML(
    "beforeend",
    `<div class="post-field" id=p${id}><div class="conteiner"><div class="text content">${text}</div><div class="date">${date}</div></div><div class="navigation"><div class="coordinates">${position}</div><img class="eye" src="./png/eye_65000.png"></div></div>`
  );
  const newPost = document.querySelector(`#p${id}`);
  const coordinates = newPost.getBoundingClientRect();
  createCircle(coordinates.height);
}
