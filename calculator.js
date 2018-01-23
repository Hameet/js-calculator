
document.addEventListener ("DOMContentLoaded", function () {

  var buttons = document.getElementById('buttons');

  for (var i = 0; i <buttons.length; i++) {
      buttons[i].addEventListener('click', buttonClicked);
  }
});
