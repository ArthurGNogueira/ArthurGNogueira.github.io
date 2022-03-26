let btnExpandedNav = document.querySelector("#expandedNav")
let navBar = document.getElementsByTagName("nav")

btnExpandedNav.addEventListener("click",function(){
    console.log("ok")
    navBar[0].classList.toggle("navVisible")
})


let btnDarkMode = document.querySelector("#flexSwitchCheckDefault")
let html = document.querySelector("html")

btnDarkMode.addEventListener("change",function(){
    console.log("dark")
    html.classList.toggle("dark-mode")
})

