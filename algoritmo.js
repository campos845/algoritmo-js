


function resposta() {
  // Lê as coordenadas dos pontos
  let x0 = parseFloat(document.getElementById("x0").value);
  let y0 = parseFloat(document.getElementById("y0").value);
  let x1 = parseFloat(document.getElementById("x1").value);
  let y1 = parseFloat(document.getElementById("y1").value);

  // Calcula o coeficiente angular
  let coeficienteAngular = (y1 - y0) / (x1 - x0);

  // Exibe o resultado
  document.getElementById("resultado").innerText = "O coeficiente angular da reta é: " + coeficienteAngular;
}