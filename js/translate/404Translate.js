const langs = document.querySelector(".select");
const langbtn = document.querySelectorAll(".select-option");
const text = document.querySelector(".not-found__text");
const link = document.querySelector(".not-found__link");


langbtn.forEach(el => {
  el.addEventListener("click", () => {
    langs.querySelector(".active").classList.remove("active");
    el.classList.add("active");

    let attr = el.getAttribute("language")


    text.textContent = data[attr].notFoundText
    link.textContent = data[attr].notFoundLink
  })
})

let data = {
  armenian: {
    notFoundText: "Վայ:Այն էջը, որին փնտրում եք, գոյություն չունի:",
    notFoundLink: "Վերադառնալ տուն",
  },
  english: {
    notFoundText: "Oops: The page you are looking for does not exist.",
    notFoundLink: "Go back home",
  },
  russian: {
    notFoundText: "Упс: Страница, которую вы ищете, не существует.",
    notFoundLink: "Вернуться на главную",
  }
}