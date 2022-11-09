const menuToggle = document.querySelector('.menuToggle');
menuToggle.onclick = function(){
  menuToggle.classList.toggle('active');
}

window.addEventListener('scroll', function (){
  const header = document.querySelector('header');
  header.classList.toggle('sticky', this.window.scrollY > 0);
})  