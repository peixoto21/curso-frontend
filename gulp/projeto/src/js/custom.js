// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function () {

  // $('.owl-carousel').owlCarousel();

  let titulos = $('h4') // tag

  let itens = $('.featured-item') // class

  let destaques = $('#featured') // id

  console.log(titulos.first());

  // Configuração de produtos

  $('.featured-item a').addClass('btn btn-dark stretch-link');

  //  $('.featured-item:first h4').append('<span class="position-relative top-0 start-new translate-middle badge bg-secondary" style="font-size: 0.6rem;">Novo</span>')

  // jQuery(function ($) {
  //   var lastWidth = null;
  //   $(window).bind('resize', function (e) {
  //     if ((lastWidth == null || lastWidth < 1400) && window.innerWidth >= 1400) {
  //       $('#novo').remove()
  //       $('.featured-item:first h4').append('<span id="novo" class="position-relative top-0 start-5 translate-middle badge bg-secondary" style="font-size: 0.6rem;">Novo</span>')
  //     }
  //     else if ((lastWidth == null || lastWidth < 1200) && window.innerWidth >= 1200) {
  //       $('#novo').remove()
  //       $('.featured-item:first h4').append('<span id="novo"  class="position-relative top-0 start-6 translate-middle badge bg-secondary" style="font-size: 0.6rem;">Novo</span>')
  //     }

  //     else if ((lastWidth == null || lastWidth < 991) && window.innerWidth >= 991) {
  //       $('#novo').remove()
  //       $('.featured-item:first h4').append('<span id="novo"  class="position-relative top-0 start-7 translate-middle badge bg-secondary" style="font-size: 0.6rem;">Novo</span>')
  //     }

  //     else if ((lastWidth == null || lastWidth < 768) && window.innerWidth >= 768) {
  //       $('#novo').remove()
  //       $('.featured-item:first h4').append('<span id="novo"  class="position-relative top-0 start-9 translate-middle badge bg-secondary" style="font-size: 0.6rem;">Novo</span>')
  //     }

  //     else if ((lastWidth == null || lastWidth > 425) && window.innerWidth <= 425) {
  //       $('#novo').remove()
  //       $('.featured-item:first h4').append('<span id="novo"  class="position-relative top-0 start-100 translate-middle badge bg-secondary" style="font-size: 0.5rem;">Novo</span>')
  //     }


  //     lastWidth = window.innerWidth;
  //   }).trigger('resize');
  // });
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

  $('.featured-item h4').dblclick(function () {

    $(this).css({
      'color': '#f00',
      'background': '#ff0',
      'font-weight': '100',
    });

  });

  /*
    * Manipulação de eventos
    */
  $('#emfalta').on('click', function (event) {

    event.preventDefault();

    alert('Produto esgotado');

  })

  $('.estoque').on('click', function (event) {

    event.preventDefault();
    alert('Produto em estoque!')

  })

  //   $('.owl-carousel').owlCarousel({
  //     margin:10,
  //     responsiveClass:true,
  //     responsive:{
  //         0:{
  //             items:1,
  //             nav:true
  //         },
  //         600:{
  //             items:3,
  //             nav:false
  //         },
  //         1000:{
  //             items:5,
  //             nav:true,
  //             loop:false
  //         }
  //     }
  // })
  /* 
    * Callback
    * entendendo ações que começam ao termino de outra
    */
  //  $('.featured-item:nth(1)')
  //  .hide(500, function(){
  //     // este é o callback
  //     console.log( $(this).find('h4').text() + ' esgotado')
  //  })
  //  .show(500, function(){
  //     console.log( $(this).find('h4').text() + ' em estoque')
  //  })


  /*
  * Animações
  */
  // const duracao = 1000 // equivalenta a 1 segundo

  // $('.featured-item:nth(0)')
  //    .hide(duracao)
  //    .show(duracao)
  //    .fadeOut(duracao)
  //    .fadeIn(duracao)
  //    .toggle(duracao)
  //    .toggle(duracao)

  $('#form-submit').on('click', function (e) {

    e.preventDefault()

    if ($('#email').val() != '') {

      $('#email').animate({
        opacity: "toggle",
        top: "-50"
      }, 500, function () {
        console.log($(this).val())
      })

    }


  });


  /*
  * Ouvinte de eventos .nav-modal-open
  */
  $('.nav-modal-open').on('click', function (e) {

    e.preventDefault();

    let elem = $(this).attr('rel')

    $('.modal-body').html($('#' + elem).html())

    $('.modal-header h5.modal-title').html($(this).text())

    let myModal = new bootstrap.Modal($('#modelId'))

    myModal.show()


  })


  /*
  * TODO: incrementar a validação
  * - checar se o nome é válido (mais de 2 caracteres)
  * - checar se o email é válido com ao menos um "@" e "."
  * - checar se o cpf é válido com regex
  */
  function validate(elem) {
    if (elem.val() == '') {

      console.log('o campo de ' + elem.attr('name') + ' é obrigatório')

      // elem.parent().find('.text-muted').show()

      elem.addClass('invalid')
      elem.addClass('is-invalid')
      elem.removeClass('is-valid')

      return false
    } else {
      // elem.parent().find('.text-muted').hide()
      elem.removeClass('invalid')
      elem.removeClass('is-invalid')
      elem.addClass('is-valid')
    }
  }

  function validateEmail(elem) {
    const EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    // const emailValid2 = new RegExp('@.','g');
    console.log('elemento é ' + elem.val());

    if (elem.val() == '') {
      console.log("" + elem.attr('name') + ' vazio')

      // elem.parent().find('.text-muted').show()

      elem.addClass('invalid')
      elem.addClass('is-invalid')
      elem.removeClass('is-valid')

    }
    else if (EmailRegex.test(elem.val())) {

      // elem.parent().find('.text-muted').hide()
      elem.removeClass('invalid')
      elem.removeClass('is-invalid')
      elem.addClass('is-valid')
    }
    else {
      console.log('' + elem.attr('name') + ' invalido')

      // elem.parent().find('.text-muted').show()

      elem.addClass('invalid')
      elem.addClass('is-invalid')
      elem.removeClass('is-valid')
      // console.log(EmailRegex)
    }

  }

  function validateCEP(elem) {
    const cepRegex = /^[0-9]{5}-[0-9]{3}$/;

    if (elem.val() == '') {
      console.log("" + elem.attr('name') + ' vazio')

      elem.addClass('invalid')
      elem.addClass('is-invalid')
      elem.removeClass('is-valid')
    }

    else if (cepRegex.test(elem.val())) {

      elem.removeClass('invalid')
      elem.removeClass('is-invalid')
      elem.addClass('is-valid')
    }
    else {
      console.log('' + elem.attr('name') + ' invalido')

      elem.addClass('invalid')
      elem.addClass('is-invalid')
      elem.removeClass('is-valid')

      console.log(cepRegex)
    }


  }

  function validatePhone(elem) {
    const cepRegex = /^\(\d{2}\)\d{4,5}-?\d{4}/g;

    if (elem.val() == '') {
      console.log("" + elem.attr('name') + ' vazio')

      elem.addClass('invalid')
      elem.addClass('is-invalid')
      elem.removeClass('is-valid')
    }

    else if (cepRegex.test(elem.val())) {

      elem.removeClass('invalid')
      elem.removeClass('is-invalid')
      elem.addClass('is-valid')
    }
    else {
      console.log('' + elem.attr('name') + ' invalido')

      elem.addClass('invalid')
      elem.addClass('is-invalid')
      elem.removeClass('is-valid')

      console.log(cepRegex)
    }
  }

  function validateCpf(elem) {
    const cepRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

    if (elem.val() == '') {
      console.log("" + elem.attr('name') + ' vazio')

      elem.addClass('invalid')
      elem.addClass('is-invalid')
      elem.removeClass('is-valid')
    }

    else if (cepRegex.test(elem.val())) {

      elem.removeClass('invalid')
      elem.removeClass('is-invalid')
      elem.addClass('is-valid')
    }
    else {
      console.log('' + elem.attr('name') + ' invalido')

      elem.addClass('invalid')
      elem.addClass('is-invalid')
      elem.removeClass('is-valid')

      console.log(cepRegex)
    }



  }


  $('body').on('submit', '.modal-body .form', function () {



    const inputName = $('#nome')
    const inputEmail = $('#e-mail')
    const inputCep = $('#cep')
    const inputPhone = $('#phone')
    const inputCpf = $('#cpf')

    // console.log(inputName.val())
    // console.log(inputEmail.val())

    validate(inputName)
    validateEmail(inputEmail)
    validateCEP(inputCep)
    validatePhone(inputPhone)
    validateCpf(inputCpf)

    if (inputEmail.hasClass('invalid') || inputName.hasClass('invalid') || inputCep.hasClass('invalid') || inputPhone.hasClass('invalid') || inputCpf.hasClass('invalid')) {
      console.log('verificar campos obrigatórios')
      return false
    }

  })

  $('body').on('focusout', '#nome', function () {
    validate($(this))
  })

  $('body').on('focusout', '#e-mail', function () {
    validateEmail($(this))
  })


  $('body').on('focus', '#date', function () {
    $(this).datepicker()
    validate($(this))
  })

  $('body').on('blur', '#date', function () {

    $(this).mask('00/00/0000');
    validate($(this))
  })

  $('body').on('blur', '#time', function () {
    validate($(this))
    $(this).mask('00:00');
  })

  $('body').on('blur', '#cep', function () {
    validateCEP($(this))
    $(this).mask('00000-000');
  })

  $('body').on('blur', '#phone', function () {
    validatePhone($(this))
    $(this).mask('(00)00000-0000');
  })

  $('body').on('blur', '#cpf', function () {
    validateCpf($(this))
    $(this).mask('000.000.000-00');
  })

  var el = $('.owl-carousel');

  var carousel;
  var carouselOptions = {
    margin: 20,
    nav: false,
    dots: true,
    slideBy: 'page',
    responsive: {
      0: {
        items: 1,
        
        rows: 3 //custom option not used by Owl Carousel, but used by the algorithm below

      },
      768: {
        items: 3,
        rows: 2 //custom option not used by Owl Carousel, but used by the algorithm below
      },
      991: {
        items: 3,
        rows: 1 //custom option not used by Owl Carousel, but used by the algorithm below
      }
    }
  };

  //Taken from Owl Carousel so we calculate width the same way
  var viewport = function () {
    var width;
    if (carouselOptions.responsiveBaseElement && carouselOptions.responsiveBaseElement !== window) {
      width = $(carouselOptions.responsiveBaseElement).width();
    } else if (window.innerWidth) {
      width = window.innerWidth;
    } else if (document.documentElement && document.documentElement.clientWidth) {
      width = document.documentElement.clientWidth;
    } else {
      console.warn('Can not detect viewport width.');
    }
    return width;
  };

  var severalRows = false;
  var orderedBreakpoints = [];
  for (var breakpoint in carouselOptions.responsive) {
    if (carouselOptions.responsive[breakpoint].rows > 1) {
      severalRows = true;
    }
    orderedBreakpoints.push(parseInt(breakpoint));
  }

  //Custom logic is active if carousel is set up to have more than one row for some given window width
  if (severalRows) {
    orderedBreakpoints.sort(function (a, b) {
      return b - a;
    });
    var slides = el.find('[data-slide-index]');
    var slidesNb = slides.length;
    if (slidesNb > 0) {
      var rowsNb;
      var previousRowsNb = undefined;
      var colsNb;
      var previousColsNb = undefined;

      //Calculates number of rows and cols based on current window width
      var updateRowsColsNb = function () {
        var width = viewport();
        for (var i = 0; i < orderedBreakpoints.length; i++) {
          var breakpoint = orderedBreakpoints[i];
          if (width >= breakpoint || i == (orderedBreakpoints.length - 1)) {
            var breakpointSettings = carouselOptions.responsive['' + breakpoint];
            rowsNb = breakpointSettings.rows;
            colsNb = breakpointSettings.items;
            break;
          }
        }
      };

      var updateCarousel = function () {
        updateRowsColsNb();

        //Carousel is recalculated if and only if a change in number of columns/rows is requested
        if (rowsNb != previousRowsNb || colsNb != previousColsNb) {
          var reInit = false;
          if (carousel) {
            //Destroy existing carousel if any, and set html markup back to its initial state
            carousel.trigger('destroy.owl.carousel');
            carousel = undefined;
            slides = el.find('[data-slide-index]').detach().appendTo(el);
            el.find('.fake-col-wrapper').remove();
            reInit = true;
          }


          //This is the only real 'smart' part of the algorithm

          //First calculate the number of needed columns for the whole carousel
          var perPage = rowsNb * colsNb;
          var pageIndex = Math.floor(slidesNb / perPage);
          var fakeColsNb = pageIndex * colsNb + (slidesNb >= (pageIndex * perPage + colsNb) ? colsNb : (slidesNb % colsNb));

          //Then populate with needed html markup
          var count = 0;
          for (var i = 0; i < fakeColsNb; i++) {
            //For each column, create a new wrapper div
            var fakeCol = $('<div class="fake-col-wrapper"></div>').appendTo(el);
            for (var j = 0; j < rowsNb; j++) {
              //For each row in said column, calculate which slide should be present
              var index = Math.floor(count / perPage) * perPage + (i % colsNb) + j * colsNb;
              if (index < slidesNb) {
                //If said slide exists, move it under wrapper div
                slides.filter('[data-slide-index=' + index + ']').detach().appendTo(fakeCol);
              }
              count++;
            }
          }
          //end of 'smart' part

          previousRowsNb = rowsNb;
          previousColsNb = colsNb;

          if (reInit) {
            //re-init carousel with new markup
            carousel = el.owlCarousel(carouselOptions);
          }
        }
      };

      //Trigger possible update when window size changes
      $(window).on('resize', updateCarousel);

      //We need to execute the algorithm once before first init in any case
      updateCarousel();
    }
  }

  //init
  carousel = el.owlCarousel(carouselOptions);









})
