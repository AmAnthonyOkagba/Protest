


$(window).on('load', function () {
    
      setInterval(() => {
          let p = $('.preloader');
          p.css('opacity', 0);
      }, 1000); //1000

      setInterval(() => {
          let p = $('.preloader');
          p.remove(); 
      }, 2000); //2000

});