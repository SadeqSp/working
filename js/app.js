// nav toggling
$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});


// nav scrolling
window.onscroll = function() { scrollFunction() };
function scrollFunction() {
    var logo = document.getElementById("logo");
    var logoImg = document.getElementById("logoImg");
    var toggle = document.getElementById("toggle");

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        if ($(window).width() >= 600) {
            logo.style.backgroundColor = 'rgba(250,250,250, 0.9)';
            logo.style.height = '110px';
            logoImg.style.width = '80px';
            toggle.style.top = '40px';
        } else {
            logo.style.backgroundColor = 'rgba(250,250,250, 0.9)';
        }
    } else {
        if ($(window).width() >= 600) {
            logo.style.backgroundColor = 'rgba(250,250,250, 0)';
            logo.style.height = '130px';
            logoImg.style.width = '100px';
            toggle.style.top = '50px';
        } else {
            logo.style.backgroundColor = 'rgba(250,250,250, 0)';
        }
    }
}


// detect page name
let path = window.location.pathname;
let html = path. split("/"). pop();
let page = html.replace(".html", "");


// animate > fadeIn each char 
function fadeIn_each(boxName, text, class1, class2, delay, next, orange=0) {
    var box = document.getElementById(boxName);
    for (let i = 0, d = delay; i < text.length; i++) {
        let span = document.createElement("SAPN");
        span.classList.add(class1, class2);
        if((page == 'csr') && ((i == 0) || (i == 10) || (i == 17))) {
            span.classList.add('green');
        }
        if(page == 'about') {
            span.classList.add('green');
        }
        span.style.animationDelay = d+'s';
        d += next;
        let c = document.createTextNode(text.charAt(i));
        span.appendChild(c);
        box.appendChild(span);
    }
}

let index_ftext = "MILLENNIUM CHEMICAL";
let index_stext = "EXPANDING THE HORIZON";
let csr_text = "CORPORATE SOCIAL RESPONSIBILITY";
let con_text = "GET IN TOUCH WITH US";
let abt_text = "WHO WE ARE";

let class1 = "animate__animated";
let class2 = "animate__fadeIn";

if(page == 'index') {
    fadeIn_each("index_second", index_stext, class1, class2, 1.5, 0.05);
    fadeIn_each("index_first", index_ftext, class1, class2, 1, 0.05);
}
if(page == 'csr') {
    fadeIn_each("csr_first", csr_text, class1, class2, 0.5, 0.05, 'yes');
}
if(page == 'contact') {
    fadeIn_each("con_first", con_text, class1, class2, 0.5, 0.05);
}
if(page == 'about') {
    fadeIn_each("abt_first", abt_text, class1, class2, 0.5, 0.05);
}


// csr slider animate-scrolling
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50;
    
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);