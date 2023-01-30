{/* <section class="row container-fluid fondo_formulario ocultar" id="section_contacto">
        <article class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
              <hr>
              <h5>FORMULARIO DE CONTACTO</h5>
              <hr>
          <!-- Trabajamos con la funcion validarFormulario() a través del id= "contacto-form" en js contactos.js-->
          <form id="contact-form" onsubmit="return validarFormulario()" action="index.html#contacto" method="GET">
            <div class="mb-6">
              <label class="form-label">Nombre de Usuario</label>
              <input type="text" class="form-control" id="name"  placeholder="Ingrese el usuario">
            </div><br>
            <div class="mb-6">
              <label  class="form-label">Correo</label>
              <input type="email" class="form-control" id="email" name="email"  placeholder="Ingrese el correo">
            </div><br>
            <div class="mb-6">
              <label class="form-label">mensaje</label>
              <textarea class="form-control" id="message" name="message" rows="3"></textarea>
            </div><br>
            <button class="btn btn-info"><i class="bi bi-folder-symlink-fill"></i> Enviar</button><hr>
        </form>
        </article>
      </section> */}

      const btn = document.getElementById('button');



document.querySelector('form')
 .addEventListener('submit', function(event) {
  event.preventDefault();
  const alerta = document.getElementById('mensaje');
  alerta.classList.add("alert","alert-danger","h6");
 
  var usuario = document.getElementById('name').value;
    if(usuario.length == 0) {
      alerta.textContent = 'No a ingresado nombre de usuario';
      return;
    }
  var email = document.getElementById('email').value;
    if(email.length == 0) {
      alerta.textContent = 'No a escrito nada en el email';
      return;
    }
    else if (email.match(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i) == null) {
      alerta.textContent = 'El Email no es Correcto';
      return;
    }
  var mensaje = document.getElementById('message').value;
    if(mensaje.length == 0) {
      alerta.textContent = 'No a escrito ningún mensaje';
      return;
    }

  btn.value = 'Enviando...';

  const serviceID = 'default_service';
  const templateID = 'template_pgzdyds';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert.hidden
      document.getElementById('mensaje').innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
      <p><i class="bi bi-envelope-check"></i> Su mensaje ha sido enviado correctamente</p>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
      this.submit();
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
