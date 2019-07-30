$(document).ready(function(){

  var caja = $("#caja")
  $("#mostrar").click(function(){
    $(this).hide();
    $("#ocultar").show();
    caja.fadeTo("slow", 1);
  });

  $("#ocultar").click(function(){
    $(this).hide();
    $("#mostrar").show();
    caja.fadeTo("slow", 0);
  });

  $("#todoEnUno").click(function(){
    caja.slideToggle("fast");
  });

  $("#animame").click(function(){
    caja.animate({
      marginLeft: "500px",
      fontSize: "40px",
      height: "110px"
    }, "slow")
    .animate({
      borderRadius: "900px",
      marginTop: "50px"
    }, "slow")
    .animate({
      borderRadius: "0px",
      marginTop: "0px"
    }, "slow")
    .animate({
      borderRadius: "100px",
      marginTop: "0px"
    }, "slow")
    caja.animate({
      marginLeft: "500px",
      fontSize: "40px",
      height: "110px"
    }, "slow");
  });
});
