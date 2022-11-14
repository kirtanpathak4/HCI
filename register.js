window.addEventListener('load', function() {
    let var1 = JSON.parse(localStorage.getItem("userData"));
        if(var1 != null) { 
            localStorage.setItem("reLoad", JSON.stringify(var1));
            let var2 = JSON.parse(localStorage.getItem("reLoad"));
            var2.forEach(function(item, index) {
                var3_list.push(item)
            })
            localStorage.removeItem("reLoad")

        }
})


var3_list = [];
const var4 = document.getElementById("btn");
var4.addEventListener('click', function(e) {
    e.preventDefault();
    
    let name = document.querySelectorAll('input')[0].value.trim();
    let email = document.querySelectorAll('input')[1].value.trim();
    let password = document.querySelectorAll('input')[2].value.trim();


    let var5_list = [];
    
    if(name.length == 0) {
        var5_list.push("Please Enter Your Name");
    }
    if(email.length == 0) {
        var5_list.push("Please Enter Your Email");
    }
    if(password.length == 0) {
        var5_list.push("Please Enter Your Password");
    }
    if(password.length <8) {
        var5_list.push('Please enter password with more than 8 characters!');
    }

    let var6 = document.querySelector(".show-err");
    
    if(var5_list.length != 0) {
        for(let i = 0; i < var5_list.length; i++) {

           var6.innerHTML =  var5_list.join("<br>");
        }
    }
    
    if(var5_list.length == 0 ) {
        
        let var7 = JSON.parse(localStorage.getItem("userData"));

        if(var7 == null) {

            let person = {
                'name' : name,
                'email' : email,
                'password' : password
            }

            var3_list.push(person);

            localStorage.setItem("userData", JSON.stringify(var3_list));

            var6.innerHTML = "Registered Successfully.";
            document.querySelectorAll('input')[0].value = "";
            document.querySelectorAll('input')[1].value = "";
            document.querySelectorAll('input')[2].value = "";
        } else {

            let success_tracker = [];

            for(let i = 0; i < var7.length; i++){

				if(var7[i].email == email){
					success_tracker.push(var7[i].email);
					break;
				}
			}

            if(success_tracker.length > 0){

                var6.innerHTML = `User with the ${email} Already Exit.`;
                document.querySelectorAll('input')[0].value = "";
                document.querySelectorAll('input')[1].value = "";
                document.querySelectorAll('input')[2].value = "";

			}else{
				let person = {
                    'name' : name,
                    'email' : email,
                    'password' : password
                }
    
                var3_list.push(person);
    
                localStorage.setItem("userData", JSON.stringify(var3_list));
    
                var6.innerHTML = "Registered Succesfully";
                document.querySelectorAll('input')[0].value = "";
                document.querySelectorAll('input')[1].value = "";
                document.querySelectorAll('input')[2].value = "";

                return true;

			}
            
        }

    }
    


})
