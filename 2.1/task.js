const revealElements = document.querySelectorAll('.reveal');

function checkReveal() {
  const windowHeight = window.innerHeight;
  const scrollY = window.scrollY || window.pageYOffset;

  for (const element of revealElements) {
    const elementRect = element.getBoundingClientRect();
    const elementTop = elementRect.top + scrollY;
    const elementBottom = elementTop + elementRect.height;

    if (elementBottom > scrollY && elementTop < scrollY + windowHeight) {
      element.classList.add('reveal_active');
    }
  }
}

window.addEventListener('scroll', checkReveal);
checkReveal();
