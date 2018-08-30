const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];


function init() {
  let index = 0
  document.body.addEventListener("keydown", e => {
    index = e.key === codes[index] ? index + 1 : index = 0
    console.log(index)
    if (index === codes.length) alert("Yay!")
  })
}
