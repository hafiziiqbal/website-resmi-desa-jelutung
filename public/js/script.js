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
    select('#appName').innerHTML = "Aplikasi Resmi <label>Desa Jelutung</label>";
    select('#navbar .navbar-brand label:first-child').innerHTML = "Aplikasi Resmi Desa Jelutung";
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

/**
 * call card pemerintahan desa
 */
on('click', '#pemerintahanDesa', function (e) {
    select('.card-fluid-content').id = "pemerintahFlow"
    select('.card-fluid').style.display = "block";
    select('#bpdTable').style.display = "none";
    select('.card-fluid').style.animation = "fade-in 0.5s";

    select('.img-card').style.background = "url('../storage/img/pemerintahan/struktur-desa.jpg')";
    select('.img-card').style.backgroundSize = "cover";
    select('.img-card').style.backgroundPositionX = "center";

    select('#pemerintahFlow .card-header h4').innerHTML = "Pemerintah Desa";
    select('#pemerintahFlow .card-content h4').innerHTML = "Susunan Organisasi dan Tata Kerja Pemerintah Desa Jelutung";
    select('#pemerintahFlow .card-content label').innerHTML = "sLorem ipsum dolor sit amet consectetur, adipisicing elit. Animi perspiciatis perferendis excepturi blanditiis consequuntur aspernatur ex eum commodi iste suscipit, veritatis corrupti omnis facere odit deserunt distinctio nesciunt numquam, debitis incidunt quam mollitia error. Sit cum laborum consequuntur harum? Voluptate officia rem sint aut beatae adipisci quisquam ad? Cupiditate qui omnis sunt, laudantium laborum similique architecto odit. Laborum omnis aspernatur enim consequuntur quidem pariatur eligendi quas sunt, ullam, voluptatibus ab saepe! Libero quo aliquam atque voluptatem, illo nostrum laboriosam vero sunt rerum at quas adipisci eos velit harum quam? A, sint! Beatae dolor repudiandae quisquam, iste error excepturi, quod sint laboriosam totam optio id magnam nemo odio sapiente nihil aspernatur voluptatum similique nobis ad explicabo! Ab quae, dolore sint voluptatum numquam assumenda dignissimos corporis obcaecati temporibus nulla deserunt quibusdam ad inventore fugit consequatur doloremque placeat minus debitis. Numquam assumenda, beatae veniam nisi veritatis eos placeat accusantium quisquam nulla porro molestiae reprehenderit a minus, saepe sint. Asperiores iste totam unde vel esse! Fugit eius dolorem error natus ipsum beatae labore perferendis aperiam debitis cum nisi assumenda et quia inventore at voluptas voluptatum, eveniet harum delectus ut iusto enim voluptatem maiores. Praesentium eos cumque hic fuga odio molestiae veniam aperiam eaque veritatis. Autem, nemo? A illum earum dolores sunt doloremque eos pariatur. Blanditiis laudantium error suscipit commodi non! Dolorum corporis, sed reprehenderit doloremque porro iure perferendis excepturi et quidem qui nemo consequuntur, unde eius rem. A impedit explicabo, quod in quibusdam necessitatibus ipsa sapiente adipisci distinctio perspiciatis iure architecto ullam repellat laudantium ex nulla voluptatum asperiores. Accusantium mollitia fuga atque itaque autem obcaecati tempora laboriosam, illo, ad distinctio corrupti laudantium delectus incidunt unde perferendis eum reprehenderit perspiciatis excepturi modi asperiores ipsum quia eligendi! Unde nobis, doloribus itaque aliquid neque magnam odit laboriosam tempora distinctio nostrum recusandae earum exercitationem maiores quis sunt vel ad sit ullam, at natus fuga impedit! Quaerat maiores doloremque, dignissimos quasi deserunt ducimus neque modi! Earum illo, velit quaerat esse aperiam a. Praesentium tempore soluta voluptatem, nemo quam accusamus autem consectetur iure, qui ipsa, magnam at. Dicta, nostrum. Fuga error maxime, sunt in perferendis aspernatur quod temporibus, similique commodi praesentium officiis dolor incidunt iusto necessitatibus ratione, veniam inventore quidem nihil? Odio iste tenetur et ducimus, eius illum nulla, delectus debitis quas voluptates non placeat praesentium consequuntur facilis iure nisi omnis temporibus eos aliquam iusto eligendi ex? Sit, quasi quos beatae veniam neque repellendus, aspernatur accusantium deserunt ipsam nemo adipisci? Obcaecati beatae corporis laborum id sit excepturi dignissimos voluptatibus quam cumque debitis labore dolorem, accusamus rem culpa perspiciatis totam autem ex dolores. Perferendis facere, dolorum quibusdam pariatur numquam optio itaque exercitationem reiciendis, vel labore ea cum ratione consequatur. Atque modi ab rerum minus. Sequi incidunt autem quibusdam quasi doloremque nostrum amet cumque recusandae eaque, ipsum similique reprehenderit provident. Saepe id nostrum tempora quaerat, fugiat molestias unde non porro placeat, dolore sit velit! Aspernatur voluptatem magnam harum doloribus quibusdam, autem quas molestias. Molestias harum ipsam aliquid tempora ullam natus quos officiis! Nam nihil id";

});

