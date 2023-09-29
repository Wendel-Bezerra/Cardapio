function confirmar() {
    var entradas = document.getElementsByName("entrada");
    var principais = document.getElementsByName("principal");
    var sobremesas = document.getElementsByName("sobremesa");

    var entradaImg = document.getElementById("entrada-img");
    var entradaNome = document.getElementById("entrada-nome");
    var principalImg = document.getElementById("principal-img");
    var principalNome = document.getElementById("principal-nome");
    var sobremesaImg = document.getElementById("sobremesa-img");
    var sobremesaNome = document.getElementById("sobremesa-nome");

    var entradaValor = "";
    var principalValor = "";
    var sobremesaValor = "";

    for (var i = 0; i < entradas.length; i++) {
        if (entradas[i].checked) {

            entradaValor = entradas[i].value;
            break;
        }
    }

    for (var i = 0; i < principais.length; i++) {
        if (principais[i].checked) {
            principalValor = principais[i].value;
            break;
        }
    }

    for (var i = 0; i < sobremesas.length; i++) {
        if (sobremesas[i].checked) {
            sobremesaValor = sobremesas[i].value;
            break;
        }
    }


    if (entradaValor == "" || principalValor == "" || sobremesaValor == "") {

        alert("Por favor, escolha uma opção de cada categoria.");
    } else {

        entradaImg.src = "imgs/" + entradaValor + ".jpg";
        entradaNome.innerHTML = entradaValor.charAt(0).toUpperCase() + entradaValor.slice(1);
        principalImg.src = "imgs/" + principalValor + ".jpg";
        principalNome.innerHTML = principalValor.charAt(0).toUpperCase() + principalValor.slice(1);
        sobremesaImg.src = "imgs/" + sobremesaValor + ".jpg";
        sobremesaNome.innerHTML = sobremesaValor.charAt(0).toUpperCase() + sobremesaValor.slice(1);


        alert("O seu menu foi confirmado. Bom apetite!");


        console.log("Menu escolhido: " + entradaValor + ", " + principalValor + ", " + sobremesaValor);
    }
}  