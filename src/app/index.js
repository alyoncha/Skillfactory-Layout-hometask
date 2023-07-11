import '@/app/index.scss'
// core version + navigation, pagination modules:
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper('.swiper');

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu-panel").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu-panel-close").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})