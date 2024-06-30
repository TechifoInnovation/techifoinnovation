document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById("btn");
    const dropDown = document.getElementById("drop-down-menu");

    btn.addEventListener('click', () => {
        dropDown.classList.toggle("show");
    });
});
