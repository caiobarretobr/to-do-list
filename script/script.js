function add() {
    if (document.querySelector("input").value === '') {
        window.alert("Type a valid task")
    } else {
        let div = document.createElement("div")
        let cbox = document.createElement("input")
        let i = document.createElement("label")

        cbox.type = "checkbox";
        i.innerHTML = document.querySelector("#input").value;
        
        div.appendChild(cbox);
        div.appendChild(i);
        document.querySelector("#form").appendChild(div);
        document.querySelector("#input").value = '';
        document.querySelector("#input").focus();
    }
}

document.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
        add();      
    }
})