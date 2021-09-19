let toggleBtn = document.getElementById("toggle-login");
let loginForm = document.getElementById("form-login");

toggleBtn.addEventListener("click",function(){
    loginForm.classList.toggle("hidden");

    if(loginForm.classList.contains("hidden")){
        this.innerHTML = "Log ind";
    }
    else{
        this.innerHTML ="Cancel";
    }
});