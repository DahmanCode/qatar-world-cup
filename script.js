// BUTTON EFFECT

const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('mouseover', function(e) {

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove()
        },700);
    })
})

// SWIPER

var swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 30,
});

// SEARCH BAR

const search = document.querySelector('.search')
const btn = document.querySelector('.btn-search')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus()
})