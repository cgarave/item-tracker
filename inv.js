//reset inputed datas
function resetInputData(){
    w = null; 
    x = null;
    y = null;
    z = null;
}

//add new item with data
let addBtn = document.getElementById("addBtn").addEventListener("click", (e) => {
    e.preventDefault();
    let a = document.createElement("tr");

    let w = window.prompt("Enter item name");
    let x = window.prompt("Enter item qty");
    let y = window.prompt("Enter wholesale price");
    let z = window.prompt("Enter retail price");

    if(w == "" || x == "" || y == "" || z == ""){
        alert("Please fill all fields");
    }
    else {
        a.innerHTML =  `<td>${w}</td>
                        <td>${x}</td>
                        <td>${y}</td>
                        <td>${z}</td>
                        <td>
                        <div class="buttons-container">
                            <button class="editBtn" id="editBtn">Edit</button>
                            <button class="deleteBtn" id="deleteBtn">Delete</button>
                        </div>
                        </td>`;
    
        document.getElementById("table").appendChild(a);

        resetInputData();
        saveData();
    }
});
//edit and delete button
let listContainer = document.getElementById("table").addEventListener("click", (e) => {
    if(e.target.className === "editBtn"){

        let w = window.prompt("Enter item name");
        let x = window.prompt("Enter item qty");
        let y = window.prompt("Enter wholesale price");
        let z = window.prompt("Enter retail price");

        e.target.parentNode.parentNode.parentNode.children[0].innerHTML = w;
        e.target.parentNode.parentNode.parentNode.children[1].innerHTML = x;
        e.target.parentNode.parentNode.parentNode.children[2].innerHTML = y;
        e.target.parentNode.parentNode.parentNode.children[3].innerHTML = z;

        saveData();
    }
    if(e.target.className === "deleteBtn"){
        e.target.parentNode.parentNode.parentNode.remove();
        saveData();
    }
});

//saving of data to local browser
function saveData(){
    localStorage.setItem("data", document.getElementById("table").innerHTML);
}
//showing data using getItem method accessing saved data from browser
function showData(){
    document.getElementById("table").innerHTML = localStorage.getItem("data");
}

showData();