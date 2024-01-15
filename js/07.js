let valor;
do {
    valor = parseInt(prompt('Ingrese un valor entre 0 y 999:', ''));
    document.write('El valor ' + valor + ' tiene ');
    if (valor < 10) {
        document.write('Tiene 1 digitos');
    } else {
        if (valor < 100) {
            document.write('Tiene 2 digitos');
        } else {
            document.write('Tiene 3 digitos');
        }
    }
    document.write('<br>');
} while (valor != 0);