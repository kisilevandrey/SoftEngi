function validate() {
    var username = document.getElementById("UserName");
    var password = document.getElementById("UserPassword");

    if(!username.value) {
        UserName.style.border = "2px solid red";
        return false;
    }

    if(!password.value) {
        UserPassword.style.border = "2px solid red";
        return false;
    }

    return true;
}


function validate_name(){
    var name = document.getElementById("Name");

    if(!name.value){
        Name.style.border = "2px solid red"
        document.getElementById("Name").placeholder = "Введите имя";

        return false;
    }
    if(name.value.length < 3){
        Name.style.border = "2px solid red"
        document.getElementById("Name").placeholder = "Введите не менее 3 символов";

        return false;
    }
    else{
        Name.style.border = "2px solid green"
    }
    return true;
}

function validate_login(){
    var username = document.getElementById("UserName");

    if(!username.value){
        UserName.style.border = "2px solid red"
        document.getElementById("UserName").placeholder = "Придумайте логин";

        return false;
    }
    if(username.value.length < 3){
        UserName.style.border = "2px solid red"
        document.getElementById("UserName").placeholder = "Введите не менее 3 символов";

        return false;
    }
    else{
        UserName.style.border = "2px solid green"
    }
    return true;
}
    var username = document.getElementById("UserName");
    var password1 = document.getElementById("UserPassword1");
    var password2 = document.getElementById("UserPassword2");
    var useremail = document.getElementById("UserEmail");
    var userphone = document.getElementById("UserPhone");
    var name = document.getElementById("Name");
