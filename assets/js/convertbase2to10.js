function ConvertBase2to10(number){
      for (i=0, number > 0, i++){
        bin = number % 10

      }
    }
    switch (aux) {
        case "10": return "A";
        case "11": return "B";
        case "12": return "C";
        case "13": return "D";
        case "14": return "E";
        case "15": return "F";
        default:   return aux;
    }
    if (c >= '0' && c <= '9') {
        return c - '0'; // Transforma os caracteres adquiridos da string transformando eles em numeros
    } else if (c >= 'A' && c <= 'F') {
        return c - 'A' + 10; // Caso seja uma letra do alfabeto ele ira transformar em numero acrescentado 10
    }