const var4 = document.getElementById("btn");

let var1 = document.querySelector(".show-err");

var4.addEventListener('click', function(e) {
    e.preventDefault();
    let email = document.querySelectorAll('input')[0].value.trim();
    let password  = document.querySelectorAll('input')[1].value.trim();

    // if(email.length == 0) {
    //     var1.push("Please Enter Your Email");
    // }
    // if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
    //     var1.push("Invalid Email id Format")
    // }
    // if(password.length == 0) {
    //     var1.push("Please Enter Your Password");
    // }
    // if(password.length <8) {
    //     var1.push('Please enter password with more than 8 characters!');
    // }
    let var2 = JSON.parse(localStorage.getItem("userData"));
    let var3_list = [];
    if(var2 == null) {
        var1.innerHTML = "Invalid Credentials!";
    } else {
        for(let i = 0; i < var2.length; i++){
            if(var2[i].email == email && var2[i].password == password){
                var3_list.push(var2[i].name, email, password);
                break;
            }
        }
        if(var3_list.length > 0){
            let userDetail = {
            'name' : var3_list[0],
            'email' : var3_list[1]
            }

            localStorage.setItem("user", JSON.stringify(userDetail));
            window.location.href = "initialPage.html";
        }else{
            var1.innerHTML = "Invalid Credentials!";
            document.querySelectorAll('input')[0].value = "";
            document.querySelectorAll('input')[1].value = "";
        }
    }
})
