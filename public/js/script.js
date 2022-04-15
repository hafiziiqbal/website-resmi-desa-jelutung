const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
}

const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}

let selectNavBar = select('#navbar')
if (selectNavBar) {
    const headerScrolled = () => {
        if (window.scrollY > 100) {
            selectNavBar.classList.add('bg-light')
            selectNavBar.classList.add('navbar-light')
            selectNavBar.classList.add('shadow-sm')
            selectNavBar.classList.remove('navbar-dark')
        } else {
            selectNavBar.classList.remove('bg-light')
            selectNavBar.classList.remove('navbar-light')
            selectNavBar.classList.remove('shadow-sm')
            selectNavBar.classList.add('navbar-dark')

        }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
}
console.log('berhasil');
