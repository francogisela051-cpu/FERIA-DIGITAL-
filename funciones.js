// Cambia entre vistas sin recargar la página

function mostrarVista(nombre) {
  const vistas = document.querySelectorAll(".vista");
  vistas.forEach(v => v.classList.remove("activa"));

  const objetivo = document.getElementById(`vista-${nombre}`);
  if (objetivo) objetivo.classList.add("activa");
}

// Botones del menú principal
document.querySelectorAll("button[data-vista]").forEach(btn => {
  btn.addEventListener("click", () => {
    const vista = btn.getAttribute("data-vista");
    mostrarVista(vista);
  });
});

// Botones volver (regresan al inicio)
document.getElementById("volver-cultivo").addEventListener("click", () => mostrarVista("inicio"));
document.getElementById("volver-galeria").addEventListener("click", () => mostrarVista("inicio"));
document.getElementById("volver-historias").addEventListener("click", () => mostrarVista("inicio"));
document.getElementById("volver-contacto").addEventListener("click", () => mostrarVista("inicio"));