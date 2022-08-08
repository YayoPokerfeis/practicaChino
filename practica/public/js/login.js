console.log('iniciando archivo');
console.log();



$( "#buttonLogin" ).click(function() {
    guardarDatos();
});


var guardarDatos = function(){
    var user;
    var pass;

    user = $( "#user" ).val();
    pass = $( "#pass" ).val();

        //creamos objeto
   data = {
    'user' : user,
    'pass' : pass,
   };
//busca ese error asi como le puse en google ya estamos cerca. ya me voy a comer xd oki oki provechito inge /// aca en la pagina 

   //mira como voy a debugear los datos asi solitos y despues en objetos el data es el objeto y dentro le meti user y pass 
   //aqui voy a debugear

   console.log('usuario:' + user +'   '  + pass);
   console.log(data);

   // ya viste que el objeto esta entre llaves y cuando lo abro trae esos datos y los de arriba viene el puro string 
   // pero eso que hace de diferencia?
   //los dos datos los encapsulamos en un objeto eso quiere decir que podemos tener un opbjeto con infinidad de datos o metodos en este caso son datos como el nombre y su contraseña
   //si lo dejabamos asi tendriamos que hacer una peticion para cada dato y las peticiones consumen recursos y cada peticion vuelve lento el sistema mas sin en cambio
   //una  no lo alenta .
   // las peticiones son por http ya sea get o post  get es por aammm nose como explicarlo creo como tal el dato y post por la utl ahorita vemos las diferencias.


   // esa es la paeticion ajax esta va mandar los datos por la URL mediante HTTP osea por internet y lo va recibir tu servidor. mediante la URL
   //AHI ENFRENTE VIENE QUE PIDE CADA COSA
   //INTENTAREMOS PRIMERO CON POST PARA VER COMO SE ENVIA 
   $.ajax({
    url: "{{ url('url') }}",
    data: {
        "_token": $("meta[name='csrf-token']").attr("content")
    },
    dataType: "json",
    method: "POST",
    success: function(response) {
        //Acciones si success
    },
    error: function () {
        //Acciones si error
    }

    //type: 'POST',  // Envío con método POST
    //headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
    //url: '/loginData',  // Fichero destino (el PHP que trata los datos)
    //data: data // Datos que se envían  //ese data que puse despues de los dos puntos es este.  // y el data que esta atras de los dos puntos es el atributo del objeto ajax o metodo.//como
    //puedes ver hay un metodo .ajax()  entre parentesis eso quiere decir que es un metodo y adentro tiene llaves eso quiere decir que es un objeto mira// entonces es un metodo que recibe un objeto.
    //}).done(function( msg ) {  // Función que se ejecuta si todo ha ido bien

     //alert('todo funciona'); // Escribimos en el div consola el mensaje devuelto
    
   // }).fail(function (jqXHR, textStatus, errorThrown){ // Función que se ejecuta si algo ha ido mal
    // Mostramos en consola el mensaje con el error que se ha producido
     //   alert('nada funciona');
    });

    //ahorita no va funcionar porque la URL: /LOGINDATA NO LA TENEMOS CREADA EN LAS RUTAS DEL SERVIDOR QUE ES EL ARCHIVO WEB QUE TE DIJE PERO VAMOS A VER QUE ERROR MANDA

}






console.log('terminando archivo');

