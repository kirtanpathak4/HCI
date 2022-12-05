window.addEventListener('load', function() {
    let user = JSON.parse(localStorage.getItem("user"))
    const emv = user.email
    console.log(emv)

    const apt = JSON.parse(localStorage.getItem("getApt"));
console.log(apt.length)
    console.log(localStorage.getItem("getApt"))
    console.log(apt.length)
    for(let i = 0; i < apt.length; i++){
        if(emv == apt[i].email){
            const name = apt[i].name;
            const email = apt[i].email;
            const phone = apt[i].phone;
            const notes = apt[i].notes;
            const schedule = apt[i].schedule;


                document.getElementById( 'myapt' ).innerHTML +=
                '<tr id = "row' + i + '"><td>'+name+'</td><td>'+email+'</td><td>'+phone+'</td><td>'+notes+'</td><td>'+schedule+'</td></tr>';

        }
    }

});


let btn = document.getElementById('logoutbtn');
btn.addEventListener('click', function() {
    localStorage.removeItem("user");
    window.location.href = "index.html";
});