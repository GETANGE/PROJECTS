class Login {
  constructor(form, fields) {
    this.fields = fields;
    this.form = form;
    this.validateOnSubmit();
  }

  validateOnSubmit() {
    let self = this;
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      var error = 0;
      self.fields.forEach((field) => {
        const inputs = document.querySelectorAll(`.${field}`);
        inputs.forEach((input) => {
          if (self.validateFields(input) === false) {
            error++;
          }
        });
      });
      if (error == 0) {
        //login API adding.
        localStorage.setItem('auth', 1);
        this.form.submit();
      }
    });
  }

  validateFields(field) {
    if (field.value.trim() == '') {
      this.setStatus(
        field,
        `${field.previousElementSibling.innerText} cannot be empty`,
        'error'
      );
      return false;
    } else {
      if (field.type === 'password') {
        if (field.value.length < 8) {
          this.setStatus(
            field,
            `${field.previousElementSibling.innerText} must be at least 8 characters`,
            'error'
          );
          return false;
        } else {
          this.setStatus(field, null, 'success');
          return true;
        }
      } else {
        this.setStatus(field, null, 'success');
        return true;
      }
    }
  }

  setStatus(field, message, status) {
    const errorMessage = field.parentElement.querySelector('.error-message');

     if (status === 'success') {
        errorMessage.style.display = 'none';
       field.classList.remove('input-error');
     }else if (status == 'error') {
      errorMessage.innerText = message;
      errorMessage.style.display = 'block';
      field.classList.add('input-error');
    }
  }
}

// Create a variable for the form.
const form = document.querySelector('.login-form');
if (form) {
  const fields = ['username', 'email', 'password'];
  const validator = new Login(form, fields);
}