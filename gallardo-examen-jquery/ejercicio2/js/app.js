$(document).ready(function(){
    $("#perros").click(function(){
        $(".gato").hide();
        $(".pez").hide();
        $(".perro").show()
        $("#perros").css('background-color','red');
        $("#gatos").css('background-color','blue');
        $("#peces").css('background-color','blue');
        $("#eliminar").css('background-color','green'); 
    });
    $("#gatos").click(function(){
        $(".perro").hide();
        $(".pez").hide();
        $(".gato").show()
        $("#perros").css('background-color','blue');
        $("#gatos").css('background-color','red');
        $("#peces").css('background-color','blue');
        $("#eliminar").css('background-color','green');   
    });
    $("#peces").click(function(){
        $(".perro").hide();
        $(".gato").hide();
        $(".pez").show()
        $("#perros").css('background-color','blue');
        $("#gatos").css('background-color','blue');
        $("#peces").css('background-color','red');
        $("#eliminar").css('background-color','green');   
    });
    $("#eliminar").click(function(){
        $(".perro").show();
        $(".gato").show();
        $(".pez").show();
        $("#perros").css('background-color','blue');
        $("#gatos").css('background-color','blue');
        $("#peces").css('background-color','blue');
        $("#eliminar").css('background-color','red');  
    });
});