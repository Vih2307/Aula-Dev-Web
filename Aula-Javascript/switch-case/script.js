const num = document.getElementById("num");
const verificar = document.getElementById("verificar");
const saida = document.getElementById("saida");

verificar.addEventListener("click", () => {
  const n = Number(num.value);
  let dia;

  switch (n) {
    case 1:
      dia = "domingo";
      break;
    case 2:
      dia = "segunda-feira";
      break;
    case 3:
      dia = "terça-feira";
      break;
    case 4:
      dia = "quarta-feira";
      break;
    case 5:
      dia = "quinta-feira";
      break;
    case 6:
      dia = "sexta-feira";
      break;
    case 7:
      dia = "sábado";
      break;
    default:
      dia = null;
  }

  if (dia) {
    saida.textContent = `O dia selecionado foi ${dia}`;
  } else {
    saida.textContent = "O dia selecionado é inválido";
  }
});
