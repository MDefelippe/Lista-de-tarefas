let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function addTarefa() {
    let valorInput = input.value;

    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador;

        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})"class="item-icone">
<img id="icone_${contador}"src="img/checkbox-blank-circle-outline.png" width="50px">
        </div>

        <div onclick="marcarTarefa(${contador})" class="item-nome">
${valorInput}
        </div>
        
        <div class="item-botao">
<button onclick="deletar(${contador})" class="delete"><img src="img/checkbox-blank-circle-outline.png" width="10px"> Deletar</button>
        </div>
        
    </div>`;

        main.innerHTML += novoItem;

        input.value = ""
        input.focus();

    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id);;
    var classe = item.getAttribute("class");

    if (classe == "item") {
        item.classList.add("clicado");
        item.parentNode.appendChild(item);

    } else {
        item.classList.remove("clicado")
    }
}

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})

