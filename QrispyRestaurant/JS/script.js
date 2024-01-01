const navLinks = document.querySelectorAll('.nav-top');
            const menuToggle = document.getElementById('navbarNav');
            const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

            navLinks.forEach((l) => {
                l.addEventListener('click', () => {
                    if (window.innerWidth <= 992) {
                        bsCollapse.toggle();
                    }
                });
}); 

(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()