function validate() {
    var name = document.getElementById('name').value;
    var add = document.getElementById('add').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;
    var num = document.getElementById('num').value;
    var year = document.getElementById('year').value;
    var pwd1 = document.getElementById('pwd1').value;
    var pwd2 = document.getElementById('pwd2').value;



    if (name.trim() == "" || name == null) {
        alert('Username Field is Empty!');
        return false;
    }
    else if (name.length < 3 || name.length > 10) {
        alert('Username: Minimum 3 Characters, Maximum 10 characters');
        return false;
    }
    else if (age < 20 || age > 80) {
        alert('Enter Age within 20 to 80 years');
        return false;
    }
    else if (isNaN(age)) {
        alert('Age: Enter Numeric Value');
        return false;
    }
    else if (age.trim() == "" || age == null) {
        alert('Age: Field is Empty!');
        return false;
    }
    else if (pwd1 == "" || pwd1 == null) {
        alert('Password: Field is Empty!');
        return false;
    }
    else if (pwd1.trim().length < 8) {
        alert('Password: Minimum length is 8 characters.At least 1 special character & 1 number');
        return false;
    }
    else if (pwd2 != pwd1) {
        alert("Passwords don't match");
        return false;
    }
    else if (num == "" || num == null) {
        alert('Phone Number: Field is Empty!');
        return false;
    }
    else if (num.length < 10) {
        alert('Phone Number: Invalid Phone Number entered. Enter 10 digit number.');
        return false;
    }
    else if (isNaN(year)) {
        alert('Year: Enter a Numeric Value!');
        return false;
    }
    else if (year == "" || year == null) {
        alert('Year: Field is Empty!');
        return false;
    }

    else if (add == "" || add == null) {
        alert('Address: Field is Empty!');
        return false;
    }
    else if (add.length > 150) {
        alert('Address: Maximum 150 characters');
        return false;
    }
    else if (email == "" || email == null) {
        alert('Email: Field is Empty!');
        return false;
    }
    year = year.trim();
    var date_obj = new Date();
    var present_year = date_obj.getUTCFullYear();
    if ((present_year - year) != age) {
        alert("Year of birth does not match with age");
        return false;
    }
    
    return true;
}

function generator() {
    var email = document.getElementById('email').value;
    var username = email.split('@')[0];

    document.getElementById("myText").value = username;
}
function myFunction() {
var x = document.getElementById("pwd1");
if (x.type === "password") {
  x.type = "text";
} else {
  x.type = "password";
}
}

