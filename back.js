const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.innerHTML = "<h1>heyy</h1>";

container.appendChild(content);

const btn = document.querySelectorAll("#btn");
btn.forEach((button) => {
    button.addEventListener("click", function(e) {
        console.log(e);
        e.target.style.backgroundColor = "gray"
    ;})
})

