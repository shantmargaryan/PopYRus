if (HTMLScriptElement.supports && HTMLScriptElement.supports("speculationrules")) {
    const specScript = document.createElement("script");
    specScript.type = "speculationrules";
    const specRules = {
        prerender: [
            {
                "urls": ["./index.html", "./about.html", "./faq.html", "./history.html", "./team.html", "./contact.html", "./photo.html", "./services.html", "./careers.html", "./news.html"],
                "eagerness": "immediate"
            }
        ],
    };
    specScript.textContent = JSON.stringify(specRules);
    document.body.append(specScript);
}



const header = document.querySelector(".header");
const headerScroll = document.createElement("div");
const nav = document.querySelector(".nav");
const links = document.querySelectorAll(".nav__link")
const overlay = document.querySelector(".main__overlay");
const burger = document.querySelector(".burger");
const languagesList = document.querySelector(".header__select");
const languagesItem = document.querySelectorAll(".header__select-item");
const languagesLink = document.querySelectorAll(".header__select-link");
const animationItem = document.querySelectorAll(".animation-item");
const imglazy = document.querySelectorAll(".img");
const hero = document.querySelector(".hero, .universal-hero");

hero.style.paddingTop = `${header.offsetHeight}px`;


links.forEach(link => {
    if (location.href.includes(link.href)) {
        link.classList.add("nav__link_active");
    }
});



const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target
            target.setAttribute('src', target.dataset.src)
            target.classList.add('scroll-active')
            observer.unobserve(target)
        }
    })
}, {
    rootMargin: "100px 0px 0px 0px",
    threshold: .5
})

animationItem.forEach(anim => observer.observe(anim))
imglazy.forEach(anim => observer.observe(anim))


burger.addEventListener("click", function () {
    burger.classList.toggle("burger_active");
    overlay.classList.toggle("main__overlay_active");
    nav.classList.toggle("nav_active");
    if (burger.classList.contains("burger_active")) {
        header.classList.add("header_active")
        nav.style.paddingTop = header.offsetHeight + "px";
        disableScroll();
    } else {
        setTimeout(() => {
            nav.style.paddingTop = "";
        }, 300);
        header.classList.remove("header_active");
        enableScroll();
    }
    document.body.addEventListener("click", function (e) {
        if (e.target === overlay) {
            burger.classList.remove("burger_active");
            overlay.classList.remove("main__overlay_active");
            nav.classList.remove("nav_active");
            header.classList.remove("header_active");
            enableScroll();
        }
    });
});

const disableScroll = () => {
    const fixBlocks = document?.querySelectorAll('.fixed-block');
    const pagePosition = window.scrollY;
    const paddingOffset = `${(window.innerWidth - document.body.offsetWidth)
        }px`;

    document.documentElement.style.scrollBehavior = 'none';
    fixBlocks.forEach(el => { el.style.paddingRight = paddingOffset; });
    document.body.style.paddingRight = paddingOffset;
    document.body.classList.add('dis-scroll');
    document.body.dataset.position = pagePosition;
    document.body.style.top = `-${pagePosition} px`;
}

const enableScroll = () => {
    const fixBlocks = document?.querySelectorAll('.fixed-block');
    const pagePosition = parseInt(document.body.dataset.position, 10);
    fixBlocks.forEach(el => { el.style.paddingRight = '0px'; });
    document.body.style.paddingRight = '0px';

    document.body.style.top = 'auto';
    document.body.classList.remove('dis-scroll');
    window.scroll({
        top: pagePosition,
        left: 0
    });
    document.body.removeAttribute('data-position');
}

const mediaQueryMinWidth_1200 = window.matchMedia('(min-width: 1200px)');
mediaQueryMinWidth_1200.addEventListener("change", (e) => {
    if (e.matches) {
        nav.style.paddingTop = "";
        return true;
    }
    else {
        nav.style.paddingTop = header.offsetHeight + "px";
    }
    return false;
});


// SWIPER START


if (document.querySelector('.hero__swiper')) {
    const swiper = new Swiper('.hero__swiper', {
        // pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Auto play
        autoplay: {
            delay: 3000,
        },
    });
}

if (document.querySelector('.welcome__swiper')) {
    const swiper = new Swiper(".welcome__swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 1500,
        },

        breakpoints: {
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 3,
            }
        }
    });
}

// SWIPER END


