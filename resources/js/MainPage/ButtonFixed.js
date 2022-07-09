const btn_fixed = document.getElementById('fixed-button')

document.onscroll = function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    if (scrollTop > 600) {
        btn_fixed.style.display = 'block'
    }
    else {
        btn_fixed.style.display = 'none'
    }
}