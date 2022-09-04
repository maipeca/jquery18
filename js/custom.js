// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag
   
    let itens = $('.featured-item') // class
    
    let destaques = $('#featured') // id

    console.log(titulos.first());


//PRATICA DE JQUERY

   $ ('.nav-link, h6').css('color', '#0D698B');
   $ ('.social-icons>ul>li>a') .css ('background-color', '#ff9f1c');
   $ ('.footer-menu>ul>li>a') .css ('color', '#ff9f1c');
   $ ('.logo') .hide();
   $("#imgPot").attr('src','assets/images/pot1.png');
   $("#jumper").attr('src','assets/images/jumper.png');
   $("#handbag").attr('src','assets/images/handbag.png');
   $('.bg-dark') .attr('style', 'background-color: #F2F1E8 !important');





    // Configuração de produtos

    $('.featured-item a').addClass('btn btn-dark stretch-link');

    $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
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
            'background': '#050533',
            'font-weight': '100',
        });

       
     });

     /*
      * Manipulação de eventos
      */
     $('.featured-item a').on('blur', function(event){

        event.preventDefault();

        alert('Produto esgotado');

     })
     
     
     
     







})
