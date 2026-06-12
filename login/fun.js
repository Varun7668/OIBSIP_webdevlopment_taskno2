function showLogin(){
    document.getElementById("registerBox").style.display="none";
    document.getElementById("loginBox").style.display="block";
}

function showRegister(){
    document.getElementById("loginBox").style.display="none";
    document.getElementById("registerBox").style.display="block";
}

function register(){

    let username=document.getElementById("regUser").value;
    let password=document.getElementById("regPass").value;

    if(username==="" || password===""){
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("username",username);
    localStorage.setItem("password",password);

    alert("Registration Successful");

    showLogin();
}

function login(){

    let user=document.getElementById("loginUser").value;
    let pass=document.getElementById("loginPass").value;

    let savedUser=localStorage.getItem("username");
    let savedPass=localStorage.getItem("password");

    if(user===savedUser && pass===savedPass){

        document.getElementById("loginBox").style.display="none";
        document.getElementById("securePage").style.display="block";

    }
    else{

        alert("Invalid Username or Password");

    }

}

function logout(){

    document.getElementById("securePage").style.display="none";
    document.getElementById("loginBox").style.display="block";

}