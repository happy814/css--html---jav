
// var a =  document.querySelector("h1")
// a.style.backgroundColor = "black"
// a.addEventListener("click",function(){
// a.innerHTML = "bsbsdshdsh"
// a.style.color = "yellow"

// })

let istatus = document.querySelector("h5")

let add = document.querySelector("#add")


let check = 0


add.addEventListener("click", function () {
    if (
        check == 0
    ) {
        istatus.innerHTML = "Friends"
        istatus.style.color = "green" 
        add.innerHTML="Remove"  
        check=1
    } else{

        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        add.innerHTML = "Add Friends"
        check=0
    }



})
