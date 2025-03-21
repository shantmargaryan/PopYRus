const langs = document.querySelector(".select");
const langbtn = document.querySelectorAll(".select-option");
const careersTitle = document.querySelector(".universal-hero__title");
const careersTitle2 = document.querySelector(".careers__title");
const careersSmallTitle = document.querySelectorAll(".careers__item-title");
const careersItemText = document.querySelectorAll(".careers__item-text");
const careersLink = document.querySelectorAll(".careers__item-link");

langbtn.forEach(el => {
    el.addEventListener("click", () => {
        langs.querySelector(".active").classList.remove("active");
        el.classList.add("active");

        let attr = el.getAttribute("language")

        careersTitle.textContent = data[attr].careersTitle
        careersTitle2.textContent = data[attr].careersTitle2

        careersSmallTitle[0].textContent = data[attr].careersSmallTitle1
        careersSmallTitle[1].textContent = data[attr].careersSmallTitle2
        careersSmallTitle[2].textContent = data[attr].careersSmallTitle3

        careersItemText[0].textContent = data[attr].careersItemText1
        careersItemText[1].textContent = data[attr].careersItemText2
        careersItemText[2].textContent = data[attr].careersItemText3

        careersLink.forEach(el => {
            el.textContent = data[attr].careersLink
        })
    })
})



let data = {
    armenian: {
        careersTitle: "Կարիերա",
        careersTitle2: "Կարիերա",
        careersSmallTitle1: "Մարկետինգի մասնագետ",
        careersSmallTitle2: "Fintech փորձագետ",
        careersSmallTitle3: "Network անցային ինժեներ",
        careersItemText1: "10 տարվա փորձ",
        careersItemText2: "Ընդունվում են միայն 30 տարեկանից ցածր",
        careersItemText3: "Լավ անգլերեն խոսող",
        careersLink: "Դիմեք հիմա",
    },

    english: {
        careersTitle: "Careers",
        careersTitle2: "Careers",
        careersSmallTitle1: "Junior Software Developer",
        careersSmallTitle2: "Fintech Intern",
        careersSmallTitle3: "Network Intern",
        careersItemText1: "10 years of experience",
        careersItemText2: "Are only under 30 years of age",
        careersItemText3: "Good english speaker",
        careersLink: "Apply Now",
    },

    russian: {
        careersTitle: "Карьера",
        careersTitle2: "Карьера",
        careersSmallTitle1: "Младший разработчик программного обеспечения",
        careersSmallTitle2: "fintechIntern",
        careersSmallTitle3: "Сетевой стажер",
        careersItemText1: "10 лет опыта",
        careersItemText2: "Всего меньше 30 лет",
        careersItemText3: "Хороший английский говорящий",
        careersLink: "Примите участие",
    },
}