const btn_fixed = document.getElementById('fixed-button')

document.onscroll = function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const widthDevice = screen.availWidth
    if (scrollTop > 600 && widthDevice >= 768) {
        btn_fixed.style.display = 'block'
    }
    else {
        btn_fixed.style.display = 'none'
    }
}

//xu ly dong - mo dang ky
const closePopup = document.getElementById('register__close')
const containerRegister = document.querySelector('.container-register')
const btnRegister = document.getElementById('button--register')

btnRegister.onclick = function () {
    containerRegister.style.display = 'block'
}

btn_fixed.onclick = function () {
    containerRegister.style.display = 'block'
}

closePopup.onclick = function () {
    containerRegister.style.display = 'none'
}

// //scroll to top
// document.getElementById('scrollToTop').addEventListener("click", function () {
//     //Nếu button được click thì nhảy về đầu trang
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// });