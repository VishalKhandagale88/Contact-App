const form = document.querySelector("#Sign-up-Form")
console.log(form);
form.addEventListener('submit', function(event){
    event.preventDefault();
    const email =  document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const secret = document.querySelector("#sceret");
    console.log(email + "  " +password +" "+ secret);
});