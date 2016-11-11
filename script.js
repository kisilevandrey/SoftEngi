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


function validate_name(){                          ///function validate input name
    var name = document.getElementById("Name");

    if(!name.value){
        Name.style.border = "2px solid red";
        document.getElementById("Name").placeholder = "Введите имя";
        return false;
    }

    if(name.value.length < 3){
        Name.style.border = "2px solid red";
        document.getElementById("Name").placeholder = "Введите не менее 3 символов";
        return false;
    }

    else{
        Name.style.border = "2px solid green";
    }
    return true;
}

function validate_login(){                              //function validate input login
    var username = document.getElementById("UserName");

    if(!username.value){
        UserName.style.border = "2px solid red";
        document.getElementById("UserName").placeholder = "Придумайте логин";
        return false;
    }

    if(username.value.length < 3){
        UserName.style.border = "2px solid red";
        document.getElementById("UserName").placeholder = "Введите не менее 3 символов";
        return false;
    }

    else{
        UserName.style.border = "2px solid green";
    }
    return true;
}

function validate_email(){                                 //func validate input email with regular expression
    var useremail = document.getElementById("UserEmail");
    var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;

    if(!useremail.value){
        UserEmail.style.border = "2px solid red";
        document.getElementById("UserEmail").placeholder = "Введите имейл";
        return false;
    }

    if(!r.test(useremail.value)){
        UserEmail.style.border = "2px solid red";
        document.getElementById("UserEmail").placeholder = "Введите корректный имейл";
        return false;
    }

    else{
        UserEmail.style.border = "2px solid green";
    }
    return true;
}

function validate_pass1(){                                 //func validate input email with regular expression
    var password1 = document.getElementById("UserPassword1");
    var r = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/ ;

    if(!password1.value){
        UserPassword1.style.border = "2px solid red";
        document.getElementById("UserPassword1").placeholder = "Введите пароль";
        return false;
    }

    if(!r.test(password1.value)){
        UserPassword1.style.border = "2px solid red";
        document.getElementById("UserPassword1").placeholder = "Пароль слишком простой";
        return false;
    }

    else{
        UserPassword1.style.border = "2px solid green";
    }
    return true;
}

function  validate_pass2(){
    var password2 = document.getElementById("UserPassword2");
    var password1 = document.getElementById("UserPassword1");

    if(!password1.value){
        UserPassword2.style.border = "2px solid red";
        document.getElementById("UserPassword2").placeholder = "Введите пароль";
        return false;
    }

    if (password1.value !== password2.value){
        UserPassword2.style.border = "2px solid red";
        document.getElementById("UserPassword2").placeholder = "Пароли не совпадают";
        return false;
    }

    else{
        UserPassword2.style.border = "2px solid green";
    }
    return true;
}
