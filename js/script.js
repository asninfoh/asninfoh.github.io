/* READMORE */
document.addEventListener("DOMContentLoaded", function () {

    var adSource = document.getElementById("readmore");
    var postBody = document.querySelector(".post");

    if (!adSource) {
        console.log("Ad source tidak ditemukan");
        return;
    }

    if (!postBody) {
        console.log("Article post tidak ditemukan");
        return;
    }

    // Ambil semua elemen konten
    var elements = postBody.querySelectorAll(
        "p, img, h2, h3, h4, blockquote, ul, ol"
    );

    if (elements.length === 0) {
        console.log("Tidak ada elemen konten");
        return;
    }

    // Hitung posisi tengah
    var middleIndex = Math.floor(elements.length / 2);

    // Clone iklan
    var adClone = adSource.cloneNode(true);

    adClone.style.display = "block";
    adClone.removeAttribute("id");

    // Insert ke tengah
    elements[middleIndex].insertAdjacentElement(
        "afterend",
        adClone
    );

});


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