root = document.querySelector(':root');

window.onscroll = function (e) {  
    var scrollVal = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    root.style.setProperty('--blurVal', scrollVal / 50 + "px");
} 