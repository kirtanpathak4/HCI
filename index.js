window.addEventListener('load', function() {
    let span1 = document.getElementById("username");
    const user = JSON.parse(localStorage.getItem("user"));
    const name = user.name;
    span1.innerHTML = " " + name ;
});


