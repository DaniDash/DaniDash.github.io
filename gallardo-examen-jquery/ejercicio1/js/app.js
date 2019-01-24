$(document).ready(function(){
    $("#resultado").hide();
    $("#mostrar").click(function(e){
        e.preventDefault();
        var nombres = $('input[id="nombre"]').val();
        var apellidos = $('input[id="apellido"]').val();
        var fechas = $('input[id="ano"]').val();
        var total = 2019 - fechas;
        $('.card-title').html(nombres + " " + apellidos);
        $('.card-text').html(total);
        $("#resultado").show();
    });
});