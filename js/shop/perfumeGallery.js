const images = [
    "../../assets/perfumes/perfume1.png",
    "../../assets/perfumes/perfume2.jpg",
    "../../assets/perfumes/perfume3.jpg",
    "../../assets/perfumes/perfume4.jpg",
    "../../assets/perfumes/perfume5.jpg",
];
let currentIndex = 0;

function updateMainImage() {
    document.getElementById("mainImage").src = images[currentIndex];

    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        dot.style.backgroundColor = index === currentIndex ? "black" : "#ccc";
    });
}

function changeImage(step) {
    currentIndex = (currentIndex + step + images.length) % images.length;
    updateMainImage();
}

function goToImage(index) {
    currentIndex = index;
    updateMainImage();
}

window.onload = updateMainImage;