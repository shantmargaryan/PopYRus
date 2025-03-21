const langs = document.querySelector(".select");
const langbtn = document.querySelectorAll(".select-option");
const photoTitle = document.querySelector(".universal-hero__title");
const photosTitle = document.querySelector(".photos__title");
const loadMoreButton = document.querySelector(".photos__load-more");


langbtn.forEach(el => {
    el.addEventListener("click", () => {
        langs.querySelector(".active").classList.remove("active");
        el.classList.add("active");

        let attr = el.getAttribute("language")

        photoTitle.textContent = data[attr].photoTitle
        photosTitle.textContent = data[attr].photosTitle
        loadMoreButton.textContent = data[attr].loadMoreButton
    })
})



let data = {
    armenian: {
        photoTitle: "Նկարներ",
        photosTitle: "Լուսանկարներ",
        loadMoreButton: "Բերնել Ավելին",
    },
    english: {
        photoTitle: "Photos",
        photosTitle: "Photos",
        loadMoreButton: "Load More",
    },
    russian: {
        photoTitle: "Картинки",
        photosTitle: "Фотографии",
        loadMoreButton: "Показать еще",
    }
}