/**
 * call card bpd
 */
on('click', '#bpd', function (e) {
    select('.card-fluid-content').id = "bpdFlow"
    select('.card-fluid').style.display = "block";
    select('#bpdTable').style.display = "";
    select('.card-fluid').style.animation = "fade-in 0.5s";

    select('.img-card').style.background = "url('../storage/img/pemerintahan/struktur-bpd.jpg')";
    select('.img-card').style.backgroundSize = "cover";
    select('.img-card').style.backgroundPositionX = "center";

    select('#bpdFlow .card-header h4').innerHTML = "Badan Permusyawaratan Desa";
    select('#bpdFlow .card-content h4').innerHTML = "Susunan Organisasi Badan Permusyawaratan Desa";
    select('#bpdFlow .card-content label').innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi perspiciatis perferendis excepturi blanditiis consequuntur aspernatur ex eum commodi iste suscipit, veritatis corrupti omnis facere odit deserunt distinctio nesciunt numquam, debitis incidunt quam mollitia error. Sit cum laborum consequuntur harum? Voluptate officia rem sint aut beatae adipisci quisquam ad? Cupiditate qui omnis sunt, laudantium laborum similique architecto odit. Laborum omnis aspernatur enim consequuntur quidem pariatur eligendi quas sunt, ullam, voluptatibus ab saepe! Libero quo aliquam atque voluptatem, illo nostrum laboriosam vero sunt rerum at quas adipisci eos velit harum quam? A, sint! Beatae dolor repudiandae quisquam, iste error excepturi, quod sint laboriosam totam optio id magnam nemo odio sapiente nihil aspernatur voluptatum similique nobis ad explicabo! Ab quae, dolore sint voluptatum numquam assumenda dignissimos corporis obcaecati temporibus nulla deserunt quibusdam ad inventore fugit consequatur doloremque placeat minus debitis. Numquam assumenda, beatae veniam nisi veritatis eos placeat accusantium quisquam nulla porro molestiae reprehenderit a minus, saepe sint. Asperiores iste totam unde vel esse! Fugit eius dolorem error natus ipsum beatae labore perferendis aperiam debitis cum nisi assumenda et quia inventore at voluptas voluptatum, eveniet harum delectus ut iusto enim voluptatem maiores. Praesentium eos cumque hic fuga odio molestiae veniam aperiam eaque veritatis. Autem, nemo? A illum earum dolores sunt doloremque eos pariatur. Blanditiis laudantium error suscipit commodi non! Dolorum corporis, sed reprehenderit doloremque porro iure perferendis excepturi et quidem qui nemo consequuntur, unde eius rem. A impedit explicabo, quod in quibusdam necessitatibus ipsa sapiente adipisci distinctio perspiciatis iure architecto ullam repellat laudantium ex nulla voluptatum asperiores. Accusantium mollitia fuga atque itaque autem obcaecati tempora laboriosam, illo, ad distinctio corrupti laudantium delectus incidunt unde perferendis eum reprehenderit perspiciatis excepturi modi asperiores ipsum quia eligendi! Unde nobis, doloribus itaque aliquid neque magnam odit laboriosam tempora distinctio nostrum recusandae earum exercitationem maiores quis sunt vel ad sit ullam, at natus fuga impedit! Quaerat maiores doloremque, dignissimos quasi deserunt ducimus neque modi! Earum illo, velit quaerat esse aperiam a. Praesentium tempore soluta voluptatem, nemo quam accusamus autem consectetur iure, qui ipsa, magnam at. Dicta, nostrum. Fuga error maxime, sunt in perferendis aspernatur quod temporibus, similique commodi praesentium officiis dolor incidunt iusto necessitatibus ratione, veniam inventore quidem nihil? Odio iste tenetur et ducimus, eius illum nulla, delectus debitis quas voluptates non placeat praesentium consequuntur facilis iure nisi omnis temporibus eos aliquam iusto eligendi ex? Sit, quasi quos beatae veniam neque repellendus, aspernatur accusantium deserunt ipsam nemo adipisci? Obcaecati beatae corporis laborum id sit excepturi dignissimos voluptatibus quam cumque debitis labore dolorem, accusamus rem culpa perspiciatis totam autem ex dolores. Perferendis facere, dolorum quibusdam pariatur numquam optio itaque exercitationem reiciendis, vel labore ea cum ratione consequatur. Atque modi ab rerum minus. Sequi incidunt autem quibusdam quasi doloremque nostrum amet cumque recusandae eaque, ipsum similique reprehenderit provident. Saepe id nostrum tempora quaerat, fugiat molestias unde non porro placeat, dolore sit velit! Aspernatur voluptatem magnam harum doloribus quibusdam, autem quas molestias. Molestias harum ipsam aliquid tempora ullam natus quos officiis! Nam nihil id";

    if (select('#bpdTable tbody') == undefined) {
        $(document).ready(function () {
            $('#bpdTable').DataTable({
                "autoWidth": false,
                "bPaginate": false,
                "bLengthChange": false,
                "bInfo": false,
                "bFilter": false,
                "ajax": "temp/bpd.json",
                "responsive": true,

                "columns": [{
                        "defaultContent": "",
                        render: function (data, type, row, meta) {
                            return meta.row + meta.settings._iDisplayStart + 1;
                        }
                    }, {
                        "data": "nama",
                    },
                    {
                        "data": "jabatan",
                    },
                    {
                        "data": "alamat",
                    },
                ],
            });
        });
    }
});

