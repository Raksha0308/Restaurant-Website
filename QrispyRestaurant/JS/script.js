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

const nameError=document.getElementById("name-error");
  const emailError=document.getElementById("email-error");
  const phoneError=document.getElementById("contact-error");
  const cityError=document.getElementById("city-error");
  const msgError=document.getElementById("msg-error");
  const submitError=document.getElementById("submit-error");

  const validateName=()=>{
    let name=document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML='Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='Enter full name';
        return false;
    }
    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

const validateEmail=()=>{
  let email=document.getElementById('contact-email').value;

  if(email.length == 0){
      emailError.innerHTML='Email is required';
      return false;
  }
  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
      emailError.innerHTML='Email invalid ';
      return false;
  }
  emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
      return true;
}

const validatePhone=()=>{
  let phone=document.getElementById('contact-phone').value;


  if(phone.length == 0){
      phoneError.innerHTML='Phone is required';
      return false;
  }
  if(phone.length !== 10){
      phoneError.innerHTML='Phone no should be 10 digits';
      return false;
  }
  if(!phone.match(/^[0-9]{10}$/)){
      phoneError.innerHTML='Enter only digits ';
      return false;
  }
  phoneError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
      return true;
}

const validateCity=()=>{
  let city=document.getElementById('contact-city').value;


  if(city.length == 0){
      cityError.innerHTML='City is required';
      return false;
  }

  if(!city.match(/^[A-Za-z]+$/)){
      cityError.innerHTML='Enter character ';
      return false;
  }
  cityError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
      return true;
}

const validateMsg=()=>{
  let msg=document.getElementById('contact-msg').value;
  var required=30;
  let left=required-msg.length;

  if(left > 0){
      msgError.innerHTML=left+ 'more character required';
      return false;
  }
  
  msgError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
      return true;
}

const validateForm=() =>{
    if(!validateName() || !validateEmail() || !validateContact() || !validateCity() || !validateMsg())
    {
        submitError.style.display='block';
        submitError.innerHTML='Please fix error to submit form';
        setTimeout(()=>{
            submitError.style.display='none';
        },3000);
        return false;
    }  
}


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
