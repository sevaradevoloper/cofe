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
sr.reveal('.collection__title',{delay : 3500})
sr.reveal('.opinion__title',{delay :3500})
sr.reveal('.opinion__image',{delay : 3700,scale:0,duration:1000, rotate:{z:180}})
sr.reveal('.home__data, .home__sticker',{delay : 4000})
sr.reveal('.about__coffee',{delay : 1000,distance: "200px",duration:1500})
sr.reveal('.about__title',{delay : 1000})
sr.reveal('.about__leaf-1, .about__leaf-2',{delay : 2600,scale:0,duration:1500, rotate:{z:180}})
sr.reveal('.about__shape',{origin : 'bottom'})
sr.reveal('.commitment__coffee',{delay : 1600,scale:0,duration:1500})
sr.reveal('.commitment__shape',{origin : 'bottom'})
sr.reveal('.quality__leaf-1 , .quality__leaf-2',{delay : 1000,distance: "200px",duration:1500})
sr.reveal('.quality__coffee',{origin : 'bottom'})

const ab = ScrollReveal({
      origin:'left',
      distance:'60px',
      duration: 2000,
      delay:300,
})
ab.reveal('.about__description',{origin : 'left'})
ab.reveal('.commitment__description',{origin : 'top'})
ab.reveal('.commitment__title',{origin : 'left'})
ab.reveal('.quality__description',{origin : 'left'})
ab.reveal('.quality__title',{origin : 'top'})
ab.reveal('.headquarters__title',{origin : 'top'})
sr.reveal('.headquarters-slide',{origin : 'bottom'})






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









sr.reveal('.work__title', { origin: 'left', distance: '100px', delay: 300 });

// 2. Har bir qadamni (li) chapdan o'ngga ketma-ket chiqarish
sr.reveal('.work-slide', { 
    origin: 'left', 
    distance: '100px', 
    delay: 1000, 
    interval: 200, // Har bir qadam 200ms kechikish bilan chiqadi
    duration: 2000,
    
});

// 3. Tugma
sr.reveal('.work__container button', { origin: 'bottom', distance: '50px', delay: 1000, reset: false });





















// TAB switching
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".cards");
const contentTitles = document.querySelectorAll(".content__title"); // Sarlavhalarni yangilash uchun

// CARD selections and Price tracking
let selection = {
    drink: "____",
    bean: "____",
    quantity: "____",
    grind: "____",
    delivery: "____"
};
let totalPrice = 0.00;

const priceMap = {
    Capsule: 10.00, Filter: 12.00, Espresso: 14.00,
    'Single Origin': 2.00, Decaf: 0.00, Blended: 1.00,
    '250g': 0.00, '500g': 5.00, '1000g': 9.00,
    Wholebean: 0.00, Cafetiére: 0.00,
    'Every Week': 0.00, 'Every 2 Weeks': -2.00, 'Every Month': -5.00
};

// Pastdagi yig'indi matnni yangilash funksiyasi
const updateSummarySentence = () => {
    document.querySelector('[data-summary="drink"]').textContent = selection.drink;
    document.querySelector('[data-summary="bean"]').textContent = selection.bean;
    document.querySelector('[data-summary="quantity"]').textContent = selection.quantity;
    document.querySelector('[data-summary="grind"]').textContent = selection.grind;
    document.querySelector('[data-summary="delivery"]').textContent = selection.delivery;
}

// ------------------- TAB MANTIQI -------------------
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const selected = tab.getAttribute("data-tab");

        contents.forEach(c => {
            c.classList.add("hidden");
            // Karta sarlavhalarini yangilash
            const title = c.previousElementSibling;
            if (title && title.classList.contains('content__title')) {
                 title.classList.add("hidden-title");
            }
            
            if (c.getAttribute("data-content") === selected) {
                c.classList.remove("hidden");
                // Faqat aktiv kartaning sarlavhasini ko'rsatish
                if (title && title.classList.contains('content__title')) {
                    title.classList.remove("hidden-title");
                }
            }
        });
    });
});


// ------------------- CARD TANLASH MANTIQI -------------------
contents.forEach(group => {
    group.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
            const type = group.getAttribute("data-content");
            const newValue = card.getAttribute("data-value");
            const newPrice = parseFloat(card.getAttribute("data-price"));
            
            // Oldingi narxni olib tashlash
            const oldValue = selection[type];
            if (oldValue !== "____") {
                 totalPrice -= priceMap[oldValue] || 0;
            }

            // Yangi qiymat va narxni qo'shish
            selection[type] = newValue;
            totalPrice += newPrice;

            // Aktiv klassni boshqarish
            group.querySelectorAll(".card").forEach(c => c.classList.remove("active"));
            card.classList.add("active");

            updateSummarySentence(); // Pastdagi xulosani yangilash
        });
    });
});

// ------------------- CREATE PLAN (MODALNI OCHISH) -------------------
const createBtn = document.getElementById("createPlanBtn");
const modal = document.getElementById("modal");
const summaryText = document.getElementById("summaryText");
const finalPrice = document.getElementById("finalPrice");
const modalClose = document.getElementById("modalClose");

createBtn.addEventListener("click", () => {
    // Barcha tanlovlar qilinganmi?
    const isComplete = Object.values(selection).every(val => val !== "____");

    if (!isComplete) {
        alert("Iltimos, reja tuzish uchun barcha 5 ta bandni tanlang!");
        return;
    }

    // Narxni to'g'irlash (Boshlang'ich narxni aniqlang, masalan 14.00)
    // Eng past 'Filter' 12.00 dan boshlanadi, shuning uchun boshlang'ich narx 12.00 dan yuqori bo'lishi mumkin.
    // Oddiy hisob-kitob uchun faqat qo'shimchalarni qo'shamiz
    
    // Matnni tayyorlash
    summaryText.innerHTML = `
        I drink my coffee as <b style="color:var(--first-color)">${selection.drink}</b>, 
        with a <b style="color:var(--first-color)">${selection.bean}</b> type of bean. 
        <b style="color:var(--first-color)">${selection.quantity}</b>, ground ala 
        <b style="color:var(--first-color)">${selection.grind}</b>, 
        sent to me <b style="color:var(--first-color)">${selection.delivery}</b>.
    `;
    
    // Narxni formatlash
    finalPrice.textContent = `$${totalPrice.toFixed(2)} / mo`;
    
    modal.classList.remove("hidden");
});

// Modalni yopish
modalClose.addEventListener('click', () => {
    modal.classList.add("hidden");
});


// ------------------- CHECKOUT (DONE MODALNI OCHISH) -------------------
document.getElementById("checkoutBtn").addEventListener("click", () => {
    modal.classList.add("hidden");
    document.getElementById("done").classList.remove("hidden");
});

// Done Modalni yopish
document.getElementById("doneClose").addEventListener("click", () => {
    document.getElementById("done").classList.add("hidden");
});


// Boshlang'ich yuklashda yig'indi matnni to'ldirish
document.addEventListener('DOMContentLoaded', updateSummarySentence);