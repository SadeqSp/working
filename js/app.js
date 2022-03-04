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
function fadeIn_each(boxName, text, class1, class2, delay, next) {
    var box = document.getElementById(boxName);
    for (let i = 0, d = delay; i < text.length; i++) {
        let span = document.createElement("SAPN");
        span.classList.add(class1, class2);

        if(((page == 'index') || (page == '')) && (boxName == 'second')) {
            span.classList.add('green');
        }
        if((page == 'csr') && ((i == 0) || (i == 10) || (i == 17))) {
            span.classList.add('green');
        }
        if((page == 'about') && (boxName == 'first')) {
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
let abt_ftext = "WHO WE ARE";
let abt_ttext = "GLOBAL PRESENCE";
let pro_text = "PRODUCTS";

let class1 = "wow";
let class2 = "fadeIn";

if((page == 'index') || (page == '')) {
    console.log('home');
    
    fadeIn_each("first", index_ftext, class1, class2, 1, 0.1);
    fadeIn_each("second", index_stext, class1, class2, 1.5, 0.1);
}
if(page == 'csr') {
    fadeIn_each("first", csr_text, class1, class2, 0.5, 0.1);
}
if(page == 'contact') {
    fadeIn_each("first", con_text, class1, class2, 0.5, 0.1);
}
if(page == 'about') {
    fadeIn_each("first", abt_ftext, class1, class2, 0.5, 0.1);
    fadeIn_each("abt_third", abt_ttext, class1, class2, 0, 0.05);
}
if(page == 'products') {
    fadeIn_each("first", pro_text, class1, class2, 0.5, 0.1);
}


// The MIT License (MIT)
/*
    Copyright (c) 2016 Thomas Grainger.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.


    Portions of this wow.js Software may utilize the following copyrighted material, the use of which is hereby acknowledged.

    WOW: https://github.com/matthieua/WOW/tree/20848c410fe32d161c2330e1d261b59512094f81

    Copyright (C) 2014; Matthieu Aussaguel

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
