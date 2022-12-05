window.addEventListener('load', function() {
        let span1 = document.getElementById("username");
        const user = JSON.parse(localStorage.getItem("user"));
        const name = user.name;
        span1.innerHTML = " " + name ;
    });
//List of various activities for user to choose from
var activitylist = 
    [
        {
            name: "Meetups",
            image: "Images/meetupsTask.jpeg"
        },
        {
            name: "Fun Activities",
            image: "Images/funActivitiesTask.jpeg"
        },
        {
            name: "Mental Health",
            image: "Images/mentalHealthTask.jpeg"
        }
    ];

// Function to load all the activities available
window.addEventListener('load', ()=>{
    localStorage.setItem("activitylist", JSON.stringify(activitylist));
    let activity = JSON.parse(localStorage.getItem("activitylist"))
    for(let i = 0; i<activity.length; i++){
        addActivities(activity[i]);
    }
});

function addActivities(activity){
    let activityName = document.createElement('p');
    let activityImage = document.createElement('img'); 
    let activityBtn = document.createElement('p');
    let activityBtnDiv = document.createElement('div');
    let item = document.createElement('div');
    let maindiv = document.getElementById("items");
    item.classList.add("item");
   
    activityBtn.innerHTML = "Join Now";
    if (activity.name == "Meetups") {
        activityBtn.innerHTML = "A place where users can chat <br> with their colleagues on topics other <br> than work- related.";
    } 
    else if (activity.name == "Fun Activities") {
        activityBtn.innerHTML = "A place where users can play <br> different fun activities and games with their <br> colleagues to cope with work- related stress.";
    }  
    else if (activity.name == "Mental Health") {
        activityBtn.innerHTML = "A place where users can read <br> different podcasts related to mental health <br> and can book an appointment with a professional.";
    }   
    maindiv.appendChild(item);
    item.appendChild(activityImage);
    item.appendChild(activityName);
    item.appendChild(activityBtnDiv);
    activityBtnDiv.appendChild(activityBtn);
    activityImage.src=activity.image;
    activityName.innerHTML = activity.name;
    activityName.style.backgroundColor='#DC3545';
    activityName.style.color='white';
    activityName.style.marginTop ='10px';
    activityName.style.marginLeft ='50px';
    activityName.style.marginRight ='50px';
    activityName.style.textAlign='center';
}
