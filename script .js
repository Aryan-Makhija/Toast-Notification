let toastbox = document.getElementById("toast-notification")
let sucessMsg = " Successfully submitted"
let errorMsg = "Plese fix the error "
let invslidMsg = "Invalid input try again "

function showtoast(msg) {
    let toast = document.createElement("div")
    toast.classList.add("toast")
    toastbox.appendChild(toast);



if (msg === errorMsg) {
    toast.innerHTML = `<img src="close.png" alt="">` + msg;
    toast.classList.add("error")
} else if (msg == invslidMsg) {
    toast.innerHTML = `<img src="error.png" alt="">` + msg;
    toast.classList.add("invalid")
} else if (msg == sucessMsg) {
    toast.innerHTML = `<img src="check.png" alt="">` + msg;
    toast.classList.add("success")
}
setTimeout(()=>{
    toast.remove();
},5000)
}
