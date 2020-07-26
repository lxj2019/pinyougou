const imgList = document.getElementsByClassName("image");
const pointList = document.getElementsByClassName("point");
const preBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let index = 0,
    i;

preBtn.addEventListener('click', preIndex, false);

nextBtn.addEventListener('click', goIndex, false);


function goIndex() {
    if (index == imgList.length - 1) {
        index = 0;
    } else {
        index++;
    }
    show();
}

function preIndex() {
    if (index == 0) {
        index = imgList.length - 1;
    } else { index-- }
    show();

}

function show() {
    clearActive();
    imgList[index].style.display = "block"
    pointList[index].className += " active";

}

function clearActive() {
    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }
    for (i = 0; i < pointList.length; i++) {
        pointList[i].className = "point"
    }
}
for (let x = 0; x < pointList.length; x++) {
    pointList[x].addEventListener("click", function() {
        index = x;
        show()
    }, false)
}
window.onload = function() {
    setInterval("goIndex()", 5000);
}