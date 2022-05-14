const posts = document.querySelectorAll('.main__explore-tab_post-img');

Array.from(posts).forEach(post => {
    post.addEventListener('click', (e) => {
        location.href = `/p/${post.classList[1]}`;
    });
});