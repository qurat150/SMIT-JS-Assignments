function find() {
    var text = document.getElementById("text");
    if (text != -1) {
        var find = document.getElementById("find").value
        var replace = document.getElementById("update").value
        text.textContent = text.textContent.replace(find , replace)
    } else{
        console.log("Please Enter valid value")
    }
}