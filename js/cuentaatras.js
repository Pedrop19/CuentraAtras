// Cuenta Atras

const fechaCumple = new Date("19/12/2023 0:01 AM");

const mesesElement = document.getElementById("meses");
const diasElement = document.getElementById("dias");
const horasElement = document.getElementById("horas");
const minutosElement = document.getElementById("minutos");
const segundosElement = document.getElementById("segundos");

const milisegundosenunSegundo = 1000;
const milisegundosenunMinuto = milisegundosenunSegundo * 60;
const milisegundosenunaHora = milisegundosenunMinuto * 60;
const milisegundosenunDia = milisegundosenunaHora * 24;
const milisegundosenunMes = milisegundosenunDia * 30;

function updateCountdown() {
  const ahora = new Date();
  const duracion = fechaCumple - ahora;

  if (duracion > 0) {
    const mesesFaltantes = Math.floor(duracion / milisegundosenunMes);
    const diasFaltantes = Math.floor(duracion / milisegundosenunDia);
    const horasFaltantes = Math.floor(
      (duracion % milisegundosenunDia) / milisegundosenunaHora
    );
    const minutosFaltantes = Math.floor(
      (duracion % milisegundosenunaHora) / milisegundosenunMinuto
    );
    const segundosFaltantes = Math.floor(
      (duracion % milisegundosenunMinuto) / milisegundosenunSegundo
    );

    mesesElement.textContent = mesesFaltantes + " meses";
    diasElement.textContent = diasFaltantes + " dias";
    horasElement.textContent = horasFaltantes + " horas";
    minutosElement.textContent = minutosFaltantes + " minutos";
    segundosElement.textContent = segundosFaltantes + " segundos";
  } else {
    mesesElement.textContent = "FELICIDADES!!!";
    diasElement.textContent = "";
    horasElement.textContent = "";
    minutosElement.textContent = "";
    segundosElement.textContent = "";
  }
}

updateCountdown();

setInterval(updateCountdown, milisegundosenunSegundo);

// Cambio de Imagenes

function cambioImagenes() {
  const estaciones = [
    {
      name: "Primavera",
      start: new Date("2023-03-20"),
      end: new Date("2023-06-20"),
    },
    {
      name: "Verano",
      start: new Date("2023-06-21"),
      end: new Date("2023-09-21"),
    },
    {
      name: "Otono",
      start: new Date("2023-09-22"),
      end: new Date("2023-12-20"),
    },
    {
      name: "Invierno",
      start: new Date("2023-12-21"),
      end: new Date("2023-03-19"),
    },
  ];

  const ahora = new Date();

  let estacionActual = "Desconocida"; // Estación por si no se encuentra
  for (const estacion of estaciones) {
    if (ahora >= estacion.start && ahora <= estacion.end) {
      estacionActual = estacion.name;
      break;
    }
  }

  let bgImage = "";

  switch (estacionActual) {
    case "Primavera":
      bgImage = "./img/primavera.gif";
      break;
    case "Verano":
      bgImage = "./img/verano.gif";
      break;
    case "Otono":
      bgImage = "./img/otono.gif";
      break;
    case "Invierno":
      bgImage = "./img/invierno.gif";
      break;
    default:
      bgImage = "./img/primavera.gif"; // Imagen por si no se encuentra
  }

  document.getElementById('background-image').style.backgroundImage = `url('${bgImage}')`;
}

  cambioImagenes();

  setInterval(cambioImagenes, milisegundosenunSegundo);
