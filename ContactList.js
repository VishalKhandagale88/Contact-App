fetch("http://localhost:3000/users")
  .then((reponse) => reponse.json())
  .then((userData) => {
    const userId = localStorage.getItem("userId");
    const userExists = userData.some((user) => user.id == parseInt(userId));
    const saveButton = document.querySelector(".SaveButton");
    const userName = document.querySelector("#name");
    const userPhone = document.querySelector("#phoneNumber");
    const userEmail = document.querySelector("#email");
    const user = userData.find((user) => user.id == userId);
    const contactTable = document.querySelector(".contactTable table");
    console.log(user);
    updateContactTable();
    function updateContactTable() {
      user.contactLis.forEach((contact) => {
        if (Object.keys(contact).length > 0) {
          const newRow = contactTable.insertRow();
          const nameCell = newRow.insertCell();
          const phoneCell = newRow.insertCell();
          const emailCell = newRow.insertCell();

          nameCell.innerHTML = contact.name || "";
          phoneCell.innerHTML = contact.phoneNumber || "";
          emailCell.innerHTML = contact.email || "";
        }
      });
    }
    saveButton.addEventListener("click", function () {
      if (userExists) {
        if (
          userName.value == "" ||
          userPhone.value == "" ||
          userEmail.value == ""
        ) {
          alert("Please fill all the values ");
        } else {
          const newContact = {
            name: userName.value,
            phoneNumber: userPhone.value,
            email: userEmail.value,
          };
          const phoneNumberExists = user.contactLis.some(
            (contact) => contact.phoneNumber === newContact.phoneNumber
          );
          if (phoneNumberExists) {
            alert("This contact is already present in your contact List");
          } else {
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
              })
              .catch((error) => {
                console.error("Error:", error);
              });
          }
          alert(phoneNumberExists);
        }
      } else {
        alert("No u are in trouble");
      }
    });
  })
  .catch((error) => {
    console.log("you are in trouble");
    console.error("Error : ", error);
  });

function fetchUserDataWithUserId(userId) {}
