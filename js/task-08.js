const ref = {
  forma: document.querySelector(".login-form"),
  
};

ref.forma.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {

  event.preventDefault();
  const arr = {
    email: "",
    password: "",
  }
  const formElemens = event.currentTarget.elements;
  const mail = formElemens.email.value;
  const password = formElemens.password.value;
 
  if(!formElemens.password.value || !formElemens.email.value){
    alert(`всі поля повинні бути заповнені.`)
  }
  arr.email = formElemens.email.value,
  arr.password = formElemens.password.value
  console.log(arr);
  event.currentTarget.reset()
}
