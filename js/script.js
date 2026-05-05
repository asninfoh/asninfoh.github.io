/* BLANK TARGET */
$(document.links).filter(function () {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');

/* BACK TO TOP */
const btn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    btn.style.display = window.scrollY > 200 ? "block" : "none";
};

btn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};