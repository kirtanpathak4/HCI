window.addEventListener('load', function() {
    let span1 = document.getElementById("username");
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(localStorage.getItem("user"))
    console.log(user)
    const name = user.name;
    span1.innerHTML = " " + name ;
});

let btn = document.getElementById('logoutbtn');
btn.addEventListener('click', function() {
    localStorage.removeItem("user");
    window.location.href = "index.html";
});

const var4 = document.getElementById("btn");
var4.addEventListener('click', function(e) {
    e.preventDefault();
    let name = document.querySelectorAll('input')[0].value.trim();
    let email = document.querySelectorAll('input')[1].value.trim();
    let message = document.querySelectorAll('input')[2].value.trim();
    let var5_list = [];

    if(name.length == 0) {
        var5_list.push("Please Enter Your Name");
    }
    if(email.length == 0) {
        var5_list.push("Please Enter Your Email");
    }
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        var5_list.push("Invalid Email id Format")
    }
    if(message.length == 0) {
        var5_list.push("Please Enter Your message");
    }
    let var6 = document.querySelector(".show-err");

    if(var5_list.length != 0) {
        for(let i = 0; i < var5_list.length; i++) {

           var6.innerHTML =  var5_list.join("<br>");
        }
    }
    if(var5_list.length == 0 ){
        alert("Query Submitted")
        var6.innerHTML = ".";
        document.querySelectorAll('input')[0].value = "";
        document.querySelectorAll('input')[1].value = "";
        document.querySelectorAll('input')[2].value = "";
    }
});