// SELECT START
class CustomSelect {
    constructor(selectElem, options) {
        const defaultOptions = {
            mouseEvent: this.mouseEvent,
            turn: this.turn,
            storage: this.storage,
        };

        this._elem = selectElem;
        this._storageDate = localStorage.getItem(this._elem);
        this.options = Object.assign(defaultOptions, options);
        this.select = document.querySelector(`[data-select='${selectElem}']`);
        this.selectBtn = this.select?.querySelector('.select-btn');
        this.selectList = this.select?.querySelector('.select-list');
        this.selectOptions = this.select?.querySelectorAll('.select-option');
        this.selectInput = this.select?.querySelector('.select-input');

        if (this.isMobile.any()) this.options.mouseEvent = false;

        if (this.options.storage && this._storageDate) {
            this.selectOptions.forEach(option => {
                const isOptionSelected = option.dataset.selectValue === this._storageDate;
                option.classList.toggle('select-option-selected', isOptionSelected);
                if (isOptionSelected) {
                    this.selectBtn.innerHTML = option.innerHTML;
                    this.selectInput.value = option.dataset.selectValue;
                }
                isOptionSelected && this.options.turn && option.classList.add('visually-hidden');
            });
        } else { localStorage.removeItem(this._elem); }

        this.setAttributes();
        this.handleSelectEventClick = this.handleSelectEvent.bind(this);
        this.handleSelectEventKey = this.controlSelectHaveArrowKey.bind(this);
        this.selectCloseBtn = this.selectCloseBtn.bind(this);
        this.selectCloseClick = this.selectCloseClick.bind(this);

        if (this.options.mouseEvent) {
            this.select?.addEventListener('mouseenter', this.selectOpen.bind(this));
            this.select?.addEventListener('mouseleave', this.selectClose.bind(this));
        }

        this.select?.addEventListener('click', this.handleSelectEventClick);
        this.select?.addEventListener('keydown', this.handleSelectEventKey);
    }

    isMobile = {
        Android() { return navigator.userAgent.match(/Android/i); },
        BlackBerry() { return navigator.userAgent.match(/BlackBerry/i); },
        iOS() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
        Opera() { return navigator.userAgent.match(/Opera Mini/i); },
        Windows() { return navigator.userAgent.match(/IEMobile/i); },
        any() {
            return ['Android', 'BlackBerry', 'iOS', 'Opera', 'Windows']
                .some(platform => this[platform]?.() ?? false);
        }
    };

    setAttributes() {
        this.selectBtn.type = 'button';
        this.selectBtn.setAttribute('aria-label', 'open select list');
        this.selectBtn.setAttribute('aria-controls', 'select-list');
        this.selectBtn.setAttribute('aria-expanded', 'false');
        this.selectList.id = 'select-list';
        this.selectOptions.forEach(option => option.type = 'button');
        this.selectInput?.setAttribute('hidden', 'true');
    }

    selectOpen() { return this.toggleSelect(true); }
    selectClose() { return this.toggleSelect(false); }

    selectCloseBtn(e) {
        (e.code === 'Escape' || e.code === 'Tab') && this.selectClose();
    }

    controlSelectHaveArrowKey(event) {
        const buttonIndex = Array.from(this.selectOptions).indexOf(event.target);
        const offset = event.code === 'ArrowUp' ? -1 : event.code === 'ArrowDown' ? 1 : 0;
        const nextIndex = (buttonIndex + offset + this.selectOptions.length) % this.selectOptions.length;
        this.selectOptions[nextIndex].focus();
    }

    selectCloseClick(e) { e.target !== this.selectBtn && this.selectClose(); }

    toggleSelect(open) {
        this.selectList?.classList.toggle('select-list-show', open);
        this.selectBtn?.classList.toggle('select-btn-active', open);
        this.selectBtn?.setAttribute('aria-expanded', open.toString());
        this.selectBtn?.setAttribute('aria-label', open ? 'close select list' : 'open select list');
        if (open && !this.options.mouseEvent) {
            document.body.addEventListener('click', this.selectCloseClick);
            document.body.addEventListener('keydown', this.selectCloseBtn);
        } else {
            document.body.removeEventListener('click', this.selectCloseClick);
            document.body.removeEventListener('keydown', this.selectCloseBtn);
        }
    }

    selectOption(currentOption) {
        if (this.options.turn) {
            this.selectOptions.forEach(option => option.classList.remove('visually-hidden'));
            currentOption.classList.add('visually-hidden');
        }

        if (this.options.storage) {
            localStorage.removeItem(this._elem);
            if (currentOption.dataset.selectValue === this._storageDate) {
                this.selectBtn.innerHTML = currentOption.innerHTML;
            }
            localStorage.setItem(this._elem, currentOption.dataset.selectValue);
            this.selectOptions.forEach(option => option.classList.remove('select-option-selected'));
            currentOption.classList.add('select-option-selected');
        } else {
            localStorage.removeItem(this._elem);
            this.selectOptions.forEach(option => option.classList.remove('select-option-selected'));
            currentOption.classList.add('select-option-selected');
        }

        this.selectBtn.innerHTML = currentOption.innerHTML;
        this.selectInput?.setAttribute('value', currentOption.dataset.selectValue);
        this.selectClose();
    }

    handleSelectEvent(e) {
        const currentOption = e.target.closest('.select-option');
        const currentItem = e.target.closest('.select-item');

        if (e.target === this.selectBtn) {
            if (this.selectList?.classList.contains('select-list-show') &&
                this.selectBtn?.classList.contains('select-btn-active') &&
                !this.options.mouseEvent) {
                this.selectClose();
            } else {
                this.selectOpen();
            }
        }

        currentItem && e.stopPropagation();

        currentOption && this.selectOption(currentOption);
    }
}

if (document.querySelector("[data-select='select']")) {
    const customSelect1 = new CustomSelect('select');
}

// SELECT END