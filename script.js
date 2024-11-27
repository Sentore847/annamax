const customSelect = document.querySelector(".custom-select");
const selectedOption = customSelect.querySelector(".selected-option");
const options = customSelect.querySelectorAll(".options li");

customSelect.addEventListener("click", function () {
  this.classList.toggle("open");
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    customSelect.classList.remove("open");
  }
});

document.addEventListener("click", function (event) {
  if (!customSelect.contains(event.target)) {
    customSelect.classList.remove("open");
  }
});

options.forEach((option) => {
  option.addEventListener("click", function () {
    selectedOption.innerHTML = this.innerHTML;
  });
  customSelect.classList.remove("open");
});

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter_item_number");
  const speed = 200;

  const runCounter = (counter) => {
    const target = +counter.getAttribute("data-count");
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(() => runCounter(counter), 10);
    } else {
      counter.innerText = target;
    }
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
