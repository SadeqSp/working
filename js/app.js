// NAV
$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});


// animate > fadeIn each char 
function fadeIn_each(boxName, text, class1, class2, delay, next) {
    var box = document.getElementById(boxName);
    for (let i = 0, d = delay; i < text.length; i++) {
        let span = document.createElement("SAPN");
        span.classList.add(class1, class2);
        span.style.animationDelay = d+'s';
        d += next;
        let c = document.createTextNode(text.charAt(i));
        span.appendChild(c);
        box.appendChild(span);
    }
}

let index_ftext = "MILLENNIUM CHEMICAL";
let index_stext = "EXPANDING THE HORIZON";

let class1 = "animate__animated";
let class2 = "animate__fadeIn";

fadeIn_each("index_first", index_ftext, class1, class2, 1, 0.05);
fadeIn_each("index_second", index_stext, class1, class2, 1.5, 0.05);


//
