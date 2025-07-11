const collectionImages = [
    "../../assets/collection.jpg",
    "../../assets/perfumes/perfume2.jpg",
    "../../assets/perfumes/perfume3.jpg",
    "../../assets/perfumes/perfume4.jpg",
    "../../assets/perfumes/perfume5.jpg",
];
let presentIndex = 0;

function updateCollectionMainImage() {
    document.getElementById("mainCollectionImage").src = collectionImages[presentIndex];

    const dots = document.querySelectorAll(".collection-dot");
    dots.forEach((dot, index) => {
        dot.style.backgroundColor = index === presentIndex ? "green" : "#ccc";
    });
}

function changeCollectionImage(step) {
    presentIndex = (presentIndex + step + collectionImages.length) % collectionImages.length;
    updateCollectionMainImage();
}

function goToCollectionImage(index) {
    presentIndex = index;
    updateCollectionMainImage();
}

window.onload = updateCollectionMainImage;