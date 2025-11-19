function validarFormulario() {
    const Emisor = document.getElementById("emisor")
    const Asunto = document.getElementById("asunto")
    const Mensaje = document.getElementById("mensaje")

    if (Emisor.value === "" || Asunto.value === "" || Mensaje.value === "") {
        alert("Por favor, complete todos los campos del formulario.");
        return false;
    }

    alert("Es solo front, no hay envio de datos.");
    return true;
}