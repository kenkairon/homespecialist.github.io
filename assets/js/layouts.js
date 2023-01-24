const nav = `
<section class="container-fluid" id="index">
    <!--Aqui Empieza el Menú de Navegación-->
    <nav class="row navbar navbar-expand-lg"  style="background-color: #e3f2fd;">
      <div class="container-fluid">
        <a href="index.html" class="col-3-lg col-3-md  col-md-auto btn btn-outline-primary imaghover">
          <i class="bi bi-house-door"></i>
          <b>Home Specialist</b>
          <i class="iconos1 bi bi-tools"></i>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item mover">
              <a href="#index" class="btn btn-outline-primary btn-sm imaghover"><i class="bi bi-house"></i><b> Inicio</b></a>
            </li>
            <li class="nav-item mover">
              <a href="#servicios" class="btn btn-outline-danger  btn-sm pr-6 imaghover"><i class="bi bi-wrench-adjustable"></i><b> Servicios</b></a>
            </li>
            <li class="nav-item mover">
              <a href="#contacto" class="btn btn-outline-success btn-sm pr-6 imaghover"><i class="bi bi-person-bounding-box"></i><b> Contacto</b></a>
            </li>
            <li class="nav-item mover">
              <a href="#" class="btn btn-outline-dark btn-sm pr-6 imaghover"><i class="bi bi-folder-plus"></i><b> Ingresar</b></a>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Búsqueda De Especialista" aria-label="Search">
            <button class="btn  btn-outline-success btn-sm pr-6" type="submit"><b> Búsqueda <i class="bi bi-search"></i>Especialistas</b> <i class="bi bi-geo-alt"></i> </button>
          </form>
        </div>
      </div>
    </nav>
    <!--Aqui Termina el Menú de Navegación-->
</section>
`;


document.getElementById("nav").innerHTML = nav;