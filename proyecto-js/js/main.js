$(document).ready(function(){

  if(window.location.href.indexOf("index")>-1){
    //slider
    $(".bxslider").bxSlider({
      mode: "fade",
      caption: false,
      slideWidth: 1200,
      pager: true,
    });
    var posts = [
      {
        title: "Prueba de titulo 1",
        date: "Publicado el día: "+moment().date()+" de "+moment().format("MMMM")+" del " +moment().format("YYYY"),
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Prueba de titulo 2",
        date: "Publicado el día: "+moment().date()+" de "+moment().format("MMMM")+" del " +moment().format("YYYY"),
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Prueba de titulo 3",
        date: "Publicado el día: "+moment().date()+" de "+moment().format("MMMM")+" del " +moment().format("YYYY"),
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Prueba de titulo 4",
        date: "Publicado el día: "+moment().date()+" de "+moment().format("MMMM")+" del " +moment().format("YYYY"),
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ]

    posts.forEach((item, index)=>{
      var post=`
        <article class="post">
          <h2>${item.title}</h2>
          <span class="date">${item.date}</span>
          <p>${item.content}</p>
          <a href="#" class="button-more">Leer más</a>
        </article>
      `;
      $("#posts").append(post);
    });
  }
  if(window.location.href.indexOf("about")>-1){
    $("#acordeon").accordion();
  }
  if(window.location.href.indexOf("reloj")>-1){
    setInterval(function(){
      var reloj = moment().format("hh:mm:ss");
      $("#reloj").html(reloj);
    },1000);
  }
  if(window.location.href.indexOf("contact")>-1){
    $("form input[name='date']").datepicker({
      dateFormat: "dd-mm-yy"
    });
    $.validate({
      lang: "es",
      errorMessagePosition: "top",
      scrollToTopOnError: true
    });
  }


  //Posts

  //Selector de tema
  var theme = $("#theme");
  $("#to-green").click(function(){
    theme.attr("href", "css/green.css");
  });
  $("#to-red").click(function(){
    theme.attr("href", "css/red.css");
  });
  $("#to-blue").click(function(){
    theme.attr("href", "css/blue.css");
  });

  //subir
  $(".subir").click(function(e){
    e.preventDefault()
    $("html, body").animate({
      scrollTop: 0,
    }, 500);
    return false;
  });

  //localStorage

  $("#login form").submit(function(){
    var form_name = $("#form_name").val();
    localStorage.setItem("form_name", form_name);
    location.reload();
  });

  var form_name = localStorage.getItem("form_name");

  if(form_name!=null && form_name!="undefined"){
    var about_parrafo = $("#about p");
    about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong>");
    about_parrafo.append("<a href='#' id='logout'>Cerrar</a>");
    $("#login").hide();
    $("#logout").click(function(){
      localStorage.clear();
      location.reload();
    })
  }

});
