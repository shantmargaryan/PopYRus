const langs = document.querySelector(".select");
const langbtn = document.querySelectorAll(".select-option");


langbtn.forEach(el => {
    el.addEventListener("click", () => {
        langs.querySelector(".active").classList.remove("active");
        el.classList.add("active");

        let attr = el.getAttribute("language")
    })
})