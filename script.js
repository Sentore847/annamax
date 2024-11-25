const customSelect = document.querySelector(".custom-select");
const selectedOption = customSelect.querySelector(".selected-option");
const options = customSelect.querySelectorAll(".options li");

// Открытие/закрытие селекта при клике
customSelect.addEventListener("click", function () {
  this.classList.toggle("open");
});

// Закрытие селекта при нажатии Esc
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    customSelect.classList.remove("open");
  }
});

// Закрытие селекта при клике вне элемента
document.addEventListener("click", function (event) {
  if (!customSelect.contains(event.target)) {
    customSelect.classList.remove("open");
  }
});

// Обновление выбранного элемента
options.forEach((option) => {
  option.addEventListener("click", function () {
    // Устанавливаем текст и иконку выбранной опции
    selectedOption.innerHTML = this.innerHTML;

    // Закрываем селект
  });
  customSelect.classList.remove("open");
});
