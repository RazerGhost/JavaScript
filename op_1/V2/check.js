function submit(){
    let perms = document.getElementById("perms").value;
    let code = document.getElementById("code").value;

    switch (perms) {
        case "admin":
            if (code == "admin") {
                alert("is an admin");
            }
            else {

                alert("ongeldige code");
            }
            break;
        case "student":
            if (code == "student") {
                alert("is an student");
            }
            else {
                alert("ongeldige code");
            }
            break;
        default:
            alert("onbekende rol")
    }
}