const langs = document.querySelector(".select");
const langbtn = document.querySelectorAll(".select-option");
const AboutTitle = document.querySelector(".universal-hero__title");
const experienceTitle = document.querySelectorAll(".experience__title");
const welcomeTitle = document.querySelector(".welcome__title");

langbtn.forEach(el => {
    el.addEventListener("click", () => {
        langs.querySelector(".active").classList.remove("active");
        el.classList.add("active");

        let attr = el.getAttribute("language")

        AboutTitle.textContent = data[attr].aboutTitle

        experienceTitle.forEach(el => {
            el.textContent = data[attr].experienceTitle
        })

        welcomeTitle.textContent = data[attr].welcomeTitle
    })
})

let data = {
    armenian: {
        aboutTitle: "Մեր մասին",

        experienceTitle: "Տիեզերքը որպես փորձ",

        welcomeTitle: "Բարի գալուստ White Label",
    },

    english: {
        aboutTitle: "About us",

        experienceTitle: "Space as an experience",

        welcomeTitle: "Welcome to White Label",
    },
    russian: {
        aboutTitle: "О нас",

        experienceTitle: "Пространство как опыт",

        welcomeTitle: "Добро пожаловать на белый лейбл",
    }
}