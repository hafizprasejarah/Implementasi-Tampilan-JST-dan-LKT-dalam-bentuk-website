// slide pertama
const carousel = document.querySelector(".carousel"),
    firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff, prevPageY, positionDiffY;

const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block"
    if (carousel.scrollLeft > scrollWidth) {
        arrowIcons[1].style.display = Math.floor(carousel.scrollLeft) == scrollWidth ? "none" : "block"
    } else if (carousel.scrollLeft < scrollWidth) {
        arrowIcons[1].style.display = Math.ceil(carousel.scrollLeft) == scrollWidth ? "none" : "block"
    } else {
        arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block"
    }

}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
    })
})

const autoSlide = () => {

    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 14;
    let valDifference = firstImgWidth - positionDiff;
    let maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    if (carousel.scrollLeft >= prevScrollLeft) {

        if (carousel.scrollLeft >= maxScrollLeft) {
            // Jika posisi sudah di akhir, jangan geser ke depan lagi
            return;
        }

        if (carousel.scrollLeft == 0 && prevScrollLeft == 0) {
            positionDiff = positionDiff * 0;
        }

        if (positionDiff > firstImgWidth / 3) {
            if (positionDiff > (firstImgWidth * 2 + 1)) {
                let multiply3 = firstImgWidth * 3;
                let valDifference3 = multiply3 - positionDiff;
                return carousel.scrollLeft += valDifference3;
            } else if (positionDiff > firstImgWidth + 1) {
                let multiply = firstImgWidth + firstImgWidth;
                let valDifference2 = multiply - positionDiff;
                return carousel.scrollLeft += valDifference2;
            } else {
                return carousel.scrollLeft += valDifference;
            }
        } else {
            return carousel.scrollLeft -= positionDiff;
        }
    } else {

        if (positionDiff > firstImgWidth / 3) {
            if (positionDiff > (firstImgWidth * 2 + 1)) {
                let multiply3 = firstImgWidth * 3;
                let valDifference3 = multiply3 - positionDiff;
                return carousel.scrollLeft -= valDifference3;
            } else if (positionDiff > firstImgWidth + 1) {
                let multiply = firstImgWidth + firstImgWidth;
                let valDifference2 = multiply - positionDiff;
                return carousel.scrollLeft -= valDifference2;
            } else {
                return carousel.scrollLeft -= valDifference;
            }
        } else {
            return carousel.scrollLeft += positionDiff;
        }
    }
}

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevPageY = e.pageY || e.touches[0].pageY;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    positionDiffY = (e.pageY || e.touches[0].pageY) - prevPageY;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
    if (Math.abs(positionDiffY) > Math.abs(positionDiff)) {
        isDragStart = false;
        carousel.classList.remove("dragging");
        isDragging = false;

    }
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if (!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);


const menu = document.querySelector(".search-menu");



if (menu) {

    // btn login
    const menuproduk = document.querySelector(".search-menu");
    document.querySelector("#search-input").onclick = () => {
        menuproduk.classList.toggle('active');

    }


}
