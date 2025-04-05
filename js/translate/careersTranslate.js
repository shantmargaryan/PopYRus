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

        careersItemText.forEach((el, index) => {
            el.textContent = data[attr].careersItemTexts[index]
        })

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
        careersItemTexts: [
            "10 տարվա փորձ",
            "Ընդունվում են միայն 30 տարեկանից ցածր",
            "Լավ անգլերեն խոսող",
            "10 տարվա փորձ",
            "Ընդունվում են միայն 30 տարեկանից ցածր",
            "Լավ անգլերեն խոսող",
            "10 տարվա փորձ",
            "Ընդունվում են միայն 30 տարեկանից ցածր",
            "Լավ անգլերեն խոսող",
        ],
        careersLink: "Դիմեք հիմա",
    },

    english: {
        careersTitle: "Careers",
        careersTitle2: "Careers",
        careersSmallTitle1: "Junior Software Developer",
        careersSmallTitle2: "Fintech Intern",
        careersSmallTitle3: "Network Intern",
        careersItemTexts: [
            "10 years of experience",
            "Are only under 30 years of age",
            "Good english speaker",
            "10 years of experience",
            "Are only under 30 years of age",
            "Good english speaker",
            "10 years of experience",
            "Are only under 30 years of age",
            "Good english speaker"
        ],
        careersLink: "Apply Now",
    },

    russian: {
        careersTitle: "Карьера",
        careersTitle2: "Карьера",
        careersSmallTitle1: "Младший разработчик программного обеспечения",
        careersSmallTitle2: "fintechIntern",
        careersSmallTitle3: "Сетевой стажер",
        careersItemTexts: [
            "10 лет опыта",
            "Всего меньше 30 лет",
            "Хороший английский говорящий",
            "10 лет опыта",
            "Всего меньше 30 лет",
            "Хороший английский говорящий",
            "10 лет опыта",
            "Всего меньше 30 лет",
            "Хороший английский говорящий"
        ],
        careersLink: "Примите участие",
    },
}