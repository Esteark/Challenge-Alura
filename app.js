// Lista donde guardo los nombres de mis amigos
let amigos = [];

// Esta función se ejecuta cuando le doy click al botón de agregar
function agregarAmigo() {
  // Agarro lo que escribió el usuario
  const inputNombre = document.getElementById("amigo");
  const nombre = inputNombre.value.trim();

  // Si no escribió nada, le aviso
  if (nombre === "") {
    alert("¡Oye! No has escrito ningún nombre");
    return;
  }

  // Meto el nombre a mi lista de amigos
  amigos.push(nombre);

  // Limpio el campo para que pueda escribir otro nombre
  inputNombre.value = "";

  // Actualizo la lista en la pantalla
  mostrarListaAmigos();
}

// Con esta función muestro todos los amigos en la página
function mostrarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  // Borro todo lo que había antes
  listaAmigos.innerHTML = "";

  // Por cada amigo en mi lista, creo un elemento en la página
  amigos.forEach(function (amigo) {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

// Esta es la función divertida que hace el sorteo
function sortearAmigo() {
  // Primero me aseguro que haya amigos para sortear
  if (amigos.length === 0) {
    alert("¡Hey! No puedo sortear si no hay amigos en la lista");
    return;
  }

  // Elijo un amigo al azar - matemática básica
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoGanador = amigos[indiceAleatorio];

  // Le muestro al usuario quién salió
  mostrarResultado(amigoGanador);
}

// Aquí muestro quién ganó el sorteo
function mostrarResultado(amigo) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  // Creo el mensaje de quién es el amigo secreto
  const li = document.createElement("li");
  li.textContent = `¡Felicidades ${amigo}! Tú eres el amigo secreto 🎉`;
  resultado.appendChild(li);
}
