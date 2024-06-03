import validationInput from "../main/validationInput"

test ("проверяем валидацию ввода: 51.50851, -0.12572 (есть пробел)", () => {
  const exam = validationInput("1.50851, -0.12572");
  const correct = false
  expect(exam).toEqual(correct)
})

test ("проверяем валидацию ввода: 51.50851,-0.12572 (нет пробела)", () => {
  const exam = validationInput("1.50851,-0.12572");
  const correct = "[1.50851, -0.12572]"
  expect(exam).toEqual(correct)
})

test ("проверяем валидацию ввода: [51.50851, -0.12572] (есть квадратные скобки)", () => {
  const exam = validationInput("[51.50851, -0.12572]");
  const correct = false
  expect(exam).toEqual(correct)
})