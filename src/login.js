const loginform = document.getElementById("login-form");
const loginID = document.getElementById("login__id");
const loginPW = document.getElementById("login__pw");
const loginbtn = document.getElementById("login__submit");



function logincheck() {
    const ID = loginID.value;
    const PASSWORD = loginPW.value;
    localStorage.setItem(ID, PASSWORD);
}
loginbtn.addEventListener("click", logincheck);