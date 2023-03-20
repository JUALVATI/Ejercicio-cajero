let nombreusuario, clave, saldo;

clave = 2023;
saldo = 10000;

nombreusuario = prompt("Ingrese su usuario");
clave = parseInt(prompt("Ingrese su clave de cuatro digitos"));


if (nombreusuario == "julval" && clave == "2023") {
  alert ("Tu saldo es de $10.000");
  document.write (`${nombreusuario} saldo actual ${saldo} COP`);

} else if (nombreusuario != "julval" && clave != 2023) {
    alert("Usuario y clave incorrectos, te quedan 3 intentos");
    nombreusuario = prompt("Ingrese su usuario");
    clave = parseInt(prompt("Ingrese su clave nuevamente"));
    if(nombreusuario != "julval" && clave != "2023")
    alert ("Usuario y clave incorrectos, te quedan 2 intentos");
    if(nombreusuario != "julval" && clave != 2023)
    alert("Incorrectos, ten en cuenta que éste serà tu último intento");
    nombreusuario = prompt("Ingrese su usuario");
    clave = parseInt(prompt("Ingrese su clave por ultima vez"));
    if (nombreusuario == "julval" && clave == 2023)
    document.write (`${nombreusuario} saldo actual ${saldo} COP`);
else 
        alert("¡Tu cuenta ha sido bloqueada!");
        alert("Para más información, comunicate al (008000-57");
}
    // } else if (nombreusuario != "julval" && clave != 2023) {
//     alert("Clave y usuario incorrectos, ten en cuenta que éste será tu último intento");
// } else {
//     alert("¡Tu cuenta ha sido bloqueada!");
//     alert("Para más información, comunicate al (008000-57");
// }

























