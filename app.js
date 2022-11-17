function showHide(){
    if(document.getElementById("login").style.display != "Block" && document.getElementById("register").style.display != "none"){
        document.getElementById("login").style.display = "Block";
        document.getElementById("register").style.display = "none";
        console.log("show login");
    }
    else {
        document.getElementById("login").style.display = "none";
        document.getElementById("register").style.display = "block";
        console.log("show register");
    }
}