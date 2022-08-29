let btn = document.querySelector("#btn")
let Home = document.querySelector("#Home")
let toolHome = document.querySelector("#toolHome")
let About_Us = document.querySelector("#About_Us")
let toolAbout_Us = document.querySelector("#toolAbout_Us")
let Service = document.querySelector("#Service")
let toolService = document.querySelector("#toolService")
let nav = document.querySelector(".nav")
let menuBtn = document.querySelector(".menuBtn")
let menuName = document.querySelector(".menuName")

btn.onclick = function(){
    nav.classList.toggle("active");
    menuBtn.classList.toggle("active");
    menuName.classList.toggle("active");
    Home.classList.toggle("active");
    toolHome.classList.toggle("active");
    About_Us.classList.toggle("active");
    toolAbout_Us.classList.toggle("active");
    Service.classList.toggle("active");
    toolService.classList.toggle("active");
}