var containerone = document.getElementsByClassName("containerone");
var acceptance_page = document.getElementsByClassName("acceptance");
var buttons = document.getElementsByClassName("btn");

function submit() {
    acceptance_page[0].style.display = "flex";
    containerone[0].style.display = "none";
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", e => {
        var value = e.target.textContent;
        document.getElementById("val").innerHTML = value;
    })
}