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
  document.body.addEventListener('keydown', (event) => {
    const keyName = event.key
    console.log(keyName)
    if (keyName === codes[index]) {
      index = ++index
    } else {
      index = 0
    }

    if (codes[index - 1] === codes[codes.length - 1]) {
      alert("you did it")
    }
  })
}