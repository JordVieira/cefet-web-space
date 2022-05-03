function calcularForca() {
  let G = constante.value;
  let M1 = massa1.value;
  let M2 = massa2.value;
  let d = distancia.value;
  let forcaGravidade = (G * M1 * M2) / (d * d);

  resultado.value = forcaGravidade;
}
