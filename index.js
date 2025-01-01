document.querySelector(".settingForMobile").addEventListener("click", () => {
    document.querySelector(".mobileSlide").style.right = "0";

})
document.querySelector(".imgMobileClose").addEventListener("click", () => {
    document.querySelector(".mobileSlide").style.right = "-100%";

})

// For style
// function breakMyName() {
//     var h1 = document.querySelector("h1");
//     var h1Text = h1.textContent

//     var splitText = h1Text.split("");

//     var clut = ""

//     splitText.forEach(function (el) {
//         clut += `<span>${el}</span>`
//     })

//     h1.innerHTML = clut
// }

// breakMyName()

// gsap.from("span",{
//     y:50,
//     opacity:0,
//     duration: 0.5,
//     delay: 4.2,
//     stagger: 0.08
// })
