const langs = document.querySelector(".select");
const langbtn = document.querySelectorAll(".select-option");
const heroText = document.querySelectorAll(".hero__text");
const heroTitle = document.querySelectorAll(".hero__title");
const heroLink = document.querySelectorAll(".hero__link");
const aboutTitle = document.querySelector(".about__title");
const aboutLink = document.querySelector(".about__link");
const servicesTitle = document.querySelector(".services__title");
const servicesSmallTitle = document.querySelectorAll("[data-lang-change]");
const categoriesTitle = document.querySelector(".categories__title");
const categoriesSmallTitle = document.querySelectorAll(".categories__small-title");
const categoriesReadMore = document.querySelectorAll(".categories__subtitle");
const blogTitle = document.querySelector(".blog__title");
const blogTitleLink = document.querySelectorAll(".blog__title-link");
const blogReadMore = document.querySelectorAll(".blog__read-more-link");


langbtn.forEach(el => {
  el.addEventListener("click", () => {
    langs.querySelector(".active").classList.remove("active");
    el.classList.add("active");

    let attr = el.getAttribute("language")

    heroText.forEach(el => {
      el.textContent = data[attr].smallText
    })
    heroTitle.forEach(el => {
      el.textContent = data[attr].title
    })

    heroLink.forEach(el => {
      el.textContent = data[attr].link
    })

    aboutTitle.textContent = data[attr].aboutTitle

    aboutLink.textContent = data[attr].aboutLink

    servicesTitle.textContent = data[attr].servicesTitle

    servicesSmallTitle[0].textContent = data[attr].services1
    servicesSmallTitle[1].textContent = data[attr].services2
    servicesSmallTitle[2].textContent = data[attr].services3
    servicesSmallTitle[3].textContent = data[attr].services4
    servicesSmallTitle[4].textContent = data[attr].services5
    servicesSmallTitle[5].textContent = data[attr].services6
    servicesSmallTitle[6].textContent = data[attr].services7

    categoriesTitle.textContent = data[attr].categoriesTitle

    categoriesSmallTitle[0].textContent = data[attr].categories1
    categoriesSmallTitle[1].textContent = data[attr].categories2
    categoriesSmallTitle[2].textContent = data[attr].categories3
    categoriesSmallTitle[3].textContent = data[attr].categories4
    categoriesSmallTitle[4].textContent = data[attr].categories5
    categoriesSmallTitle[5].textContent = data[attr].categories6

    categoriesReadMore.forEach(el => {
      el.textContent = data[attr].readMore
    })

    blogTitle.textContent = data[attr].blogTitle

    blogTitleLink[0].textContent = data[attr].blogTitleLink1
    blogTitleLink[1].textContent = data[attr].blogTitleLink2
    blogTitleLink[2].textContent = data[attr].blogTitleLink3

    blogReadMore.forEach(el => {
      el.textContent = data[attr].readMore
    })
  })
})

let data = {
  armenian: {
    smallText: "Դառնալ գլոբալ առեւտրի ղեկավար",
    title: "Հաջողության հասնելու համար վերաբերմունքը հավասարապես կարեւոր է որպես ունակություն:",
    link: "Սկսեք ձեր անվճար 30 օրվա փորձությունը",
    aboutTitle: "Մեր մասին",
    aboutLink: "Մանրամասները դիտեք",
    servicesTitle: "Ծառայություններ",
    categoriesTitle: "Կատեգորիաներ",

    services1: "Թեթեւ արագություն",
    services2: "Հպեք զգայուն",
    services3: "Մասնագիտական ​​դիզայն",
    services4: "Իրական ժամանակի վիճակագրություն",
    services5: "Կյանքի թարմացումներ",
    services6: "Ապահով մուտք",
    services7: "Հեշտ է դատի տալ",

    categories1: "Կատարելագործումը մեր ԴՆԹ-ն է",
    categories2: "Ընտրեք կրկնակի թակել",
    categories3: "6 ամիս Dropbox",
    categories4: "Սպիտակ պիտակի ձևավորում",
    categories5: "Պարզ եւ մաքուր",
    categories6: "Շնորհավոր հաճախորդներ",

    readMore: "Կարդալ ավելին",

    blogTitleLink1: "Մեծ ձեռնարկատիրական զրույցի մրցավազք",
    blogTitleLink2: "Tech- ի համար գտնում է արտահոսք ստորգետնյա",
    blogTitleLink3: "Այրվող տղամարդու անապատը փառատոն",
  },

  english: {
    smallText: "Become the global trading leader",
    title: "Attitude is equally important as ability to succeed.",
    link: "Start your free 30 days trial",
    aboutTitle: "About us",
    aboutLink: "Read more",
    servicesTitle: "Services",
    categoriesTitle: "Categories",

    services1: "Light speed",
    services2: "Tap Sensitive",
    services3: "Professional design",
    services4: "Real-time statistics",
    services5: "Life Updates:",
    services6: "Safe access",
    services7: "It's easy to sue",

    categories1: "Improvement is our DNA",
    categories2: "Choose Double Tap",
    categories3: "6 month Dropbox",
    categories4: "Formation of white label",
    categories5: "Plain and clean",
    categories6: "Happy Customers",

    readMore: "Read more",

    blogTitleLink1: "Great business conversation race",
    blogTitleLink2: "It finds a leak of underground for Tech",
    blogTitleLink3: "Burning Men's Desert Festival:",
  },

  russian: {
    smallText: "Стать глобальным лидером в области торговли",
    title: "Отношение одинаково важно, как способность добиться успеха.",
    link: "Начните бесплатную пробную пробку на 30 дней",
    aboutTitle: "О нас",
    aboutLink: "Подробнее",
    servicesTitle: "Услуги",
    categoriesTitle: "Категории",

    services1: "Скорость света",
    services2: "Нажмите чувствительный",
    services3: "Профессиональный дизайн",
    services4: "Статистика в реальном времени",
    services5: "Жизненные обновления:",
    services6: "Безопасный доступ",
    services7: "Легко подать в суд",

    categories1: "Улучшение - это наша ДНК",
    categories2: "Выберите Double Tap",
    categories3: "6 Месяц Dropbox",
    categories4: "Формирование белой этикетки",
    categories5: "Простой и чистый",
    categories6: "Счастливые клиенты",

    readMore: "Подробнее",

    blogTitleLink1: "Отличная гонка для деловых разговоров",
    blogTitleLink2: "Он находит утечку под землей для технологий",
    blogTitleLink3: "Фестиваль жгучей мужской пустыни:",
  }
}
