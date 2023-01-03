let btn = document.querySelector(".btn");
let btnn = document.querySelector("button");
let a = document.querySelector(".btn div");
let saleh = document.querySelector("nav ul");
let printt = document.querySelector(".printt");
btn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
printt.addEventListener("click", function () {
  print();
});

btn.innerHTML = '<div style="color: white;">Up</div>';
saleh.innerHTML +=
  '<li><a href="صالح.html">صالح</a></li>' ||
  '<li><a href="arch/صالح.html">صالح</a></li>';

