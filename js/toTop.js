document.addEventListener('DOMContentLoaded', () => {
    const toTop = document.getElementById('toTop');
    const scrollThreshold = 1;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            toTop.style.display = 'flex';
        } else {
            toTop.style.display = 'none';
        }
    });

    toTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
