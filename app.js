function submit(){
    var fname = document.getElementById("name").value;
    var lname = document.getElementById("lName").value;
    var address = document.getElementById("address").value;
    var pass = document.getElementById("pass").value;
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;
    var postCode = document.getElementById("postCode").value;
    var obj = {
        fname,
        lname,
        address,
        pass,
        dob,
        email,
        postCode,

    }

    // var convert = JSON.stringify(obj);
    localStorage.setItem("obj", JSON.stringify(obj));
    window.location = "signin.html";

console.log(obj)
}

// Below function Executes on click of login button.
function validate(){
    var get = localStorage.getItem(JSON.stringify(obj));
    get = JSON.parse();
    
//     var username = document.getElementById("loginEmail").value;
//     var password = document.getElementById("loginPass").value;
    // if ( username == get.obj[fname] && password == get[obj]){
    // alert ("Login successfully");
    // window.location = "success.html"; // Redirecting to other page.
    // return false;
    // }
    console.log(get.fname)
}
















// Code for loading Bar
// var i = 0;
// function move() {
//   if (i == 0) {
//     i = 1;
//     var elem = document.getElementById("myBar");
//     var width = 1;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//       }
//     }
//   }
// }
