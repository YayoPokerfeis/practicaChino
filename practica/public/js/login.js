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
  var data = {
    'user' : user,
    'pass' : pass,
   };
   console.log(data);
   $.ajax({
    headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
    type: 'post',
    dataType: 'json',
    url: '/loginData',// aqui manda a pedir la direccion al back 
    data: data,  //aqui mandamos los datos del front al back
    success: function (data) {// aqui resivimos respuesta del back
        console.log(data.status);
       if(data.status === true){// data es el objeto que te voy a seleccionar del back
        alert('el usuario existe');
       }else{
        alert('el usuario no existe');
        //algo esta mal xd , no esta entrando al success
       }//pues te va tocar esta parte ya solo es buscar porque no funciona ya esta todo bien. oki 
       // para que funcione te tiene que arrojar una alerta como esta 
       //obviamente cuando exista la primera y cuando no la segunda. estoy seguro que solo es algo mas escrito
    },//bueno ahi te dejo te me cuidas vaava graxxx <3 hoy lo terminas eehhh espero tu mensaje 
    //espero terminarlo antes de las 7 vavavava bais
    beforeSend: function () {
        console.log('bloqueo botones');
    },
    complete: function () {
        console.log('desbloqueo botones');
    },
    success: function (response) {
       console.log('ok!');
    },
    error: function (jqXHR) {
        console.log('boo!');
    }





    //url: "{{ url('url') }}",
    //data: {
        //"_token": $("meta[name='csrf-token']").attr("content")
    //},
    //dataType: "json",
    //method: "POST",
    //success: function(response) {
        //Acciones si success
    //},
    //error: function () {
        //Acciones si error
    //}




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

