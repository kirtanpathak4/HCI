window.addEventListener('load', function() {
    let span1 = document.getElementById("username");
    const user = JSON.parse(localStorage.getItem("user"));
    const name = user.name;
    span1.innerHTML = " " + name ;
});


let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
});

window.addEventListener('load', ()=>{
    localStorage.setItem("productlist", JSON.stringify(productlist));
    let data = JSON.parse(localStorage.getItem("productlist"))
    console.log(data);
    for(let i = 0; i<data.length; i++){
        additems(data[i]);
    }
});


function additems(data){
    let item = document.createElement('div');
    let img = document.createElement('img');
    let ptag1 = document.createElement('p');
    let ptag2 = document.createElement('p');
    let quandiv = document.createElement('div');
    let btnsdiv = document.createElement('div');
    let btn1 = document.createElement('button');
    let btn2 = document.createElement('button');
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    let minus = document.createElement('input');
    let plus = document.createElement('input');
    minus.setAttribute('type', 'button');
    plus.setAttribute('type', 'button');
    plus.value = "+";
    minus.value = "-";
    item.classList.add("item");
    img.classList.add("product-img");
    ptag1.classList.add("nameofproduct");
    ptag2.classList.add("price");
    btnsdiv.classList.add("morebtns");
    btn1.classList.add("delete-btn");
    btn2.classList.add("desc-btn");
    quandiv.classList.add("quan");
    let maindiv = document.getElementById("items");
    btn1.innerHTML = "Delete";
    btn2.innerHTML = "View Description";
    maindiv.appendChild(item);
    item.appendChild(img);
    item.appendChild(ptag1);
    item.appendChild(ptag2);
    item.appendChild(quandiv);
    quandiv.appendChild(span1);
    quandiv.appendChild(span2);
    quandiv.appendChild(minus);
    quandiv.appendChild(plus);
    item.appendChild(btnsdiv);
    btnsdiv.appendChild(btn1);
    btnsdiv.appendChild(btn2);
    img.src=data.image;
    ptag1.innerHTML = data.name;
    ptag2.innerHTML = "Price: " + data.price;
    span1.innerHTML = "Quantity ";
    span2.innerHTML = "1: "
}
