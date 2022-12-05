var3_list = [];
// const apt = JSON.parse(localStorage.getItem("getApt"));

let btn = document.getElementById("logoutbtn");
btn.addEventListener("click", function () {
  localStorage.removeItem("user");
  window.location.href = "index.html";
});

window.addEventListener("load", function () {
  let user = JSON.parse(localStorage.getItem("user"));
  const emv = user.email;
  // console.log(emv)
  document.querySelectorAll("input")[1].value = emv;

  let var1 = JSON.parse(localStorage.getItem("getApt"));
  if (var1 != null) {
    localStorage.setItem("reLoad", JSON.stringify(var1));
    let var2 = JSON.parse(localStorage.getItem("reLoad"));
    var2.forEach(function (item, index) {
      var3_list.push(item);
    });
    localStorage.removeItem("reLoad");
  }
});

const var4 = document.getElementById("btn");
var4.addEventListener("click", function (e) {
  e.preventDefault();

  let name = document.querySelectorAll("input")[0].value.trim();
  let email = document.querySelectorAll("input")[1].value.trim();
  let phone = document.querySelectorAll("input")[2].value.trim();
  let notes = document.querySelectorAll("textarea")[0].value.trim();
  let schedule = document.querySelectorAll("input")[3].value.trim();

  let var5_list = [];

  if (name.length == 0) {
    var5_list.push("Please Enter Your Name");
  }
  if (phone.length == 0) {
    var5_list.push("Please Enter Your phone");
  } else {
    if (!phone.match(/^\d{10}$/)) {
      var5_list.push("Please Enter 10 Digits only");
    }
  }
  if (notes.length == 0) {
    var5_list.push("Please Enter Your NOTES");
  }
  if (schedule.length == 0) {
    var5_list.push("Please Select Date and Time");
  }

  let var6 = document.querySelector(".show-err");

  if (var5_list.length != 0) {
    for (let i = 0; i < var5_list.length; i++) {
      var6.innerHTML = var5_list.join("<br>");
    }
  }

  if (var5_list.length == 0) {

    let apt = JSON.parse(localStorage.getItem("getApt"));

    if (apt == null) {
      let appointments = {
        name: name,
        email: email,
        phone: phone,
        notes: notes,
        schedule: schedule,
      };
      var3_list.push(appointments);
      localStorage.setItem("getApt", JSON.stringify(var3_list));
      var6.innerHTML = "Appointment Successful. Go to My Appointments.";
    //   window.location.href = "appointmentdone.html";
      document.querySelectorAll("input")[0].value = "";
      document.querySelectorAll("input")[1].value = "";
      document.querySelectorAll("input")[2].value = "";
      document.querySelectorAll("textarea")[0].value = "";
      document.querySelectorAll("input")[3].value = "";
    } else {
      let success_tracker = [];

      for (let j = 0; j < apt.length; j++) {
        if (schedule == apt[j].schedule) {
          success_tracker.push(schedule);
          break;
        }
      }

    if (success_tracker.length > 0) {
      var6.innerHTML = `User with the ${schedule} Already Exists.`;
      document.querySelectorAll("input")[0].value = "";
      document.querySelectorAll("input")[1].value = "";
      document.querySelectorAll("input")[2].value = "";
      document.querySelectorAll("textarea")[0].value = "";
      document.querySelectorAll("input")[3].value = "";
    } else {
      let appointments = {
        name: name,
        email: email,
        phone: phone,
        notes: notes,
        schedule: schedule,
      };
      var3_list.push(appointments);
      localStorage.setItem("getApt", JSON.stringify(var3_list));
      var6.innerHTML = "Appointment Successful.";
      console.log(var3_list);
      // window.location.href = "appointmentdone.html";
      document.querySelectorAll("input")[0].value = "";
      document.querySelectorAll("input")[1].value = "";
      document.querySelectorAll("input")[2].value = "";
      document.querySelectorAll("textarea")[0].value = "";
      document.querySelectorAll("input")[3].value = "";
    }
  }
  }
});
