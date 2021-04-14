function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if(dots.style.display ==="none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read Past Updates";
        moreText.style.display = "none";
        btnText.style.fontSize = "1vw";
    }
    else{
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "inline";
        btnText.style.fontSize = "1vw";
    }
}