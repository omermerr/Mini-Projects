const correctAnswers = ["E", "E", "E", "E"];

const form = document.querySelector(".question-form");

const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.name1.value,
    form.name2.value,
    form.name3.value,
    form.name4.value,
  ];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  result.classList.remove("d-none");

  let puan = 0;
  const write = setInterval(() => {
    result.querySelector("span").textContent = `${puan}%`;
    if (puan == score) {
      clearInterval(write);
    } else {
      puan++;
    }
  }, 15);
});
