const form = document.querySelector("#Sign-up-Form")
console.log(form);
form.addEventListener('submit', async function(event){
    event.preventDefault();
    const email =  document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const secret = document.querySelector("#sceret").value;
    const latestIdResponse = await fetch('http://localhost:3000/users?_sort=id&_order=desc&_limit=1');    
    const latestIdData = await latestIdResponse.json();
    const latestId = latestIdData.length > 0 ? latestIdData[0].id : 0;
    const newId = latestId + 1;
    const data = {
        id:newId,
        email:email,
        password:password,
        secret:secret,
        contactLis:[
        ]
        
    }
    fetch("http://localhost:3000/users",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(response =>response.text())
    .then(data =>{
        console.log(data);
        window.location.href="SignIn.html";
    })
    .catch(error=>{
        console.error("Error : ",error);
    })
    
});
