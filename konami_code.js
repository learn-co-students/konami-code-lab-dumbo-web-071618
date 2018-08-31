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
   let i = 0;

  document.body.addEventListener('keydown', function(e){
    console.log(e)
    if(e.key === codes[i]) {
      i++;
      if(i === codes.length) {
        alert("Hurray!")
      }
    } else {
      i = 0;
    }
  });
}
