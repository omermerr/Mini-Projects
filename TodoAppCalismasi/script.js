const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");
const alldelete = document.querySelector(".alldel");

const generateTemplate = (todo) => {
  const html = `
            <li class="list-group-item d-flex justify-content-between align-items-center color">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>
                `;
  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

alldelete.addEventListener("click", (e) => {
  const hepsil = document.querySelectorAll("li");
  for (var j = 0; j < hepsil.length; j++) {
    hepsil[j].remove();
  }
});

const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

search.addEventListener("keyup", () => {
  const turn = search.value.trim().toLowerCase();
  filterTodos(turn);
});
