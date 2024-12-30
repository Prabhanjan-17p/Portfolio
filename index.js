document.querySelector(".settingForMobile").addEventListener("click", () =>{
    document.querySelector(".mobileSlide").style.right = "0";
    
})
document.querySelector(".imgMobileClose").addEventListener("click", () =>{
    document.querySelector(".mobileSlide").style.right = "-100%";
    
})

// const check = document.getElementById('check');
// const PS = document.getElementById('particles-js');
// let scriptAdded = false;
// check.addEventListener('click', () => {
//     if (!scriptAdded) {
//     scriptAdded = true;
//     PS.style.display = 'block';
//     PS.style.backgroundColor = 'black';
// } else {
//     scriptAdded = false;
//     PS.style.display = 'none';
//   }
// });
