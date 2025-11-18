document.addEventListener('DOMContentLoaded', () => {
    document.fonts.load("1em LXGW WenKai Lite").then(() => {
        const loading = document.querySelector('#loading');
        loading.style.opacity = '0';
        loading.addEventListener('transitionend', () => {
            loading.style.display = 'none';
        }, { once: true });
    });
});