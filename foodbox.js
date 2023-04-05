// Variáveis criadas como solicitadas no passo 1
//para que seja salvo o item escolhido
let prato;
let bebida;
let sobremesa;


//Produto selecionado FICA COM AS BORDAS EM VERDE

function escolherFrango() {
    document.getElementById("frango").style.borderColor = "green";
    document.getElementById("carne").style.borderColor = "white";
    //conforme o passo 2, teremos: varável X RECEBE Y ou seja, prato = ao item selecionado;
    prato = "Frango";
}

// Alternância das cores nas bordas em relação ao produto selecionado
function escolherCarne() {
    document.getElementById("carne").style.borderColor = "green";
    document.getElementById("frango").style.borderColor = "white";
    prato = "Carne";
}

//....... Alternando nos demais produtos selecionados .....................

function escolherRefrigerante() {
    document.getElementById("refrigerante").style.borderColor = "green";
    document.getElementById("refresco").style.borderColor = "white";
    bebida = "Refrigerante";
}

function escolherRefresco() {
    document.getElementById("refresco").style.borderColor = "green";
    document.getElementById("refrigerante").style.borderColor = "white";
    bebida = "Refresco";
}

function escolherPudim() {
    document.getElementById("pudim").style.borderColor = "green";
    document.getElementById("sorvete").style.borderColor = "white";
    sobremesa = "Pudim";
}

function escolherSorvete() {
    document.getElementById("sorvete").style.borderColor = "green";
    document.getElementById("pudim").style.borderColor = "white";
    sobremesa = "Sorvete";
}

// FAZER FUNCIONAR O BOTAO DE ENVIO DO PEDIDO PELO WHATSAPP
// ...... 1 - Criar variável FORA DA FUNCTION para cada item a ser selecionado;
// ...... 2 - DENTRO DA FUNCTION, atribuiremos os valores respectivos;
// ...... 3 - Criar a função para o envio pelo whatsapp 
//e a variável DENTRO DA FUNCTION que conterá a mensagem a er enviada

function finalizarPedido() {
    let mensagem;

    mensagem = "Olá, gostaria de pedir um combo: " +
        prato + ", " + bebida + " e " + sobremesa + ".";


    //alert(mensagem); => funcionou o teste
    // incluir o método de envio para whatsapp

    window.open("https:\\wa.me/+5521993817779?text=" + mensagem);
}