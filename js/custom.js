
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()


// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag
   
    let itens = $('.featured-item') // class
    
    let destaques = $('#featured') // id

    console.log(titulos.first());

$('.featured-item a').click(function(event){
   event.preventDefault();
alert('produto esgotado');


});




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
    
     
     $('#form-submit').on('click', function(e){

      e.preventDefault()

      if( $('#email').val() != '' ){

         $('#email').animate({
            opacity: "toggle",
           
         }, 500, function(){
            console.log($(this).val())
         })

      }


   });

 

   /*
    * Animações
    */
   const duracao = 1000 // equivalenta a 1 segundo

   $('.featured-item:nth(0)').hide(duracao).show(duracao)
   $('.featured-item:nth(1)').hide(duracao).show(duracao)
   $('.featured-item:nth(2)').hide(duracao).show(duracao)
 

   $('#form-submit').on('click', function(e){

      e.preventDefault()

      if( $('#email').val() != '' ){

         $('#email').animate({
            opacity: "toggle",
           
         }, 500, function(){
            console.log($(this).val())
         })

      }


   });


   /*
    * Ouvinte de eventos .nav-modal-open
    */
   $('.nav-modal-open').on('click', function(e){

      e.preventDefault();

      let elem = $(this).attr('rel')

      $('.modal-body').html($('#'+elem).html())
      
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
   function validate( elem ){
      if( elem.val() == '') {

         console.log('o campo de '+ elem.attr('name') + ' é obrigatório')

         elem.parent().find('.text-muted').show()

         elem.addClass('invalid')

         return false
      } else {
         elem.parent().find('.text-muted').hide()
         elem.removeClass('invalid')
      }
   }

   $('body').on('submit', '.modal-body .form', function(e){

      e.preventDefault()

      const inputName = $('#nome')
      const inputEmail = $('#email')

      validate(inputName)
      validate(inputEmail)

      if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid')){
         console.log('verificar campos obrigatórios')
         return false
      } else {
         $(this).submit()  
      }

   })

   $('body').on('blur', '#nome', function(){
      validate($(this))
   })

   $('body').on('blur', '#email', function(){
      validate($(this))
   })


   $('body').on('focus', '#date', function(){
      $(this).datepicker();
   })

   $('body').on('blur', '#date', function(){
      validate($(this))
      $(this).mask('00/00/0000');
   }) 

   $('body').on('blur', '#time', function(){
      validate($(this))
      $(this).mask('00:00');
   })

   $('body').on('blur', '#cep', function(){
      validate($(this))
      $(this).mask('00000-000');
   })

   $('body').on('blur', '#phone', function(){
      validate($(this))
      $(this).mask('00000-0000');
   })

   $('body').on('blur', '#cpf', function(){
      validate($(this))
      $(this).mask('000.000.000-00');
   })

})

$('.owl-carousel').owlCarousel({
loop:true,
margin:10,
nav:true,
responsive:{
0:{items:1},
600:{items:2},
1000:{items:3}

}

})

