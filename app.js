
let amigos = [];


function agregarAmigo() {
    const inputNombre = document.getElementById("amigo");
    const nombre = inputNombre.value.trim();


    if (nombre !== "" && !amigos.includes(nombre)) {
        amigos.push(nombre);
        mostrarAmigos();
        inputNombre.value = ""; 
    } else {
        alert("Por favor, ingresa un nombre válido o único.");
    }
}


function mostrarAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Por favor, agrega al menos dos amigos para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    
    amigos = [];  

    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; 
    const li = document.createElement("li");
    li.textContent = `¡El amigo secreto es: ${amigoSorteado}!`;
    resultadoLista.appendChild(li);

    mostrarAmigos(); 
}

