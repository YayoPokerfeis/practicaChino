<?php

namespace App\Http\Controllers\Login;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
//de por si lo estaba haciendo mal porque no estaba consultando al modelo

class LoginController extends Controller
{
   public function loginData(Request $data){
    //primero verificar si el usuario existe. ves que las apliocaciones te dicen si existe tu usuario.
    //entonces para eso vamos a consultar el modelo que ya teniamos creado y el modelo va consultar la base de datos
    //para esto necesitar tener mas conocimientos en base de datos asi que igual estudia eso.
    //aqui vamos a tomar la variable data y sacaremos solamente el usuario para ver que exista
    //en la base de datos para eso es el where  es como un if damos el nombre de la tabla
    //y damos el nombre del request
    //hora
    $usuario = User::where('user','=', $data->user)->first();

    if($usuario){
        return response()->json(['status' => true, 'datos' => $usuario->user]);
    }else{
        return response()->json(['status' => false, 'message' => 'El usuario no existe']);
        //como puedes ver tiene un status ese es el que mando a llamar alla con el .
    }
    //por ejemplo vez que luego dice que la contraseña esta mal o que el usuario no existe
    //o que necesaitas activar el usuario, etc etc etc

//haremos algo parecido pero es mas sencillo 
//ahorita ya tenemos los datos
//empezaremos a hacer condiciones asi que pon atencion
   //como puedes ver meti un return ese return se va ncargar de mandar la rrespuesta
   //al front, y nosotros la vamos a cachar ahora alla, casi igualq ue la cachamos aca.
    }
}