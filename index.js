let likeCount = 0;
let shareCount = 0;

document.getElementById('like-btn').addEventListener('click', () => {
    likeCount++;
    document.getElementById('likes').textContent = likeCount;
});

document.getElementById('share-btn').addEventListener('click', () => {
    shareCount++;
    document.getElementById('shares').textContent = shareCount;
});

const stars = document.querySelectorAll('.star');
let selectedRating = 0;

stars.forEach(star => {
    star.addEventListener('click', () => {
        selectedRating = star.getAttribute('data-value');
        updateStars(selectedRating);
        alert(`You rated this portfolio ${selectedRating} stars. Thank you!`);
    });

    star.addEventListener('mouseover', () => {
        updateStars(star.getAttribute('data-value'));
    });

    star.addEventListener('mouseout', () => {
        updateStars(selectedRating);
    });
});

function updateStars(rating) {
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}
