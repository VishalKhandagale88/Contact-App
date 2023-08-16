var userId;
fetch("http://localhost:3000/users")
  .then((reponse) => reponse.json())
  .then((userData) => {
    userId = localStorage.getItem("userId");
    const userExists = userData.some((user) => user.id == parseInt(userId));
    const saveButton = document.querySelector(".SaveButton");
    const userName = document.querySelector("#name");
    const userPhone = document.querySelector("#phoneNumber");
    const userEmail = document.querySelector("#email");
    const user = userData.find((user) => user.id == userId);
    userContacts = user;
    console.log(userContacts);
    const contactTable = document.querySelector(".contactTable table");
    updateContactTable();
    function updateContactTable() {
      user.contactLis.forEach((contact) => {
        const newRow = contactTable.insertRow();
        const nameCell = newRow.insertCell();
        const phoneCell = newRow.insertCell();
        const emailCell = newRow.insertCell();

        nameCell.innerHTML = contact.name;
        phoneCell.innerHTML = contact.phoneNumber;
        emailCell.innerHTML = contact.email;
      });
    }
    saveButton.addEventListener("click", function () {
      if (userExists) {
        if (
          userName.value == "" &&
          userPhone.value == "" &&userPhone.length<10 &&
          userEmail.value == ""
        ) {
          alert("Please fill all the values ");
        } else {
          console.log("in if condition");
          const newContact = {
            name: userName.value,
            phoneNumber: userPhone.value,
            email: userEmail.value,
          };

          user.contactLis.push(newContact);

          fetch(`http://localhost:3000/users/${userId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((response) => response.json())
            .then((updatedUser) => {
              console.log(updatedUser);
              // Updated user data
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
      } else {
        alert("No u are in triuble");
      }
    });
  })
  .catch((error) => {
    console.log("you are in trouble");
    console.error("Error : ", error);
  });
