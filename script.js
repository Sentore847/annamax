const carSelect = document.querySelector("#car_make");
const modelSelect = document.querySelector("#car_model");
const carSelectedValue = carSelect.value;
const cardButtons = document.querySelectorAll(".card_btn");
const modalWindow = document.getElementById("modal_window");
const closeModalBtn = document.querySelector(".modal_close_btn");
const modalForm = document.querySelector(".modal_form");

function resetFormFields() {
  const form = modalWindow.querySelector(".modal_form");
  form.reset();
  form.querySelector('input[type="tel"]').value = "+43";
  document.getElementById("car_model").innerHTML =
    '<option value="" disabled selected>Спочатку оберіть марку авто!</option>';
}

//Close Modal
function closeModal() {
  modalWindow.classList.remove("active");
  closeModalBtn.classList.remove("active");
  resetFormFields();
}

cardButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modalWindow.classList.add("active");
  });
});

modalWindow.addEventListener("click", (event) => {
  if (event.target !== modalWindow) {
    return;
  }
  closeModal();
});

closeModalBtn.addEventListener("click", () => {
  closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

// Selects with Cars
carSelect.addEventListener("change", () => {
  const selectedMake = carSelect.value;
  const modelOptions = [];

  switch (selectedMake) {
    case "toyota":
      modelOptions.push(
        "Corolla",
        "Camry",
        "RAV4",
        "Land Cruiser",
        "Hilux",
        "Yaris",
        "Supra",
        "Prius",
        "Avalon",
        "Highlander",
        "Tacoma",
        "Sequoia"
      );
      break;
    case "volkswagen":
      modelOptions.push(
        "Golf",
        "Passat",
        "Tiguan",
        "Polo",
        "Jetta",
        "Arteon",
        "ID.4",
        "ID.3",
        "Touareg",
        "Beetle",
        "Amarok"
      );
      break;
    case "ford":
      modelOptions.push(
        "Focus",
        "Mustang",
        "Explorer",
        "F-150",
        "Escape",
        "Fusion",
        "Edge",
        "Expedition",
        "Bronco",
        "Ranger",
        "Maverick"
      );
      break;
    case "honda":
      modelOptions.push(
        "Civic",
        "Accord",
        "CR-V",
        "Pilot",
        "Fit",
        "Odyssey",
        "Ridgeline",
        "HR-V",
        "Passport",
        "Insight"
      );
      break;
    case "bmw":
      modelOptions.push(
        "X5",
        "3 Series",
        "5 Series",
        "7 Series",
        "X3",
        "X1",
        "X7",
        "M3",
        "M5",
        "i4",
        "iX"
      );
      break;
    case "mercedes":
      modelOptions.push(
        "C-Class",
        "E-Class",
        "GLE",
        "S-Class",
        "GLC",
        "GLS",
        "A-Class",
        "CLA-Class",
        "EQB",
        "EQC",
        "AMG GT"
      );
      break;
    case "hyndai":
      modelOptions.push(
        "Elantra",
        "Santa Fe",
        "Tucson",
        "Accent",
        "Kona",
        "Sonata",
        "Palisade",
        "Ioniq 5",
        "Kona Electric",
        "Veloster",
        "Nexo"
      );
      break;
    case "nissan":
      modelOptions.push(
        "Altima",
        "Rogue",
        "Murano",
        "Pathfinder",
        "Sentra",
        "Maxima",
        "Armada",
        "Juke",
        "Titan",
        "Leaf"
      );
      break;
    case "tesla":
      modelOptions.push(
        "Model S",
        "Model 3",
        "Model X",
        "Model Y",
        "Cybertruck"
      );
      break;
    case "kia":
      modelOptions.push(
        "Sportage",
        "Sorento",
        "Rio",
        "Optima",
        "Soul",
        "Telluride",
        "Stinger",
        "Forte",
        "Carnival",
        "Niro"
      );
      break;
    default:
      modelOptions.push("Please select a car make");
  }
  modelSelect.innerHTML = "";

  modelOptions.forEach((model) => {
    const option = document.createElement("option");
    option.value = model;
    option.text = model;
    modelSelect.appendChild(option);
  });
});

// CALCULATOR
const detailing = 15;
const diagnostic = 15;
const electronicDiagnostic = 15;
const repare = 15;

const multipliers = {
  Corolla: 1,
  Camry: 1.1,
  RAV4: 1.2,
  "Land Cruiser": 1.5,
  Hilux: 1.3,
  Yaris: 1,
  Supra: 1.8,
  Prius: 1.2,
  Avalon: 1.3,
  Highlander: 1.4,
  Tacoma: 1.3,
  Sequoia: 1.5,
  Golf: 1,
  Passat: 1.1,
  Tiguan: 1.2,
  Polo: 1,
  Jetta: 1.1,
  Arteon: 1.3,
  "ID.4": 1.4,
  "ID.3": 1.3,
  Touareg: 1.5,
  Beetle: 1.2,
  Amarok: 1.4,
  Focus: 1,
  Mustang: 1.6,
  Explorer: 1.4,
  "F-150": 1.5,
  Escape: 1.2,
  Fusion: 1.1,
  Edge: 1.3,
  Expedition: 1.5,
  Bronco: 1.4,
  Ranger: 1.3,
  Maverick: 1.2,
  Civic: 1,
  Accord: 1.1,
  "CR-V": 1.2,
  Pilot: 1.4,
  Fit: 1,
  Odyssey: 1.2,
  Ridgeline: 1.3,
  "HR-V": 1.1,
  Passport: 1.3,
  Insight: 1.1,
  X5: 1.6,
  "3 Series": 1.4,
  "5 Series": 1.5,
  "7 Series": 1.8,
  X3: 1.4,
  X1: 1.3,
  X7: 1.8,
  M3: 2,
  M5: 2.2,
  i4: 1.9,
  iX: 1.8,
  "C-Class": 1.4,
  "E-Class": 1.5,
  GLE: 1.6,
  "S-Class": 1.8,
  GLC: 1.5,
  GLS: 1.7,
  "A-Class": 1.3,
  "CLA-Class": 1.4,
  EQB: 1.6,
  EQC: 1.7,
  "AMG GT": 2,
  Elantra: 1,
  "Santa Fe": 1.2,
  Tucson: 1.2,
  Accent: 1,
  Kona: 1.1,
  Sonata: 1.1,
  Palisade: 1.4,
  "Ioniq 5": 1.5,
  "Kona Electric": 1.4,
  Veloster: 1.3,
  Nexo: 1.5,
  Altima: 1,
  Rogue: 1.2,
  Murano: 1.3,
  Pathfinder: 1.4,
  Sentra: 1,
  Maxima: 1.2,
  Armada: 1.5,
  Juke: 1.1,
  Titan: 1.4,
  Leaf: 1.3,
  "Model S": 1.8,
  "Model 3": 1.5,
  "Model X": 1.9,
  "Model Y": 1.7,
  Cybertruck: 2,
  Sportage: 1.2,
  Sorento: 1.3,
  Rio: 1,
  Optima: 1.1,
  Soul: 1,
  Telluride: 1.4,
  Stinger: 1.6,
  Forte: 1,
  Carnival: 1.2,
  Niro: 1.1,
};

const resultDisplay = document.getElementById("result");
const carModelSelect = document.getElementById("car_model");

function calculateTotal() {
  const selectedModel = carModelSelect.value;
  const multiplier = multipliers[selectedModel] || 1;

  let total = 0;

  if (document.getElementById("detailing_input").checked) {
    total += detailing * multiplier;
  }
  if (document.getElementById("diagnostic_input").checked) {
    total += diagnostic * multiplier;
  }
  if (document.getElementById("electronics_input").checked) {
    total += electronicDiagnostic * multiplier;
  }
  if (document.getElementById("repare_input").checked) {
    total += repare * multiplier;
  }

  resultDisplay.textContent = `Total cost from: €${total.toFixed(2)}`;
}

document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
  checkbox.addEventListener("change", calculateTotal);
});

