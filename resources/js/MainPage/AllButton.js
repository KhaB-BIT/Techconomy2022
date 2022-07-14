const btn_fixed = document.getElementById('fixed-button')

document.onscroll = function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const widthDevice = screen.availWidth
    
    if (widthDevice >= 1200) {
        if (scrollTop > 600 ) {
            btn_fixed.style.display = 'block'
        }
        else {
            btn_fixed.style.display = 'none'
        }
    }
    else {
        if (widthDevice >= 768 && scrollTop > 300) {
            if (scrollTop > 300 ) {
                btn_fixed.style.display = 'block'
            }
            else {
                btn_fixed.style.display = 'none'
            }
        }
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

//scroll to top
document.getElementById('scrollToTop').addEventListener("click", function () {
    //Nếu button được click thì nhảy về đầu trang
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

//xử lý đóng mở nav mobile
const navMobile = document.getElementById('nav-mobile')

document.getElementById('menu-mobile').addEventListener("click", function() {
    navMobile.classList.toggle('open')
})

document.getElementById('nav-mobile--close').addEventListener("click", function() {
    navMobile.classList.toggle('open')
})

document.querySelectorAll('.nav__link').forEach( el => el.addEventListener("click", function() {
    navMobile.classList.toggle('open')
}))

document.onscroll = function() {
    const scrollTop1 = window.scrollY || document.documentElement.scrollTop
    console.log(scrollTop1)
    if (scrollTop1 >10) {
        navMobile.classList.remove('open')
    }
}