function showPassword() {
    var result = document.getElementById("check").checked;
    if (result == true) {
        document.getElementById("input").setAttribute("type", "text");

    }
    else {
        document.getElementById("input").setAttribute("type", "password");

    }
}