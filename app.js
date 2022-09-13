function submit(){
    var fname = document.getElementById("name").value;
    var lname = document.getElementById("lName").value;
    var address = document.getElementById("address").value;
    var obj = {
        fname,
        lname,
        address,

    }

    // var convert = JSON.stringify(obj);
    localStorage.setItem("obj", JSON.stringify(obj))

   
// var femaleGender = document.getElementById("femalegender").value;
// var maleGender = document.getElementById("malegender").value;
// var otherGender = document.getElementById("othergender").value;
// var dob = document.getElementById("dob").value;
// var postCode = document.getElementById("postCode").value;
// var email = document.getElementById("email").value;

console.log(obj)
}
