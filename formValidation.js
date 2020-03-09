function validateForm() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (name === "") {
        alert("Name must be filled out");
        name.style.backgroundColor  = "red";
        return false;
    }
    if(!emailIsValid(email)){
        alert("Invalid email entered");
        email.style.backgroundColor  = "red";
        return false
    }
}
function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}