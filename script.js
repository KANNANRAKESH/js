let root = [];
let edittext;
function myFunction() {
  var firstName = document.getElementById("firstName").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var gender = document.getElementById("gender").value;

  var isFlag = false;
  if (firstName == "") {
    document.getElementById("firstNameError").innerHTML =
      "first name required*";
    isFlag = false;
  } else {
    document.getElementById("firstNameError").innerHTML = " ";
    isFlag = true;
  }
  if (email == "") {
    document.getElementById("emailError").innerHTML = "email required*";
    isFlag = false;
  } else {
    document.getElementById("emailError").innerHTML = " ";
    isFlag = true;
  }
  if (number == "") {
    document.getElementById("numberError").innerHTML = "number required*";
    isFlag = false;
  } else {
    document.getElementById("numberError").innerHTML = " ";
    isFlag = true;
  }
  if (gender == "") {
    document.getElementById("genderError").innerHTML = "gender required*";
    isFlag = false;
  } else {
    document.getElementById("genderError").innerHTML = " ";
    isFlag = true;
  }
  if (isFlag) {
    let obj = {
      email: email,
      firstName: firstName,
      number: number,
      gender: gender,
    }; // Url for the request

    let url = "https://64cc86d82eafdcdc8519ed61.mockapi.io/employee/employee";

    if (edittext != undefined) {
      fetch(url + "/" + edittext, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      })
        .then((Result) => Result.json())
        .then((string) => {
          // Printing our response
          console.log(string);
          window.location.replace("List.html");
          // getList();
          // Printing our field of our response
          console.log(`Title of our response :  ${string.firstName}`);
        })
        .catch((errorMsg) => {
          console.log(errorMsg);
        });
    } else {
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      })
        .then((Result) => Result.json())
        .then((string) => {
          // Printing our response
          console.log(string);
          window.location.replace("List.html");
          // getList();
          // Printing our field of our response
          console.log(`Title of our response :  ${string.firstName}`);
        })
        .catch((errorMsg) => {
          console.log(errorMsg);
        });
    }
    document.getElementById("firstName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
    document.getElementById("gender").value = "";
  }
}
function welcomeFunction() {
  // getList();
  edit();
}

// function getList() {
//   edittext = undefined;
//   let url = "https://64cc86d82eafdcdc8519ed61.mockapi.io/employee/employee";
//   fetch(url, {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   })
//     .then((Result) => Result.json())
//     .then((string) => {
//       // Printing our response
//       console.log(string);
//       root = string;
//       console.log(root);
//       addTable();
//       // Printing our field of our response
//       console.log(`Title of our response :  ${root[0].firstName}`);
//     })
//     .catch((errorMsg) => {
//       console.log(errorMsg);
//     });
// }
// function addTable() {
//   var tell = "";
//   var index = 0;
//   console.log(root);
//   for (i = 0; i < root.length; i++) {
//     index = index + 1;
//     tell += "<tr>";
//     tell += "<td>" + index + "</td>";
//     tell += "<td>" + root[i].firstName + "</td>";
//     tell += "<td>" + root[i].email + "</td>";
//     tell += "<td>" + root[i].number + "</td>";
//     tell += "<td>" + root[i].gender + "</td>";

//     tell +=
//       "<td><button type='button' class='btn btn-primary me-2' onclick='edit(" +
//       root[i].id +
//       ")'>Edit</button><button type='button' class='btn btn-danger'  onclick='Delete (" +
//       root[i].id +
//       ")''>Delete</button> </td>";
//     tell += "</tr>";
//   }
//   document.getElementById("displayForm").innerHTML = tell;
// }
// function Delete(id) {
//   // root.splice(id, 1);
//   let url = "https://64cc86d82eafdcdc8519ed61.mockapi.io/employee/employee";
//   fetch(url + "/" + id, {
//     method: "DELETE",
//     headers: { "Content-Type": "application/json" },
//   })
//     .then((Result) => Result.json())
//     .then((string) => {
//       getList();
//     })
//     .catch((errorMsg) => {
//       console.log(errorMsg);
//     });
// }
function edit() {
  // edittext = id;
  console.log(window);
  var url_string = window.location.href.toLocaleLowerCase();
  console.log(url_string);
  var url1 = new URL(url_string);
  console.log(url1);
  var id = url1.searchParams.get("id");
  if(id){
  let url = "https://64cc86d82eafdcdc8519ed61.mockapi.io/employee/employee";
  fetch(url + "/" + id, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((Result) => Result.json())
    .then((string) => {
      // Printing our response
      console.log(string);
      root = string;
      console.log(root);
      // Printing our field of our response
      document.getElementById("firstName").value = root.firstName;
      document.getElementById("email").value = root.email;
      document.getElementById("number").value = root.number;
      document.getElementById("gender").value = root.gender;
      console.log(`Title of our response :  ${root.firstName}`);
    })
    .catch((errorMsg) => {
      console.log(errorMsg);
    });
  }
}
