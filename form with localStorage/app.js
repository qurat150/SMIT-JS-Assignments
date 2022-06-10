function login() {
    var getInputData = {
        getUsername: document.querySelector("#username").value,
        getEmail: document.querySelector("#email").value,
        getPassword: document.querySelector("#password").value,
    }
    let inputDataInString = JSON.stringify(getInputData)
    localStorage.setItem("getInputData", inputDataInString)

}

function showData() {
    let getStorageData = localStorage.getItem("getInputData")
    var displayUserData = JSON.parse(getStorageData)
    document.getElementById("userName").innerHTML = "Your name is " + displayUserData.getUsername
    document.getElementById("userEmail").innerHTML = "Your Email is " + displayUserData.getEmail
    document.getElementById("userPassword").innerHTML = "Your Password is " + displayUserData.getPassword


}