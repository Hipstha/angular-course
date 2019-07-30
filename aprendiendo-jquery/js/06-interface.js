$(document).ready(function(){
  //Mover elemento por la página
  $(".elemento").draggable();

  //Redimensionar
  $(".elemento").resizable();

  // Seleccionar elementos
  //$(".lista-seleccionable").selectable();
  $(".lista-seleccionable").sortable({
    update: function(event, ui){
      console.log("Ha cambiado");
    }
  });

  //Drop
  $("#elemento-movido").draggable();
  $("#area").droppable({
    drop: function(){
      console.log("se suelta");
    }
  });

});
