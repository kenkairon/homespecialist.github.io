document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('name').value;
  if(usuario.length == 0) {
    alert('No has escrito nada en el Usuario');
    return;
  }
  var email = document.getElementById('email').value;
    if(email.length == 0) {
    alert('No has escrito nada en el Email')
    return;
  }
    else if (email.match(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i) == null) {
    alert("El email no es correcto");
    return;
  }
  var mensaje = document.getElementById('message').value;
  if(mensaje.length == 0) {
    alert('No has escrito nada en el Mensaje');
    return;
  }
    alert('FORMULARIO ENVIADO GRACIAS POR CONTACTARNOS');
  this.submit();
}