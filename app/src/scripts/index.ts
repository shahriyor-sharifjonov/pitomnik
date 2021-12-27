const headerButton: HTMLButtonElement =
  document.querySelector(".header__button");
const headerMenu: HTMLUListElement = document.querySelector(".header__menu");
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
};

headerButton.onclick = menuToggle;

window.onclick = (e: MouseEvent) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle();
};

window.addEventListener("click", function (e) {
    if(e.target.classList.contains('header__link')){
      menuToggle()
    }
    if(e.target.classList.contains('popup__close')){
      console.log('yes');
      
      const popups = document.querySelectorAll('.popup');
      popups.forEach(el => {
        el.classList.remove('active')
      });
    }
});

function openPopup(){
  document.querySelector('.popup').classList.add('active');
}