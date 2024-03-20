document.addEventListener('DOMContentLoaded', function () {
    let toggle = document.querySelector('.toggle');
    let menu = document.querySelector('.menu');

    toggle.onclick = function () {
        menu.classList.toggle('active');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var crsr = document.querySelector("#cursor");
    var blur = document.querySelector("#cursor-blur");

    document.addEventListener("mousemove", function (dets) {
        crsr.style.left = dets.x + "px";
        crsr.style.top = dets.y + "px";
        blur.style.left = dets.x - 100 + "px";
        blur.style.top = dets.y - 100 + "px";
    });
});

document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector(
            "body").style.visibility = "hidden";
        document.querySelector(
            "#loader").style.visibility = "visible";
    } else {
        document.querySelector(
            "#loader").style.display = "none";
        document.querySelector(
            "body").style.visibility = "visible";
    }
};

