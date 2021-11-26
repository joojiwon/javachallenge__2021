const loginform = document.getElementById("login-form");
const loginID = document.getElementById("login__id");
const loginPW = document.getElementById("login__pw");
const loginbtn = document.getElementById("login__submit");



function logincheck() {
    const ID = loginID.value;
const PASSWORD = loginPW.value;
if(localStorage.getItem(ID) == PASSWORD){
    alert("SUCCESS");
} else{
    alert("wrong");
}
}
loginbtn.addEventListener("click", logincheck);