// NAV
$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});


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

let class1 = "animate__animated";
let class2 = "animate__fadeIn";

if(page == 'index') {
    fadeIn_each("index_second", index_stext, class1, class2, 1.5, 0.05);
    fadeIn_each("index_first", index_ftext, class1, class2, 1, 0.05);
}
if(page =='csr') {
    fadeIn_each("csr_first", csr_text, class1, class2, 1, 0.05, 'yes');
}


//
