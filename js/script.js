window.addEventListener('scroll', function() {
    const footer = document.querySelector('footer');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollTop > 100) { //  Всплывает, когда прокрутка больше 100px
      footer.style.bottom = '0';
    } else {
      footer.style.bottom = '-60px'; //  Скрывается, когда прокрутка меньше 100px
    }
  });
  
  