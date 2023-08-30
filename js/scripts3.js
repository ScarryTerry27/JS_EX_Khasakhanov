let one = document.getElementById("btn_one");
let two = document.querySelector(".two");
let buy = document.getElementById("buy");
let flag = false;

one.addEventListener("click", (ev) => {
  if (flag) {
    return false;
  }
  two.classList.remove("not_display");
  let div = document.createElement("div");
  div.classList.add("del");
  let child = document.createElement("h2");
  let child2 = document.createElement("p");
  child.innerText = one.dataset.target;
  child2.innerText = one.dataset.price;
  div.prepend(child2);
  div.prepend(child);
  two.prepend(div);
  flag = true;
});

buy.addEventListener("click", (ev) => {
  alert("Вы купили");
});

function show() {
  two.classList.add("not_display");
  let del = document.querySelector(".del");
  del.remove();
  flag = false;
}
