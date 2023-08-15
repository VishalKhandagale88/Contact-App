fetch("http://localhost:3000/users")
.then(reponse=>reponse.json())
.then(userData=>{
    const userId = localStorage.getItem('userId');    
    const userExists = userData.some(user=>user.id==parseInt(userId));
    console.log(userId);
        const saveButton = document.querySelector('.saveButton');
        const userName =  document.querySelector("#name").value;
        const userPhone =  document.querySelector("#phoneNumber").value;
        const userEmail =  document.querySelector("#email").value;
        const user =  userData.find(user =>user.id===userId);
        console.log(user); 

        saveButton.addEventListener('click',function(){
            console.log("> you are here <");
            
            if(userExists){
                console.log("user is present" );
                const newContact ={
                    name:userName,
                    phoneNumber:userPhone,
                    email:userEmail
                };
                userData[userId]
                userExists.contactLis.push(newContact);
                console.log(userData);
            }
            else{
                alert("No u are in triuble");
            }
            
        })
  
}).catch(error=>{
    console.log("you are in trouble");
    console.error("Error : ",error);
})