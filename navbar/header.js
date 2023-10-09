document.addEventListener("DOMContentLoaded", function (){
  const header = 
  `
  <nav class="navbar navbar-expand-md navbar-light fixed shadow rounded" style="background-color:#F2F2F2;">
      <div class="container-fluid">          
        <div class="col md">
          <a class="navbar-brand" href="#" style="color: #ffffff;font-weight: bold;" ><img class="ms-5" src="../imagenes/LOGO SIN FONDO 1.png" alt="" width="200"></a>
        </div>
        <div class="col-md">
          <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
             <i class="fa-solid fa-bars fa-lg" style="color: #ffffff;"></i>
           </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"><a  class="nav-link active fs-5" aria-current="page" href="../index.html" style="color: #447ae0;">INICIO</a></li>
            <li class="nav-item"><a  class="nav-link fs-5"  style="color: #447ae0;" href="../index.html#about">NOSOTROS</a></li>
            <li class="nav-item dropdown" hover>
              <a  class="nav-link dropdown-toggle fs-5" data-bs-toggle="dropdown" role="button"  aria-expanded="false" style="color: #447ae0;" href="#">SERVICIOS</a>
              <ul class="dropdown-menu" style="background-color: #F2F2F2;">
                <li><a class="dropdown-item" style="color: #447ae0;" href="../servicios/laboratorio.html">Laboratorio Clinico</a></li>
                <li><a class="dropdown-item" style="color: #447ae0;" href="../servicios/ecografia.html">Ecografia</a></li>
                <li><a class="dropdown-item" style="color: #447ae0;" href="../servicios/radiografia.html">Rayos X</a></li>
                <li><a class="dropdown-item" style="color: #447ae0;" href="../servicios/topico.html">Topico</a></li>
                <li><a class="dropdown-item" style="color: #447ae0;" href="../servicios/electrocardiograma.html">Electrocardiograma</a></li>
                <li><a class="dropdown-item" style="color: #447ae0;" href="../servicios/medidavista.html">Medida de vista</a></li>
                <li><a class="dropdown-item" style="color: #447ae0;" href="../servicios/nebulizacion.html">Nebulización</a></li>
                <li><a class="dropdown-item" style="color: #447ae0;" href="../servicios/anatomiapato.html">Anatomía Patológica</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown" hover>
              <a   class="nav-link dropdown-toggle fs-5" data-bs-toggle="dropdown" role="button"  aria-expanded="false" style="color: #447ae0;" href="#">ESPECIALIDADES</a>
              <ul class="dropdown-menu" style="background-color: #F2F2F2;">
                <li><a class="dropdown-item" style="color: #447ae0;" href="../especialidades/m.general.html">Medicina General</a></li>
                <li><a class="dropdown-item" style="color: #447ae0;" href="../especialidades/m.interna.html">Medicina Interna</a></li>
                <li><a class="dropdown-item" style="color: #447ae0;" href="../especialidades/pediatria.html">Pediatria</a></li>
                <li><a class="dropdown-item" style="color: #447ae0;" href="../especialidades/ginecologia.html">Ginecología</a></li>
                <li><a class="dropdown-item" style="color: #447ae0;" href="../especialidades/cirujia.html">Cirugía general</a></li>
                <li><a class="dropdown-item" style="color: #447ae0;" href="../especialidades/neurologia.html">Neurología</a></li>
                <li><a class="dropdown-item" style="color: #447ae0;" href="../especialidades/traumatologia.html">Traumatología</a></li>
                <li><a class="dropdown-item" style="color: #447ae0;" href="../especialidades/terapiafisica.html">Terapia fisica y rehabilitacion</a></li>
                <li><a class="dropdown-item" style="color: #447ae0;" href="../especialidades/obstetricia.html">Obstetricia</a></li>
                <li><a class="dropdown-item" style="color: #447ae0;" href="../especialidades/urologia.html">Urología</a></li>
                <li><a class="dropdown-item" style="color: #447ae0;" href="../especialidades/dermatologia.html">Dermatología</a></li>
                <li><a class="dropdown-item" style="color: #447ae0;" href="../especialidades/reumatologia.html">Reumatología</a></li>
                <li><a class="dropdown-item" style="color: #447ae0;" href="../especialidades/cardiologia.html">Cardiología</a></li>
                <li><a class="dropdown-item" style="color: #447ae0;" href="../especialidades/terapialenguaje.html">Terapia de lenguaje</a></li>
                <li><a class="dropdown-item" style="color: #447ae0;" href="../especialidades/psicologia.html">Psicología</a></li>
                <li><a class="dropdown-item" style="color: #447ae0;" href="../especialidades/otorrinolaringologia.html">Otorrinolaringología</a></li>
                <li><a class="dropdown-item" style="color: #447ae0;" href="../especialidades/m.complementaria.html">Medicina complementaria</a></li>
                <li><a class="dropdown-item" style="color: #447ae0;" href="../especialidades/odontopediatria.html">Odontopediatría</a></li>
                <li><a class="dropdown-item" style="color: #447ae0;" href="../especialidades/odontologia.html">Odontología</a></li>
              </ul>
            </li>
            <li class="nav-item"><a  class="nav-link fs-5" style="color: #447ae0;" href="../index.html#trabaja">TRABAJA CON NOSOTROS</a></li>
            <li class="nav-item"><a  class="nav-link fs-5" style="color: #447ae0;" href="../index.html#contact">CONTACTO</a></li>
          </ul>
        </div>
      </div>
    </nav> 
  
  `;
  document.getElementById("mainheader").innerHTML = header;
});
