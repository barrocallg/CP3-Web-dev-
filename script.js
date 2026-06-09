var listaLutas = ["Jiu-Jitsu", "Muay Thai", "Judô"];

var telaLogin = document.getElementById("container-login");
var telaCrud = document.getElementById("container-crud");
var campoUsuario = document.getElementById("usuario");
var campoSenha = document.getElementById("senha");
var erroLogin = document.getElementById("erro-login");
var erroCrud = document.getElementById("erro-crud");
var campoNovoItem = document.getElementById("novo-item");
var containerLista = document.getElementById("lista-itens");

function executarLogin() {
    var usuarioInserido = campoUsuario.value;
    var senhaInserida = campoSenha.value;

    if (usuarioInserido === "" || senhaInserida === "") {
        erroLogin.textContent = "Erro: Usuário e senha não podem ficar vazios.";
        erroLogin.classList.remove("oculto");
        return;
    }

    if (usuarioInserido === "aluno" && senhaInserida === "fiap2025") {
        erroLogin.classList.add("oculto");
        telaLogin.classList.add("oculto");
        telaCrud.classList.remove("oculto");
        renderizarLista();
    } else {
        erroLogin.textContent = "Erro: Usuário ou senha incorretos.";
        erroLogin.classList.remove("oculto");
    }
}

function executarLogout() {
    campoUsuario.value = "";
    campoSenha.value = "";
    campoNovoItem.value = "";
    erroCrud.classList.add("oculto");
    telaCrud.classList.add("oculto");
    telaLogin.classList.remove("oculto");
}

function renderizarLista() {
    var conteudoHTML = "";
    for (var i = 0; i < listaLutas.length; i++) {
        var textoLuta = listaLutas[i];
        conteudoHTML += "<li>" +
            "<span>" + textoLuta + "</span>" +
            "<div>" +
                "<button class='btn-editar' onclick='editarItem(" + i + ")'>Editar</button>" +
                "<button class='btn-remover' onclick='removerItem(" + i + ")'>Remover</button>" +
            "</div>" +
        "</li>";
    }
    containerLista.innerHTML = conteudoHTML;
}

function adicionarNoInicio() {
    var valorItem = campoNovoItem.value;
    if (valorItem === "") {
        erroCrud.textContent = "Erro: Não é possível adicionar um item vazio.";
        erroCrud.classList.remove("oculto");
        return;
    }
    erroCrud.classList.add("oculto");
    listaLutas.unshift(valorItem);
    campoNovoItem.value = "";
    renderizarLista();
}

function adicionarNoFinal() {
    var valorItem = campoNovoItem.value;
    if (valorItem === "") {
        erroCrud.textContent = "Erro: Não é possível adicionar um item vazio.";
        erroCrud.classList.remove("oculto");
        return;
    }
    erroCrud.classList.add("oculto");
    listaLutas.push(valorItem);
    campoNovoItem.value = "";
    renderizarLista();
}

function editarItem(posicao) {
    erroCrud.classList.add("oculto");
    var valorOriginal = listaLutas[posicao];
    var novoValor = prompt("Altere o nome da luta:", valorOriginal);
    if (novoValor === null || novoValor === "") {
        return;
    }
    listaLutas[posicao] = novoValor;
    renderizarLista();
}

function removerItem(posicao) {
    erroCrud.classList.add("oculto");
    listaLutas.splice(posicao, 1);
    renderizarLista();
}
