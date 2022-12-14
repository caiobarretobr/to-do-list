function add() {
    if (document.querySelector("input").value === '') {
        window.alert("Type a valid task")
    } else {
        let i = document.createElement("h2")
        // let taskNode = document.createTextNode(description);
        i.innerHTML = document.querySelector("#input").value
        // i.setAttribute("type", "checkbox");
        // i.setAttribute("name", description);
        // i.setAttribute("id", description);

        document.querySelector("#form").appendChild(i);
        document.querySelector("#input").value = '';
        document.querySelector("#input").focus();
    }
}

document.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
        add();      
    }
})