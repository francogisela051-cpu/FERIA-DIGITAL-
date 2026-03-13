// Selecciona todos los botones
const botones = document.querySelectorAll(".btn");

// Recorre cada botón y agrega evento
botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const vistaId = boton.getAttribute("data-vista");

    // Oculta todas las vistas
    document.querySelectorAll(".vista").forEach(v => v.classList.remove("activa"));

    // Muestra la vista seleccionada
    const vista = document.getElementById("vista-" + vistaId);
    if (vista) {
      vista.classList.add("activa");
    }
  });
});
