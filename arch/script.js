let btn = document.querySelector(".btn");
let btnn = document.querySelector("button");
let a = document.querySelector(".btn div");
let saleh = document.querySelector("nav ul");
btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

btn.innerHTML = '<div style="color: white;">Up</div>';
saleh.innerHTML +=
'<li><a href="صالح.html">صالح</a></li>' ||
'<li><a href="arch/صالح.html">صالح</a></li>';

