//Variable de inicio que permite llevar el control de las repeticiones del juego
var i = 0;
//Creacion de variable con la instruccion al usuario
var toRepaet = parseInt(
  prompt("Indique la cantidad de veces que desee que se repita el juego")
);
//Opciones al usuario para la ejecucion del juego y por otro lado la eleccion de la jugada automatica del computador
do {
  i++;
  var option = prompt("Escriba su jugada: Piedra, Papel o Tijera");
  var isValid = option == "Piedra" || option == "Papel" || option == "Tijera";

  if (isValid) {
    var computer = parseInt(Math.random() * (4 - 1) + 1);
    switch (computer) {
      case 1:
        computer_option = "Piedra";
        break;
      case 2:
        computer_option = "Papel";
        break;
      case 3:
        computer_option = "Tijera";
        break;
      default:
        alert(" error ");
        break;
    }
    alert(" La elección del computador es : " + computer_option);
    if (option == computer_option) {
      alert(" Ups! Han empatado ");
    } else if (option != computer_option) {
      var answer = winner(option, computer_option);
      alert(answer);
    }
  } else {
    alert("Error: Dato ingresado no es valido");
  }
} while (i < toRepaet);

//Funcion parta determinar el ganador o el perdedor
function winner(a, b) {
  if (
    (option == "Piedra" && computer_option == "Tijera") ||
    (option == "Tijera" && computer_option == "Papel") ||
    (option == "Papel" && computer_option == "Piedra")
  ) {
    triunfador = "Ganaste !Felicidades!";
    return triunfador;
  }
  if (
    (option == "Piedra" && computer_option == "Papel") ||
    (option == "Tijera" && computer_option == "Piedra") ||
    (option == "Papel" && computer_option == "Tijera")
  ) {
    triunfador = "Lo siento,la maquina te ha ganado";
    return triunfador;
  }
}
