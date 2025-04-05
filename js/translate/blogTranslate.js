const langs = document.querySelector(".select");
const langbtn = document.querySelectorAll(".select-option");
const blogTitle = document.querySelector(".universal-hero__title");
const date = document.querySelectorAll(".blog__date-text");
const titleLink = document.querySelectorAll(".blog__title-link");
const adminText = document.querySelectorAll(".blog__icon-text");
const paginationBtn = document.querySelectorAll(".pagination-btn");
const search = document.querySelector(".form__input[placeholder='Որոնել']");
const formSearchBtn = document.querySelector(".form__btn");
const asideTitle = document.querySelector(".aside__title");
const asideTitleItem = document.querySelectorAll(".aside__item-title");


langbtn.forEach(el => {
  el.addEventListener("click", () => {
    langs.querySelector(".active").classList.remove("active");
    el.classList.add("active");

    let attr = el.getAttribute("language")

    blogTitle.textContent = data[attr].blogTitle

    date.forEach((el, index) => {
      el.textContent = data[attr].date[index]
    })

    titleLink.forEach((el, index) => {
      el.textContent = data[attr].titleLink[index]
    })

    adminText.forEach((el, index) => {
      el.textContent = data[attr].adminText
    })

    search.textContent = data[attr].search
    search.setAttribute("placeholder", data[attr].search)
    formSearchBtn.textContent = data[attr].search

    asideTitle.textContent = data[attr].asideTitle

    asideTitleItem.forEach((el, index) => {
      el.textContent = data[attr].asideTitleItem[index]
    })

    paginationBtn.forEach((el, index) => {
      el.textContent = data[attr].paginationBtn[index]
    })
  })
})


let data = {
  armenian: {
    blogTitle: "Բլոգ",
    date: [
      "Հուլիս",
      "Մայիս"
    ],
    titleLink: [
      "Մենթորության վրա եւ գտնելով ձեր ճանապարհը",
      "Ինչպես ստեղծել հաջողակ բիզնես",
      "հարձակողական գովազդներից հետո Բովանդակությունը հանգեցնում է բրենդային բոյկոտի",
    ],
    adminText: [
      "Ադմինիստ",
    ],
    search: "Որոնել",
    asideTitle: "Վերջին գրառումներ",
    asideTitleItem: [
      "Վերադառնալ ապագա օր",
      "Վեբ 3.0 տեսողությունը",
      "Որտեղ գնալ արձակուրդ:",
    ],
    paginationBtn: [
      "Նախորդ",
      "Հաջորդ"
    ]
  },

  english: {
    blogTitle: "Blog",
    date: [
      "July",
      "May"
    ],
    titleLink: [
      "On mentoring and finding your way",
      "How to create a successful business",
      "After offensive ads Content leads to brand boycotts",
    ],
    adminText: [
      "Admin"
    ],
    search: "Search",
    asideTitle: "Latest posts",
    asideTitleItem: [
      "Back to the future day",
      "Web 3.0 vision",
      "Where to go on vacation:",
    ],
    paginationBtn: [
      "Previous",
      "Next"
    ]
  },

  russian: {
    blogTitle: "Блог",
    date: [
      "Июль",
      "Май"
    ],
    titleLink: [
      "О менторстве и нахождении вашего пути",
      "Как создать успешную бизнес",
      "После оффенсивных объявлений содержание ведет к брендовому банкротству",
    ],
    adminText: [
      "Админ"
    ],
    search: "Поиск",
    asideTitle: "Последние записи",
    asideTitleItem: [
      "Назад в будущее день",
      "Веб 3.0 видение",
      "Куда пойти в отпуск:",
    ],
    paginationBtn: [
      "Предыдущий",
      "Следующий"
    ]
  }
}