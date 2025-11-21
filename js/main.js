/*=============== SHOW MENU (Menyuni ochish va yopish) ===============*/
const navMenu = document.getElementById("navMenu"),
    navToggle = document.getElementById("navToggle"),
    navClose = document.getElementById("navClose");

// Menyu ochish (navToggle bosilganda)
if (navToggle) {
    navToggle.addEventListener("click", () => {
        // navMenu ga "show-menu" classini qo'shadi
        navMenu.classList.add("show-menu");
    });
}

// Menyu yopish (navClose bosilganda)
if (navClose) {
    navClose.addEventListener("click", () => {
        // navMenu dan "show-menu" classini olib tashlaydi
        navMenu.classList.remove("show-menu");
    });
}

/*=============== REMOVE MENU MOBILE (Havola bosilganda yopish) ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById("navMenu");
    // Havola bosilganda menyuni yopish
    navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

// ... (scroll event ishlashini ta'minlash uchun hech nima o'zgartirilmagan) ...


const shadowHeader = () => {
      const header = document.getElementById('header')
      this.scrollY >= 50 ? header.classList.add('shadow-header')
      :header.classList.remove('shadow-header')
}


window.addEventListener('scroll',shadowHeader)




// ----home

const sr = ScrollReveal({
      origin:'top',
      distance:'60px',
      duration: 2000,
      delay:300,
})

sr.reveal('.home__shape',{origin : 'bottom'})
sr.reveal('.home__coffee',{delay : 1000,distance: "200px",duration:1500})
sr.reveal('.home__splash',{delay : 1600,scale:0,duration:1500})
sr.reveal('.home__bean-1, .home__bean-2',{delay : 2200,scale:0,duration:1500, rotate:{z:180}})
sr.reveal('.home__ice-1, .home__ice-2',{delay : 2600,scale:0,duration:1500, rotate:{z:180}})
sr.reveal('.home__leaf',{delay : 2800,scale:0,duration:1500, rotate:{z:90}})
sr.reveal('.home__title',{delay : 3500})
sr.reveal('.collection',{delay : 5000})
sr.reveal('.home__data, .home__sticker',{delay : 4000})





/*=============== SWIPER (Collection slider) - AVTOMATIK AYLANAISH (MARQUEE) ===============*/

const collectionSwiper = new Swiper('.collection__swiper', {
    // Mobil/kichik ekranlar uchun sozlama
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    grabCursor: true,

    // AVTOMATIK AYLANAISH (Marquee effekti)
    autoplay: {
        delay: 0, // Kuting! delay nolga teng bo'lsa, tez aylanadi
        disableOnInteraction: false, // Foydalanuvchi bossa ham to'xtamasin
    },
    speed: 5000, // Sekin aylanish tezligi (5 soniyada to'liq o'tish)
    
    // NAVIGATION va PAGINATION o'chirildi
    // pagination: { el: '.swiper-pagination', clickable: true }, - KERAK EMAS

    // Katta ekranlar uchun responsiv sozlamalar
    breakpoints: {
        750: {
            slidesPerView: 2,
            spaceBetween: 20, // Bo'shliqni kamaytirdim
        },
        1000: {
            slidesPerView: 3, // Bir vaqtda 3 ta ko'rinsin
            spaceBetween: 25,
        },
    }
});


/*=============== IMG BOSILGANDA BEANLARNI SURISH FUNKSIYASI (O'zgarishsiz) ===============*/

const collectionImages = document.querySelectorAll('.collection__images li');

collectionImages.forEach(slide => {
    const image = slide.querySelector('.collection__image');
    
    image.addEventListener('click', () => {
        if (slide.classList.contains('bean-moved')) {
            slide.classList.remove('bean-moved');
        } else {
            slide.classList.add('bean-moved');
        }
    });
});