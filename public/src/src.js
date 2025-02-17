const dice = document.getElementsByClassName('dice');

dice[2].addEventListener('click', function() {
  click = true
  if(click) {
    console.log(dice[2]);
  }
})