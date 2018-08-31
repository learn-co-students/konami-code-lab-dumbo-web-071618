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

let index = 0


function init() {
  const body = document.body
  body.addEventListener('keydown', function(e) {

    const directionCode = e.key

    if (directionCode === codes[index]) {
      index++;
      if (index === codes.length) {
        console.log(alert('Sweet Konami! 100 tacos for you!'))
        index = 0
      }
    } else{
      index = 0
    }
  })
}
