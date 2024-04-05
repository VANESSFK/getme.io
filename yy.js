// Получаем модальное окно
var modal = document.getElementById("modal");

// Получаем кнопку, которая открывает модальное окно
var btn = document.getElementById("modal-btn");

// Получаем элемент закрытия модального окна
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, открываем модальное окно
window.onload = function() {
  modal.style.display = "block";
}

// Когда пользователь нажимает на крестик, закрываем модальное окно
span.onclick = function() {
  modal.style.display = "none";
}

// Когда пользователь нажимает вне модального окна, закрываем его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
