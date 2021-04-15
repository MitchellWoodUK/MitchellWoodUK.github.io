function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if(dots.style.display ==="none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read Past Updates";
        moreText.style.display = "none";
        btnText.style.minHeight = "50px";
    }
    else{
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "inline";
        btnText.style.minHeight = "50px";
    }
}