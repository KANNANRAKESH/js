let root = [];
let edittext;
function welcomeFunction() {
  getList();
}

function getList() {
  edittext = undefined;
  let url = "https://64cc86d82eafdcdc8519ed61.mockapi.io/employee/employee";
  fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((Result) => Result.json())
    .then((string) => {
      // Printing our response
      console.log(string);
      root = string;
      console.log(root);
      addTable();
      // Printing our field of our response
      console.log(`Title of our response :  ${root[0].firstName}`);
    })
    .catch((errorMsg) => {
      console.log(errorMsg);
    });
}
function addTable() {
  var tell = "";
  var index = 0;
  console.log(root);
  for (i = 0; i < root.length; i++) {
    index = index + 1;
    tell += "<tr>";
    tell += "<td>" + index + "</td>";
    tell += "<td>" + root[i].firstName + "</td>";
    tell += "<td>" + root[i].email + "</td>";
    tell += "<td>" + root[i].number + "</td>";
    tell += "<td>" + root[i].gender + "</td>";

    tell +=
      "<td><button type='button' class='btn btn-primary me-2' onclick='edit(" +
      root[i].id +
      ")'>Edit</button><button type='button' class='btn btn-danger'  onclick='Delete (" +
      root[i].id +
      ")''>Delete</button> </td>";
    tell += "</tr>";
  }
  document.getElementById("displayForm").innerHTML = tell;
}
function Delete(id) {
  // root.splice(id, 1);
  let url = "https://64cc86d82eafdcdc8519ed61.mockapi.io/employee/employee";
  fetch(url + "/" + id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then((Result) => Result.json())
    .then((string) => {
      getList();
    })
    .catch((errorMsg) => {
      console.log(errorMsg);
    });
}
function edit(id) {
  edittext = id;
  window.location.href = "index.html?id=" + id;
  //   let url = "https://64cc86d82eafdcdc8519ed61.mockapi.io/employee/employee";
  //   fetch(url + "/" + id, {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((Result) => Result.json())
  //     .then((string) => {
  //       // Printing our response
  //       console.log(string);
  //       root = string;
  //       console.log(root);

  //       // Printing our field of our response
  //       document.getElementById("firstName").value = root.firstName;
  //       document.getElementById("email").value = root.email;
  //       document.getElementById("number").value = root.number;
  //       document.getElementById("gender").value = root.gender;
  //       console.log(`Title of our response :  ${root.firstName}`);
  //     })
  //     .catch((errorMsg) => {
  //       console.log(errorMsg);
  //     });
}
