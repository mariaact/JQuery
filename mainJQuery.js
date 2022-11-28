//Para asegurarnos que esta cargada al 100% la pagina
$(document).ready(function(){

    $("p").css({"background-color": "red"});

    $("#p1").css({"background-color": "green"});

    $("#boton0").click(function(){
        alert("Hola");
    });

    $("#boton1").click(function(){
        $("#p2").hide();
    });

    $("#boton2").click(function(){
        $("#p2").show();
    });

    $("#boton3").dblclick(function(){
        alert("Ha dado dos click");
    });

    $("#p1").mouseenter(function(){
        $("#p2").hide();
        //$("#p2").fadeOut();
        //$("#p2").slideDown();


    });

    $("#p1").mouseleave(function(){
        $("#p2").show();
        //$("#p2").fadeIn();
        //$("#p2").slideUp();

    });

    $("#p1").animate({width: "300px"});

    $("#boton4").click(function(){
        alert($("#p2").html());
        //alert($("#p2").text());
        alert($("#p2").attr("title"));
        $("#p3").text($("#p2").attr("title"));


    });

    $("#boton5").click(function(){
        //$("#p2").append("inserto HTML");
        //$("#p2").prepend("inserto HTML");

       // $("#p2").after("<p>inserto HTML</p>");
        $("#p2").before("<p>inserto HTML</p>");

    });

    $("#boton6").click(function(){
        
        $("#p4").remove();

    });

    $("#boton7").click(function(){
        
        $("#p4").empty();

    });

    $("#boton8").click(function(){
        
       // $("#p4").addClass("rojo");
       // $("#p4").removeClass("rojo");

        $("#p4").toggleClass("rojo");

    });




})

//$("h1").hide();