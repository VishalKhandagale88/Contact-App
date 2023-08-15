const form = document.querySelector("#Sign-up-Form")
console.log(form);
form.addEventListener('submit', function(event){
    event.preventDefault();
    const email =  document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const secret = document.querySelector("#sceret").value;

    const data = {
        email:email,
        password:password,
        secret:secret,
        contactLis:[{

        }]
        
    }
    fetch("http://localhost:3000")

    const jsonData = JSON.stringify(data,null,2);

    const saveDataToFile = () => {
        return new Promise((resolve, reject) => {
            resolve(jsonData);
        },1000);
    }

    saveDataToFile().then(savedData=>{
        console.log("Data saved : ",savedData);
    }).catch(error=>{
        console.error("Error : ",error);
    })
});