/**
 * call img flow
 */
let imgCard = select('.img-card');
on('click', '.img-card', function (e) {

    let cardContent = select('.card-content');
    if (!imgCard.classList.contains('img-card-preview')) {
        imgCard.classList.add('img-card-preview');
        imgCard.style.backgroundSize = "50%";
        cardContent.style.overflow = "hidden";

        // add header img flow
        let closeImgFlow = '<i class="bi bi-x-lg fs-3 mx-3" style="color:white; cursor:pointer;"></i>';
        let zoomInImgFlow = '<i class="bi bi-zoom-in fs-4 mx-3" style="color:#ffffff82; cursor:pointer;"></i>';
        let zoomOutImgFlow = '<i class="bi bi-zoom-out fs-4 mx-3" style="color:#ffffff82; cursor:pointer;"></i>'
        let headerImgFlow = '<div class="d-flex justify-content-end align-items-center p-3" style="width:100%; height:50px; background:#0000006e; position: fixed; top: 0; left: 0; right: 0; z-index: 25;">' + zoomOutImgFlow + zoomInImgFlow + closeImgFlow + '</div>';
        $('#contImg').append(headerImgFlow);
        /**
         * zoom in img flow
         */
        on('click', '#contImg i.bi-zoom-in', function (e) {
            if (parseInt(imgCard.style.backgroundSize) <= 100) {
                imgCard.style.backgroundSize = parseInt(imgCard.style.backgroundSize) + 10 + '%';
            }

        });

        /**
         * zoom out img flow
         */
        on('click', '#contImg i.bi-zoom-out', function (e) {
            if (parseInt(imgCard.style.backgroundSize) >= 50) {
                imgCard.style.backgroundSize = parseInt(imgCard.style.backgroundSize) - 10 + '%';
            }
        });

        /**
         * close img flow
         */
        on('click', '#contImg i.bi-x-lg', function (e) {
            imgCard.classList.remove('img-card-preview');
            imgCard.style.removeProperty('background-size');
            cardContent.style.removeProperty('overflow');
            this.parentElement.remove();
        })
    }
});









on('click', '.btn-close', function (e) {
    select('.card-fluid').style.display = "none";
});
