const humburgerBtn = document.querySelector(' .humburger')
;
const menuBar = document.querySelector(" .responsive-nav")
;
humburgerBtn.addEventListener('click', function () {
    menuBar.classList.toggle('active');
});