// var a =  document.querySelector("h1")
// a.style.backgroundColor = "black"
// a.addEventListener("click",function(){
// a.innerHTML = "bsbsdshdsh"
// a.style.color = "yellow"

// })

let isStatus = document.querySelector("h5");

let add = document.querySelector("#add");

let check = 0;

add.addEventListener("click", function () {
  if (check == 0) {
    isStatus.innerHTML = "Friends";
    isStatus.style.color = "green";
    add.innerHTML = "Remove";
    check = 1;
  } else {
    isStatus.innerHTML = "Stranger";
    isStatus.style.color = "red";
    add.innerHTML = "Add Friends";
    check = 0;
  }
});

// getter, setter
