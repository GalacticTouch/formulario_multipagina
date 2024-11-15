const datosFormulario = {
  persona: {},
  familiares: [],
  condicionesSalud: [],
  internamientos: []
};

function cambiarPagina(actual, siguiente) {
  document.getElementById(actual).style.display = "none";
  document.getElementById(siguiente).style.display = "block";
}

function guardarDatosPersonales() {
  datosFormulario.persona = {
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    edad: parseInt(document.getElementById("edad").value)
  };
  cambiarPagina("datosPersonalesForm", "familiaresForm");
}

function agregarFamiliar() {
  const nombre = prompt("Nombre del familiar:");
  const parentesco = prompt("Parentesco:");
  const edad = parseInt(prompt("Edad:"));
  datosFormulario.familiares.push({ nombre, parentesco, edad });
  actualizarLista("familiaresContainer", datosFormulario.familiares, "Familiar");
}

function agregarCondicion() {
  const enfermedad = prompt("Nombre de la enfermedad:");
  const tiempo = prompt("Tiempo con la enfermedad (en años):");
  datosFormulario.condicionesSalud.push({ enfermedad, tiempo });
  actualizarLista("condicionesContainer", datosFormulario.condicionesSalud, "Condición");
}

function agregarInternamiento() {
  const fecha = prompt("Fecha del internamiento:");
  const centroMedico = prompt("Centro médico:");
  const diagnostico = prompt("Diagnóstico:");
  datosFormulario.internamientos.push({ fecha, centroMedico, diagnostico });
  actualizarLista("internamientosContainer", datosFormulario.internamientos, "Internamiento");
}

function mostrarResumen() {
  document.getElementById("datosResumen").textContent = JSON.stringify(datosFormulario, null, 2);
  cambiarPagina("internamientosForm", "presentarDatos");
}

function actualizarLista(containerId, lista, tipo) {
  const container = document.getElementById(containerId);
  container.innerHTML = lista.map(item => `<p>${tipo}: ${JSON.stringify(item)}</p>`).join("");
}
