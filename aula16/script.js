const numeroEscolhido = Number(prompt("Digite um número:"));
// numeroEscolhido = Number(numeroEscolhido); // caso fosse uma let
const numeroTitulo = document.getElementById("numeroTitulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numeroEscolhido;
texto.innerHTML += `<p> Raiz quadrada: ${numeroEscolhido ** 0.5} </p>`;
texto.innerHTML += `<p>  ${numeroEscolhido} é inteiro: ${Number.isInteger(
  numeroEscolhido
)}</p>`;
texto.innerHTML += `<p> é NaN: ${Number.isNaN(numeroEscolhido)}</p>`;
texto.innerHTML += `<p>  Arredondando para baixo: ${Math.floor(
  numeroEscolhido
)} </p>`;
texto.innerHTML += `<p> Arredondando para cima: ${Math.ceil(
  numeroEscolhido
)} </p>`;
texto.innerHTML += `<p>  com duas casas decimais ${numeroEscolhido.toFixed(
  2
)}  </p>`;
