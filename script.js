// 1. Accepts four inputs from users
// 2. Users must have the ability to edit their inserted items
// 3. Users must have the ability to delete their inserted items
// 4. Users must have the ability to search elements from the list of items
// 5. Elements inserted by the users should be saved from their local browsers storage
// 6. Retrieval of data from the user's browser

function addItem(){
    let itemName = window.prompt("Enter item name");
    let itemQty = window.prompt("Enter item quantity");
    let itemWprice = window.prompt("Enter item's wholesale price");
    let itemRprice = window.prompt("Enter item's retail price");

    if(itemName == "" || itemQty == "" || itemWprice == "" || itemRprice == ""){
        window.alert("Please fill all fields");
    } else {
        //creates new item
        let a = document.createElement("tr");

        a.innerHTML = ` <td>${itemName}</td>
                        <td>${itemQty}</td>
                        <td>${itemWprice}</td>
                        <td>${itemRprice}</td> 
                        <td>
                            <div class="buttons-container">
                                <button id="editBtn" class="editBtn">Edit</button>
                                <button id="deleteBtn" class="deleteBtn">Delete</button>
                            </div>
                        </td>`

        //append new item to the list
        document.getElementById("table").appendChild(a);
    };
};

function editItem(event){
    if(event.target.className === "editBtn"){
        let updatedName = window.prompt("Enter new item name");
        let updatedQty = window.prompt("Enter new item quantity");
        let updatedWprice = window.prompt("Enter new item's wholesale price");
        let updatedRprice = window.prompt("Enter new item's retail price");

        if(updatedName == "" || updatedQty == "" || updatedWprice == "" || updatedRprice == ""){
            window.alert("Please fill all fields");
        } else {
            event.target.parentElement.parentElement.parentElement.children[0].innerHTML = updatedName;
            event.target.parentElement.parentElement.parentElement.children[1].innerHTML = updatedQty;
            event.target.parentElement.parentElement.parentElement.children[2].innerHTML = updatedWprice;
            event.target.parentElement.parentElement.parentElement.children[3].innerHTML = updatedRprice;
        };
    };
};
function deleteItem(event){
    if(event.target.className === "deleteBtn"){
        event.target.parentElement.parentElement.parentElement.remove();
    };
};
//save data to local browser storage
function saveData(){
    localStorage.setItem("listData", document.getElementById("table").innerHTML);
};
//retrieve data from local browser storage
function retrieveData(){
    document.getElementById("table").innerHTML = localStorage.getItem("listData");
};

//add button
const addBtn = document.querySelector("#addBtn").addEventListener("click", function(event){
    event.preventDefault();
    addItem();
    saveData();
    
    console.log(document.getElementById("table").innerHTML);
});
//edit and delete button listener
const tableList = document.querySelector("#table").addEventListener("click", function(event){
    event.preventDefault();
    editItem(event);
    deleteItem(event);
    saveData();
});

const clearBtn = document.querySelector("#clearBtn").addEventListener("click", function(event){
    window.localStorage.clear();
});

retrieveData();