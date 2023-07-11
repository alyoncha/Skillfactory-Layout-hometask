import '@/app/index.scss'
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