document.addEventListener( 'DOMContentLoaded' , () => {     
  const hamburgerButton = document.querySelector('.hamburger-menu'); 
  const mainNav = document.getElementById('main-nav');                       

  hamburgerButton.addEventListener( 'click' , () => {
    const isExpanded = hamburgerButton.getAttribute( 'aria-expanded' ) === 'true' ; 
    hamburgerButton.setAttribute( 'aria-expanded' , !isExpanded ) ; 
    mainNav.classList.toggle( 'nav-open' ) ; 
  } ) ;

  // Cierra el menu si se hace clic fuera de el en dispositivos moviles
  document.addEventListener( 'click' , (event) => { 
    if( !mainNav.contains( event.target ) &&
        !hamburgerButton.contains( event.target ) &&   
        mainNav.classList.contains( 'nav-open' ) ) {
      hamburgerButton.setAttribute( 'aria-expanded' , 'false' ) ; 
      mainNav.classList.remove( 'nav-open' ) ;
    }
  } ) ;

  // Ajusta el menu al cambiar el tamanio de la ventana (para pantallas grandes)
  window.addEventListener( 'resize' , () => {
    if( window.innerWidth >= 768 ) { 
      mainNav.classList.remove( 'nav-open' ) ;
      hamburgerButton.setAttribute('aria-expanded', 'false') ;
    }
    // En pantallas pequenas, el estado del menu se maneja solo con el clic
    // del boton
  } ) ;
} ) ;