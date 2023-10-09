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
  const footer = 
    `
    <div class="container fi-br-align-justify">
          <div class="row" >
            <div class="col-group">
              <h1 style="color: #ff7619; font-weight: bolder;  text-align: center;">CONTÁCTANOS</h1>
            </div>          
          </div>
          <div class="row mt-4">
            <!-- correo y telefono -->
            <div class="col-md">            
              <div class="container">
                <div class="row">
                  <h4 style="color: #ff7619; font-weight: bolder;">Correo:</h4><br>
                </div>
                <div class="row mt-3">
                  <div class="col-md-1">
                    <i class="fa-solid fa-envelope fa-lg" style="color: #8f0000;"></i>
                  </div>
                  <div class="col-md-11">
                    <label for="" style="text-size-adjust: 0.5px;">Polisolida2030@gmail.com</label>
                  </div>
                </div>
  
                <div class="row mt-4">
                  <h4 style="color: #ff7619; font-weight: bolder;">Teléfono:</h4><br>
                </div>
  
                <div class="row mt-3">
                  <div class="col-md-1">
                    <i class="fa-solid fa-phone-volume fa-lg" style="color: #0b3d93;"></i>
                  </div>
                  <div class="col-md-11">
                    <h6>+51 956 784 052</h6>
                  </div>
                </div>
              </div>
            </div>
            <!-- redes -->
            <div class="col-md">
              <div class="container">
                <div class="row">
                  <h4 style="color: #ff7619; font-weight: bolder;">Redes sociales:</h4><br>
                </div>
                <div class="row mt-3">
                  <div class="col-md-1">
                    <a href="https://www.facebook.com/Policlinico.SolidarioChincha/" target="_blank">
                      <i class="fa-brands fa-square-facebook fa-2xl" style="color: #0049c7;"></i>
                    </a> 
                  </div>
                  <div class="col-md-11">
                    <a class="link-offset-2 link-underline link-underline-opacity-0" style="color: #0049c7;" href="https://www.facebook.com/Policlinico.SolidarioChincha/" target="_blank"><h6>Facebook</h6></a>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-1">
                    <a href="https://instagram.com/policlinico_solidarioch?igshid=YmMyMTA2M2Y=" target="_blank">
                      <i class="fa-brands fa-instagram fa-2xl" style="color: #f91f56;"></i>
                    </a>
                  </div>
                  <div class="col-md-11">
                    <a class="link-offset-2 link-underline link-underline-opacity-0" style="color: #f91f56;" href="https://instagram.com/policlinico_solidarioch?igshid=YmMyMTA2M2Y=" target="_blank"><h6>Instagram</h6></a>
                  </div>
      
                </div>
                <div class="row mt-3">
                  <div class="col-md-1">
                    <a href="https://api.whatsapp.com/send?phone=956784052&text=Hola%20me%20gustaria%20hacer%20una%20consulta" target="_blank">
                      <i class="fa-brands fa-whatsapp fa-2xl" style="color: #10df01;"></i>
                    </a>
                  </div>
                  <div class="col-md-11">
                    <a class="link-offset-2 link-underline link-underline-opacity-0" style="color: #10df01;"  href="https://api.whatsapp.com/send?phone=956784052&text=Hola%20me%20gustaria%20hacer%20una%20consulta" target="_blank"><h6>WhatsApp</h6></a>                    
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="container">
                <div class="row">
                  <h4 style="color: #ff7619; font-weight: bolder;" class="mb-2">Ubícanos:</h4>
                </div>
                <div class="row mt-3">
                  <div class="col-md-1">
                    <a href="https://www.google.com/maps/place/POLICLINICO+SOLIDARIO+CHINCHA/@-13.4241169,-76.1357736,17z/data=!3m1!4b1!4m6!3m5!1s0x9110176f21f8bbbd:0x42468ad889ad391!8m2!3d-13.4241169!4d-76.1331987!16s%2Fg%2F11szmghn15?hl=es&entry=ttu" target="_blank">
                      <i class="fa-sharp fa-solid fa-location-dot fa-bounce fa-2xl" style="color: #d11a1a;"></i>
                    </a>
                  </div>
                  <div class="col-md-11">
                    <a class="link-offset-2 link-underline link-underline-opacity-0" style="color: rgb(0, 0, 0);" href="https://www.google.com/maps/place/POLICLINICO+SOLIDARIO+CHINCHA/@-13.4241169,-76.1357736,17z/data=!3m1!4b1!4m6!3m5!1s0x9110176f21f8bbbd:0x42468ad889ad391!8m2!3d-13.4241169!4d-76.1331987!16s%2Fg%2F11szmghn15?hl=es&entry=ttu" target="_blank"><h6>Av. San Idelfonso #199 - Chincha(Costado de EsSalud Emergencia)</h6></a>
                  </div>
      
                </div>
                
              </div>
            </div>
          </div>
        </div> 
    
    `;
  document.getElementById("contact").innerHTML = footer;
  document.getElementById("mainheader").innerHTML = header;
});