const langs = document.querySelector(".select");
const langbtn = document.querySelectorAll(".select-option");
const teamTitle = document.querySelector(".universal-hero__title");
const ourTeamTitle = document.querySelector(".team__title");
const teamName = document.querySelectorAll(".team__name");
const teamPosition = document.querySelectorAll(".team__position");


langbtn.forEach(el => {
    el.addEventListener("click", () => {
        langs.querySelector(".active").classList.remove("active");
        el.classList.add("active");

        let attr = el.getAttribute("language")

        teamTitle.textContent = data[attr].teamTitle

        ourTeamTitle.textContent = data[attr].ourTeamTitle

        teamName[0].textContent = data[attr].teamName1
        teamName[1].textContent = data[attr].teamName2
        teamName[2].textContent = data[attr].teamName3
        teamName[3].textContent = data[attr].teamName4

        teamPosition[0].textContent = data[attr].teamPosition1
        teamPosition[1].textContent = data[attr].teamPosition2
        teamPosition[2].textContent = data[attr].teamPosition3
        teamPosition[3].textContent = data[attr].teamPosition4
    })
})


let data = {
    armenian: {
        teamTitle: "Թիմ",
        ourTeamTitle: "Մեր Թիմը",
        teamName1: "Ջեք Քրիստիան",
        teamName2: "Զարատա Աֆրատո",
        teamName3: "Սառա Պարտիսոն",
        teamName4: "Լի Չեն Տոլ",

        teamPosition1: "Հիմնադիր եւ գլխավոր գործադիր տնօրեն",
        teamPosition2: "Լեզվի փորձագետ",
        teamPosition3: "Համահիմնադիր",
        teamPosition4: "Մարկետինգի մասնագետ",
    },

    english: {
        teamTitle: "Team",
        ourTeamTitle: "Our Team",
        teamName1: "John Doe",
        teamName2: "ZARARA AFFRO",
        teamName3: "Sara Hardson",
        teamName4: "Lee Jong-tol",

        teamPosition1: "Founder and Chief Executive Officer",
        teamPosition2: "Language expert",
        teamPosition3: "Co-amateur",
        teamPosition4: "Marketing specialist",
    },

    russian: {
        teamTitle: "Команда",
        ourTeamTitle: "Наша команда",
        teamName1: "Джон Доу",
        teamName2: "Зарара Аффро",
        teamName3: "Сара Хардсон",
        teamName4: "Ли Чон-Толь",

        teamPosition1: "Основатель и главный исполнительный директор",
        teamPosition2: "Эксперт по языку",
        teamPosition3: "Со-апеллятор",
        teamPosition4: "Специалист по маркетингу",
    }
}