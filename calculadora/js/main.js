document.addEventListener("DOMContentLoaded", function () {
    let pantalla = document.getElementById("Pantalla");
    let operacionActual = '';
    let resultado = '';
    let operador = '';


    function agregarNumero(numero) {
        if (resultado !== '') {
            operacionActual = '';
            resultado = '';
        }
        operacionActual += numero;
        actualizarPantalla(operacionActual);
    }


    function agregarOperador(op) {
        if (operacionActual === '' && resultado === '') return;

        if (resultado !== '') {
            operacionActual = resultado;
            resultado = '';
        }

        operador = op;
        operacionActual += ' ' + operador + ' ';
        actualizarPantalla(operacionActual);
    }

    function calcular() {
        try {
            let partes = operacionActual.split(' ');
            let num1 = parseFloat(partes[0]);
            let op = partes[1];
            let num2 = parseFloat(partes[2]);

            switch (op) {
                case '+':
                    resultado = num1 + num2;
                    break;
                case '-':
                    resultado = num1 - num2;
                    break;
                case 'x':
                    resultado = num1 * num2;
                    break;
                case '/':
                    resultado = num1 / num2;
                    break;
                case '%':
                    resultado = num1 % num2;
                    break;
                default:
                    return;
            }

            actualizarPantalla(resultado);
        } catch (e) {
            pantalla.value = 'Error';
        }
    }


    function actualizarPantalla(valor) {
        pantalla.value = valor;
    }

    function limpiarPantalla() {
        operacionActual = '';
        resultado = '';
        operador = '';
        actualizarPantalla('');
    }
    function cambiarSigno() {
        if (resultado != '' && resultado != undefined) {
            resultado = resultado * -1;
        }
        actualizarPantalla(resultado);
    }

    document.getElementById("0").addEventListener("click", function () { agregarNumero("0"); });
    document.getElementById("1").addEventListener("click", function () { agregarNumero("1"); });
    document.getElementById("2").addEventListener("click", function () { agregarNumero("2"); });
    document.getElementById("3").addEventListener("click", function () { agregarNumero("3"); });
    document.getElementById("4").addEventListener("click", function () { agregarNumero("4"); });
    document.getElementById("5").addEventListener("click", function () { agregarNumero("5"); });
    document.getElementById("6").addEventListener("click", function () { agregarNumero("6"); });
    document.getElementById("7").addEventListener("click", function () { agregarNumero("7"); });
    document.getElementById("8").addEventListener("click", function () { agregarNumero("8"); });
    document.getElementById("9").addEventListener("click", function () { agregarNumero("9"); });
    document.getElementById("suma").addEventListener("click", function () { agregarOperador("+"); });
    document.getElementById("resta").addEventListener("click", function () { agregarOperador("-"); });
    document.getElementById("multi").addEventListener("click", function () { agregarOperador("x"); });
    document.getElementById("divi").addEventListener("click", function () { agregarOperador("/"); });
    document.getElementById("%").addEventListener("click", function () { agregarOperador("%"); });
    document.getElementById("igual").addEventListener("click", function () { calcular(); });
    document.getElementById("ac").addEventListener("click", function () { limpiarPantalla(); });
    document.getElementById("+/-").addEventListener("click", function () { cambiarSigno(); });
    document.getElementById(".").addEventListener("click", function () { agregarNumero("."); });
});
