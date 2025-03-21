const langs = document.querySelector(".select");
const langbtn = document.querySelectorAll(".select-option");
const historyTitle = document.querySelector(".universal-hero__title");
const historyText = document.querySelectorAll(".history__text");
const historyItemTitle = document.querySelectorAll(".history__title");


langbtn.forEach(el => {
    el.addEventListener("click", () => {
        langs.querySelector(".active").classList.remove("active");
        el.classList.add("active");

        let attr = el.getAttribute("language")

        historyTitle.textContent = data[attr].historyTitle

        historyText[0].textContent = data[attr].historyText1
        historyText[1].textContent = data[attr].historyText2
        historyText[2].textContent = data[attr].historyText3
        historyText[3].textContent = data[attr].historyText4

        historyItemTitle[0].textContent = data[attr].historyItemTitle1
        historyItemTitle[1].textContent = data[attr].historyItemTitle2
        historyItemTitle[2].textContent = data[attr].historyItemTitle3
        historyItemTitle[3].textContent = data[attr].historyItemTitle4
    })
})

let data = {
    armenian: {
        historyTitle: "Պատմություն",
        historyText1: "Ընկերության հիմնադրում",
        historyText2: "Գործընկերություն Talkamin- ի հետ",
        historyText3: "Միջազգային գիտաժողովի մրցանակ",
        historyText4: "Redmond Inc.ձեռքբերում",
        historyItemTitle1: "Ընկերության հիմնադիր",
        historyItemTitle2: "Ընկերության հիմնադիր",
        historyItemTitle3: "Ընկերության հիմնադիր",
        historyItemTitle4: "Ընկերության հիմնադիր"

    },

    english: {
        historyTitle: "History",
        historyText1: "Foundation of the company",
        historyText2: "Partnership with Talkamin",
        historyText3: "International Conference Award",
        historyText4: "Redmond Inc. Acquisition",
        historyItemTitle1: "Founder of the company",
        historyItemTitle2: "Founder of the company",
        historyItemTitle3: "Founder of the company",
        historyItemTitle4: "Founder of the company",
    },

    russian: {
        historyTitle: "История",
        historyText1: "Фонд компании",
        historyText2: "Партнерство с Talkamin",
        historyText3: "Награда Международной конференции",
        historyText4: "Redmond Inc. приобретение",
        historyItemTitle1: "Основатель компании",
        historyItemTitle2: "Основатель компании",
        historyItemTitle3: "Основатель компании",
        historyItemTitle4: "Основатель компании",
    },
}