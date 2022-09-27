// -----------------------------ladda sidan---------------------------------
loadPage();
function loadPage() {
    document.body.style.opacity="100";
}


// -----------------------------slideshow-----------------------------------
function activePage(n) {
    let index;
    const links = document.getElementsByClassName("link");

    for (index = 0; index < links.length; index++) {
        links[index].className = links[index].className.replace(" active-page", "");
    }
    
    links[n - 1].className += " active-page";
}

// -----------------------------mune-----------------------------------
function responsiveMenu() {
    let list = document.getElementById("linkList");

    if (list.className === "link-List d-none") {
        list.className =list.className.replace(" d-none", " d-block");
    } else {
        list.className =list.className.replace(" d-block", " d-none");
    }
}

// -----------------------------slideshow-----------------------------------
let imgIndex = 1;

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
        btnImgIndex[index].className = btnImgIndex[index].className.replace(" active-btn", "");
    }

    imgs[imgIndex - 1].style.display = "block";
    btnImgIndex[imgIndex - 1].className += " active-btn";
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