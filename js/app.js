// NAV
$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});


// INDEX > animate
var fbox = document.getElementById("first");
var ftext = "MILLENNIUM CHEMICAL";
for (let i = 0, d = 0.1; i < ftext.length; i++) {
    let span = document.createElement("SAPN");
    span.classList.add("animate__animated", "animate__fadeIn");
    span.style.animationDelay = d+'s';
    d += 0.05;
    let c = document.createTextNode(ftext.charAt(i));
    span.appendChild(c);
    fbox.appendChild(span);
}

var sbox = document.getElementById("second");
var stext = "EXPANDING THE HORIZON";
for (let i = 0, d = 0.5; i < stext.length; i++) {
    let span = document.createElement("SAPN");
    span.classList.add("animate__animated", "animate__fadeIn");
    span.style.animationDelay = d+'s';
    d += 0.05;
    let c = document.createTextNode(stext.charAt(i));
    span.appendChild(c);
    sbox.appendChild(span);
}


//
