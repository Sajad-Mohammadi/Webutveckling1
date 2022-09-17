// -----------------------------slideshow-----------------------------------
let imgIndex = 1;
showImg(imgIndex);

function showImg(n) {
    let index;
    const imgs = document.getElementsByClassName("iphone");
    const btnImgIndex = document.getElementsByClassName("btn-imgIndex");

    if (n > imgs.length) {
        imgIndex = 1;
    } if (n < 1) {
        imgIndex = imgs.length;
    }

    for (index = 0; index < imgs.length; index++) {
        imgs[index].style.display = "none";
    }

    for (index = 0; index < btnImgIndex.length; index++) {
        btnImgIndex[index].className = btnImgIndex[index].className.replace(" active", "");
    }

    for (index = 0; index < btnImgIndex.length; index++) {
        btnImgIndex[index].className = btnImgIndex[index].className.replace(" active", "");
    }

    imgs[imgIndex - 1].style.display = "block";
    btnImgIndex[imgIndex - 1].className += " active";
}

function controlSlide(n) {
    imgIndex += n;
    showImg(imgIndex);
}

function btnActive(n) {
    imgIndex = n;
    showImg(imgIndex);
}
// ----------------------------------------------------------------