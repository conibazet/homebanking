

//Declaración de variables
var codigo = 1234;
var nombreUsuario = "Coni Bazet";
var saldoCuenta = 3000;
var limiteExtraccion = 2000;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;
//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
iniciarSesion ()
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function agregarDinero (dinero) {
    saldoCuenta = saldoCuenta + dinero;
}
function restarDinero (dinero) {
    saldoCuenta = saldoCuenta - dinero;
    return saldoCuenta
}
function cambiarLimiteDeExtraccion() {
    var cantidad = parseInt (prompt ('¿Cuál desea que sea su nuevo límite de extracción?'));
    if (cantidad > 0) {
    limiteExtraccion = cantidad;
    actualizarLimiteEnPantalla ();
    alert ('Su nuevo límite es de: ' + limiteExtraccion);
}    else {
        alert ('Por favor, ingrese una suma.');
    }

}

function extraerDinero() {
    var cantidad = parseInt (prompt ('¿Cuánto desea extraer?'));
    if (cantidad > limiteExtraccion) {
        alert ('Excediste el límite de extracción.')
    } else if (cantidad % 100 !==0) {
        alert ('Debes extraer un multiplo de 100')
    }   
    else if (cantidad <= saldoCuenta){
    var sumaActual = saldoCuenta - cantidad;
    restarDinero (cantidad);
    actualizarSaldoEnPantalla ();
    alert ('Has extraído: ' + cantidad + '\nSaldo Anterior: ' + (saldoCuenta + cantidad) + '\nSaldo actual: ' + sumaActual);
    } else {
        alert ('No posees saldo suficiente.');
    }

}

function depositarDinero() {
    var cantidad = parseInt (prompt ('¿Cuánto desea depositar?'));
    if (cantidad > 0) {
    var sumaActual = saldoCuenta + cantidad;
    agregarDinero (cantidad);
    actualizarSaldoEnPantalla ();
    alert ('Has depositado: ' + cantidad + '\nSaldo Anterior: ' + (saldoCuenta - cantidad) + '\nSaldo actual: ' + sumaActual); 
    } else { 
        alert ('Por favor ingresa un monto');
    }
}


function pagarServicio() {
    var numero = parseInt (prompt ('Indica el número de servicio que deseas pagar \n1: Agua \n2: Teléfono \n3: Luz \n4: Internet'))
    switch (numero) {
        case 1:
            if (saldoCuenta >= agua){
            saldoCuenta = saldoCuenta - agua;
            actualizarSaldoEnPantalla ();}
            else { alert ('No posees saldo suficiente.')}
            break;
        case 2:
            if (saldoCuenta >= telefono){
            saldoCuenta = saldoCuenta - telefono;
            actualizarSaldoEnPantalla();}
            else {alert ('No posees saldo suficiente.')}
            break;
        case 3:
            if (saldoCuenta >= luz){
            saldoCuenta = saldoCuenta - luz;
            actualizarSaldoEnPantalla ();}
            else {alert ('No posees saldo suficiente.')}
            break
        case 4:
            if (saldoCuenta >= internet){
            saldoCuenta = saldoCuenta - internet;
            actualizarSaldoEnPantalla ();}
            else { alert ('No posees saldo suficiente.')}

            break;
        default: alert ('No existe el servicio seleccionado.')
            break;
    } 

}
 
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
var monto

function transferirDinero() {
    var monto = parseInt (prompt ('Ingresa el monto que deseas transferir:'));
    if (monto > saldoCuenta) {
        alert ('No posees saldo suficiente.');
    } else {
        var cuenta = parseInt (prompt ("Ingresa el numero de cuenta"));
        if (cuenta == cuentaAmiga1 || cuenta == cuentaAmiga2) {
            saldoCuenta = saldoCuenta - monto;            
            alert ('Has transferido: ' + monto + '\nCuenta destino: ' + cuenta);
            actualizarSaldoEnPantalla();
        } else {alert ('Solo puedes transferir a una cuenta amiga.')}
    }
}


function iniciarSesion() {
    var contrasenia = parseInt (prompt ('Ingrese su contraseña'));
    if (contrasenia === codigo) {
        alert ('Bienvenido ' + nombreUsuario + ', ya puedes empezar a realizar operaciones.')
    } else {
        alert ('Código incorrecto, tu dinero ha sido retenido por seguridad.');
        saldoCuenta = 0;
        actualizarSaldoEnPantalla ();        
    }

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}