//Sucess for form
// modalForm.addEventListener("submit", function (e) {
//   e.preventDefault();

//   // Показываем сообщение Toastify
//   Toastify({
//     text: "Форма успішно відправлена! Дякуємо за звернення.",
//     duration: 3000, // 3 секунды
//     close: true, // Добавляем кнопку закрытия
//     gravity: "top", // Позиция сверху
//     position: "center", // По центру
//     backgroundColor: "#4CAF50", // Зеленый цвет для успешного сообщения
//   }).showToast();

//   resultDisplay.textContent = "Total cost from: €0.00";

//   // Очищаем все поля формы
//   e.target.reset();

//   // Закрываем модалку через 3 секунды
//   setTimeout(() => closeModal());
// });

//Counter figures
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter_item_number");
  const speed = 200;

  const runCounter = (counter) => {
    const target = +counter.getAttribute("data-count");
    let count = +counter.innerText;
    const increment = target / speed;

    const interval = setInterval(() => {
      if (count < target) {
        count += increment;
        counter.innerText = Math.min(Math.ceil(count), target);
      } else {
        counter.innerText = target;
        clearInterval(interval);
      }
    }, 10);
  };

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          runCounter(counter);
          observer.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
});

// Input Phone Validate
const phoneInputs = document.querySelectorAll(".input_phone");
const itiInstances = [];

