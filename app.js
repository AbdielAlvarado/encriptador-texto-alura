function encriptar() {
  let texto = document.getElementById("texto__usuario__original").value;
  let textoEncriptado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  if (!validarTexto(texto)) {
    alert("Solo se permiten letras minúsculas y sin acentos.");
    return;
  }

  mostrarTextoEncriptado(textoEncriptado);
  mostrarBotonCopiar(true);
}

function validarTexto(texto) {
  const valoresPermitidos = /^[a-z\s]+$/;
  return valoresPermitidos.test(texto);
}

function mostrarTextoEncriptado(texto) {
  const textoEncriptado = document.getElementById("texto__encriptado");
  textoEncriptado.innerHTML = `<p>${texto}</p>`;
}

function desencriptar() {
  let texto = document.getElementById("texto__usuario__original").value;
  let textoDesencriptado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  if (!validarTexto(texto)) {
    alert("Solo se permiten letras minúsculas y sin acentos.");
    return;
  }

  mostrarTextoEncriptado(textoDesencriptado);
  mostrarBotonCopiar(true);
}

function mostrarBotonCopiar(mostrar) {
  const botonCopiar = document.querySelector(".texto__encriptado__copiar");
  if (mostrar) {
    botonCopiar.style.display = "flex";
  } else {
    botonCopiar.style.display = "none";
  }
}

function copiar() {
  const texto = document.getElementById("texto__encriptado").innerText;
  navigator.clipboard
    .writeText(texto)
    .then(() => {
      alert("Texto copiado al portapapeles");
    })
    .catch((err) => {
      console.error("Error al copiar el texto: ", err);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  mostrarBotonCopiar(false);
});
