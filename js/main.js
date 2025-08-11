const toogle = document.getElementById("toogle")
const page = document.getElementById("page")
const yopish = document.getElementById("yopish")


toogle.addEventListener("click", () => {
    page.classList.add("page-hide")
    page.classList.add("page-durition")
})
yopish.addEventListener("click", () => {
    page.classList.remove("page-hide")
    page.classList.add("page-durition")
})

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})