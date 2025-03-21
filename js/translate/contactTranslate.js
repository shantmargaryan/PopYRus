const langs = document.querySelector(".select");
const langbtn = document.querySelectorAll(".select-option");
const contactTitle = document.querySelector(".contact__title");

langbtn.forEach(el => {
    el.addEventListener("click", () => {
        langs.querySelector(".active").classList.remove("active");
        el.classList.add("active");

        let attr = el.getAttribute("language")

        contactTitle.textContent = data[attr].contactTitle
    })
})


let data = {
    armenian: {
        contactTitle: "Կոնտակտներ",
    },
    english: {
        contactTitle: "Contact",
    },
    russian: {
        contactTitle: "Контакты",
    }
}