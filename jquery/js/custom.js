// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag
   
    let itens = $('.featured-item') // class
    
    let destaques = $('#featured') // id

    console.log(titulos.first());

    // Configuração de produtos

    $('.featured-item a').addClass('btn btn-dark stretch-link');

   //  $('.featured-item:first h4').append('<span class="position-relative top-0 start-new translate-middle badge bg-secondary" style="font-size: 0.6rem;">Novo</span>')

    jQuery(function($){
      var lastWidth = null;
      $(window).bind('resize', function(e){
          if((lastWidth == null || lastWidth < 1400) && window.innerWidth >= 1400)
          {
            $('#novo').remove() 
            $('.featured-item:first h4').append('<span id="novo" class="position-relative top-0 start-5 translate-middle badge bg-secondary" style="font-size: 0.6rem;">Novo</span>')
          }
          else if((lastWidth == null || lastWidth < 1200) && window.innerWidth >= 1200)
          {
            $('#novo').remove() 
            $('.featured-item:first h4').append('<span id="novo"  class="position-relative top-0 start-6 translate-middle badge bg-secondary" style="font-size: 0.6rem;">Novo</span>')
          }

          else if((lastWidth == null || lastWidth < 991) && window.innerWidth >= 991)
          {
            $('#novo').remove() 
            $('.featured-item:first h4').append('<span id="novo"  class="position-relative top-0 start-7 translate-middle badge bg-secondary" style="font-size: 0.6rem;">Novo</span>')
          }

          else if((lastWidth == null || lastWidth < 768) && window.innerWidth >= 768)
          {
            $('#novo').remove() 
            $('.featured-item:first h4').append('<span id="novo"  class="position-relative top-0 start-9 translate-middle badge bg-secondary" style="font-size: 0.6rem;">Novo</span>')
          }

          else if((lastWidth == null || lastWidth > 425) && window.innerWidth <= 425)
          {
            $('#novo').remove() 
            $('.featured-item:first h4').append('<span id="novo"  class="position-relative top-0 start-100 translate-middle badge bg-secondary" style="font-size: 0.5rem;">Novo</span>')
          }
          
    
          lastWidth = window.innerWidth;
      }).trigger('resize');
    });
    // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').addClass('active')
    // $('.featured-item:first h4').removeClass('active')
    // $('.featured-item:first h4').toggleClass('active')
    // $('.featured-item:first h4').hide()
    // $('.featured-item:first h4').show()
    // $('.featured-item:first h4').fadeIn(2000)
    // $('.featured-item:first h4').fadeOut()
    //  $('.featured-item:first h4').css('color', '#f00')
     
     $('.featured-item h4').dblclick( function(){

        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100',
        });

     });

     /*
      * Manipulação de eventos
      */
     $('.featured-item a').on('click', function(event){

        event.preventDefault();

        alert('Produto esgotado');

     })
     
     
     
     







})