// Инициализация полей для intlTelInput
phoneInputs.forEach((input) => {
  const iti = window.intlTelInput(input, {
    initialCountry: "at", // Инициализация с кодом страны
    geoIpLookup: (callback) => {
      fetch("https://ipinfo.io/json?token=your_token_here")
        .then((response) => response.json())
        .then((data) => callback(data.country))
        .catch(() => callback("us"));
    },
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });

  itiInstances.push({ input, iti }); // Добавляем экземпляр в массив
});

// Обработчик отправки формы
const feedbackForm = document.querySelector(".feedback_form");

feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Отмена стандартного поведения

  // Получение значений полей
  const name = feedbackForm
    .querySelector('input[placeholder="Введіть ваше ім’я..."]')
    .value.trim();
  const phoneInput = feedbackForm.querySelector(".input_phone");
  const car = feedbackForm
    .querySelector('input[placeholder="Введіть назву вашого авто..."]')
    .value.trim();
  const acceptPolitics = feedbackForm.querySelector(
    'input[type="checkbox"]'
  ).checked;

  // Получаем экземпляр intlTelInput для поля телефона
  const iti = itiInstances.find(({ input }) => input === phoneInput)?.iti;

  // Проверка валидности телефона
  const isPhoneValid = iti && iti.isValidNumber();

  // Проверка всех условий
  if (
    !name ||
    !phoneInput.value.trim() ||
    !car ||
    !acceptPolitics ||
    !isPhoneValid
  ) {
    let errorMessage =
      "Будь ласка, заповніть всі поля і прийміть політику конфіденційності!";
    if (!isPhoneValid) {
      errorMessage = "Будь ласка, введіть дійсний номер телефону!";
      phoneInput.style.border = "2px solid red";
    } else {
      phoneInput.style.border = ""; // Убираем ошибку, если телефон валиден
    }

    Toastify({
      text: errorMessage,
      duration: 3000,
      close: true,
      gravity: "top", // top or bottom
      position: "center", // left, center or right
      backgroundColor: "#FF6347",
    }).showToast();
    return;
  }

  // Данные прошли проверку
  Toastify({
    text: "Дані успішно відправлені!",
    duration: 3000,
    close: true,
    gravity: "top",
    position: "center",
    backgroundColor: "#4CAF50",
  }).showToast();

  // Очистка формы после отправки
  feedbackForm.reset();
  phoneInput.style.border = ""; // Убираем стиль ошибки при сбросе формы
});

modalForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Отмена стандартного поведения

  // Получение значений полей
  const name = modalForm
    .querySelector('input[placeholder="Введіть ваше ім’я..."]')
    .value.trim();
  const phoneInput = modalForm.querySelector(".input_phone");
  const carMake = modalForm.querySelector("#car_make").value;
  const acceptPolitics = modalForm.querySelector(
    'input[type="checkbox"][required]'
  ).checked;

  // Получаем экземпляр intlTelInput для поля телефона
  const iti = itiInstances.find(({ input }) => input === phoneInput)?.iti;

  // Проверка валидности телефона
  const isPhoneValid = iti && iti.isValidNumber();

  // Проверка всех условий
  if (
    !name ||
    !phoneInput.value.trim() ||
    !carMake ||
    !acceptPolitics ||
    !isPhoneValid
  ) {
    let errorMessage =
      "Будь ласка, заповніть всі поля і прийміть політику конфіденційності!";
    if (!isPhoneValid) {
      errorMessage = "Будь ласка, введіть дійсний номер телефону!";
      phoneInput.style.border = "2px solid red";
    } else {
      phoneInput.style.border = ""; // Убираем ошибку, если телефон валиден
    }

    Toastify({
      text: errorMessage,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "center",
      backgroundColor: "#FF6347",
    }).showToast();
    return; // Остановка выполнения
  }

  // Данные прошли проверку
  phoneInput.style.border = ""; // Убираем стиль ошибки при сбросе формы

  Toastify({
    text: "Форма успішно відправлена! Дякуємо за звернення.",
    duration: 3000,
    close: true,
    gravity: "top",
    position: "center",
    backgroundColor: "#4CAF50",
  }).showToast();

  // Очистка формы
  modalForm.reset();
  closeModal();
});

function toggleMenu() {
  const nav = document.getElementById("burgerNav");
  nav.style.display = nav.style.display === "block" ? "none" : "block";
}
