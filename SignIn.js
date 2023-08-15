const signInform = document.querySelector("#sign-in-form");
console.log(signInform);
const signInButton  = document.querySelector("#signInButton");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const registerMessage = document.querySelector(".register-Message")
console.log(signInButton);
console.log(emailInput);
console.log(passwordInput);

fetch("http://localhost:3000/users")
.then(reponse =>reponse.json())
.then(userData=>{
    console.log(userData);
    signInButton.addEventListener('click',function(){
        const email =  emailInput.value;
        const password = passwordInput.value;
        const user =  userData.find(user =>user.email===email && user.password===password);

        if(user){
            localStorage.setItem("userEmail",user.id);
            window.location.href="ContactList.html";
        }else{
            registerMessage.style.display="flex";
        }
    })
})
.catch(error=>{
    console.error("Error : ",error);
})


