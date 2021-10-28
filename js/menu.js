export function ativaMenu() {
    const menuBtn = document.querySelector('.menu');


    menuBtn.addEventListener('click', menuActive);
    menuBtn.addEventListener('touchstart', menuActive)


    function menuActive(event) {
        if (event.type === 'touchstart') event.preventDefault()

        const element = document.querySelector(".containerMenu");

        element.classList.toggle("hidden");

        if (menuBtn.classList.contains('fa-bars')) {
            menuBtn.classList.remove('fa-bars')
            menuBtn.classList.add('fa-times')
        } else {
            menuBtn.classList.remove('fa-times')
            menuBtn.classList.add('fa-bars')
        }
    }
}