let SubButton = document.getElementById('subscribe')
let subscribe = false;

SubButton.addEventListener('click', () => {
    // เมื่อ Click จะเปลี่ยนไปเป็น Subscribed
    if (subscribe) {
        SubButton.innerHTML = "Subscribed"
        SubButton.style = "background-color: red; color: white; border: 1px solid red;"
        subscribe = false
    }
    else {
        SubButton.innerText = "Subscribe"
        SubButton.style = "background-color: white;"
        subscribe = true
    }
})