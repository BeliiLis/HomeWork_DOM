(function () {
  var book = document.getElementById('book');

  // Размер шрифта
  var fontSizes = document.querySelectorAll('.font-size');
  fontSizes.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      fontSizes.forEach(function (l) { return l.classList.remove('font-size_active'); });
      this.classList.add('font-size_active');

      book.classList.remove('book_fs-big', 'book_fs-small');
      var size = this.getAttribute('data-size');
      if (size === 'small') book.classList.add('book_fs-small');
      if (size === 'big') book.classList.add('book_fs-big');
    });
  });

  // Цвет текста
  var textColors = document.querySelectorAll('.text_color');
  textColors.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      textColors.forEach(function (l) { return l.classList.remove('color_active'); });
      this.classList.add('color_active');

      book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
      var color = this.getAttribute('data-text-color');
      if (color) book.classList.add('book_color-' + color);
    });
  });

  // Цвет фона
  var bgColors = document.querySelectorAll('.bg_color');
  bgColors.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      bgColors.forEach(function (l) { return l.classList.remove('color_active'); });
      this.classList.add('color_active');

      book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');
      var color = this.getAttribute('data-bg-color');
      if (color) book.classList.add('book_bg-' + color);
    });
  });
})();
