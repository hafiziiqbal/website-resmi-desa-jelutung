AOS.init();

/**
 * Easy selector helper function
 */
const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}

/**
 * Easy event listener function
 */
const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
        if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
            selectEl.addEventListener(type, listener)
        }
    }
}

/**
 * Easy on scroll event listener 
 */
const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
}

/**
 * Navbar links active state on scroll
 */
let navbarlinks = select('#navbar .scrollto', true)
const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navbarlink.classList.add('active')
        } else {
            navbarlink.classList.remove('active')
        }
    })
}
window.addEventListener('load', navbarlinksActive)
onscroll(document, navbarlinksActive)

/**
 * Navbar links active state on scroll
 */
let selectNavbar = select('#navbar')
if (selectNavbar) {
    const headerScrolled = () => {
        if (window.scrollY > 100) {
            selectNavbar.classList.add('bg-light')
            selectNavbar.classList.add('navbar-light')
            selectNavbar.classList.add('shadow')
            selectNavbar.classList.remove('navbar-dark')
        } else {
            selectNavbar.classList.remove('bg-light')
            selectNavbar.classList.remove('navbar-light')
            selectNavbar.classList.remove('shadow')
            selectNavbar.classList.add('navbar-dark')
        }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
}


/**
 * Change Name App
 */
let mediaQueryMedium = window.matchMedia("(max-width: 991px)")
if (mediaQueryMedium.matches) {
    select('#appName').innerHTML = "Aplikasi Resmi <label>Desa Jelutung</label>"
} else {
    select('#appName').innerHTML = "Website Resmi <label>Desa Jelutung</label>"
}


/**
 * hero slider
 */
new Swiper('.hero-slider', {
    speed: 600,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
});

on('click', '#pemerintahanDesa', function (e) {
    select('.card-fluid').style.display = "block";
    select('.card-fluid').style.animation = "fade-in 0.5s";

});
on('click', '.btn-close', function (e) {
    select('.card-fluid').style.display = "none";
});
