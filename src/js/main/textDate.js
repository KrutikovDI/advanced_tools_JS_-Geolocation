const input = document.querySelector(".input");

export default function textDate() {
  const text = input.value;
  input.value = "";
  const now = new Date();
  const date =
    now.getDate() +
    "." +
    String(Number(now.getMonth()) + 1) +
    "." +
    now.getFullYear() +
    " " +
    now.getHours() +
    ":" +
    now.getMinutes();
  return {
    text: text,
    date: date,
  };
}
