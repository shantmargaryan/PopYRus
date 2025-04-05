const langs = document.querySelector(".select");
const langbtn = document.querySelectorAll(".select-option");
const blogSingleTitle = document.querySelector(".universal-hero__title");
const blogSingleSmallTitle = document.querySelector(".blog-single__title");
const blogSingleAdmin = document.querySelectorAll(".blog-single__admin-text");
const asideDate = document.querySelectorAll(".single-blog__aside-date-text");
const asideTitle = document.querySelectorAll(".blog-single__aside-title");
const readMore = document.querySelectorAll(".blog-single__aside-link");


langbtn.forEach(el => {
  el.addEventListener("click", () => {
    langs.querySelector(".active").classList.remove("active");
    el.classList.add("active");

    let attr = el.getAttribute("language")

    blogSingleTitle.textContent = data[attr].blogSingleTitle

    blogSingleSmallTitle.textContent = data[attr].blogSingleSmallTitle

    blogSingleAdmin.forEach((el, index) => {
      el.textContent = data[attr].blogSingleAdmin
    })

    asideDate.forEach((el, index) => {
      el.textContent = data[attr].asideDate[index]
    })

    asideTitle.forEach((el, index) => {
      el.textContent = data[attr].asideTitle[index]
    })

    readMore.forEach((el, index) => {
      el.textContent = data[attr].readMore
    })
  })
})


let data = {
  armenian: {
    blogSingleTitle: "Միայնակ բլոգ",
    blogSingleSmallTitle: "Առցանց հսկաները պետք է ուժեղացնեն ազատ խոսքը չարաշահման կամ դիտման նորամուծության դեմ",
    blogSingleAdmin: "Կառավարություն",
    asideDate: [
      "Հունվար",
      "Հունվար",
      "Հունվար"
    ],
    asideTitle: [
      "Ազատ խոսք՝ ընդդեմ չարաշահումների կամ մահանալ՝ փորձելով դա",
      "Ազատ խոսք՝ ընդդեմ չարաշահումների կամ մահանալ՝ փորձելով դա",
      "Ազատ խոսք չարաշահման դեմ կամ մեռնել, փորձելով"
    ],
    readMore: "Կարդալ ավելին"
  },

  english: {
    blogSingleTitle: "Single Blog",
    blogSingleSmallTitle: "Online giants must bolster free speech against abuse or surveillance innovation",
    blogSingleAdmin: "Admin",
    asideDate: [
      "January",
      "January",
      "January"
    ],
    asideTitle: [
      "Free speech against abuse or surveillance innovation",
      "Free speech against abuse or surveillance innovation",
      "Free speech against abuse or surveillance innovation"
    ],
    readMore: "Read more"
  },

  russian: {
    blogSingleTitle: "Единый блог",
    blogSingleSmallTitle: "Онлайн-гиганты должны укрепить свободу слова против злоупотреблений или наблюдений",
    blogSingleAdmin: "Администратор",
    asideDate: [
      "Январь",
      "Январь",
      "Январь"
    ],
    asideTitle: [
      "Свобода слова против злоупотреблений или наблюдений",
      "Свобода слова против злоупотреблений или наблюдений",
      "Свобода слова против злоупотреблений или наблюдений"
    ],
    readMore: "Читать далее"
  }
}