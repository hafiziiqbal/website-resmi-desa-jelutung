AOS.init();

$(window).scroll(() => {
    let current = "";
    let sections = $("section").get();
    let navLi = $("nav .container ul li a").get();
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });
    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
});

$(window).scroll(() => {
    let nav = $('#navbar');
    let top = 100;
    if ($(window).scrollTop() >= top) {
        nav.addClass('bg-light');
        nav.addClass('navbar-light');
        nav.addClass('shadow');
        nav.removeClass('navbar-dark');
    } else {
        nav.removeClass('bg-light');
        nav.removeClass('navbar-light');
        nav.removeClass('shadow');
        nav.addClass('navbar-dark');
    }
});

new Swiper('.hero-slider', {
    speed: 600,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
});
