
const itemToAdd = document.getElementById("itemToAdd");
const addButton = document.getElementById("button-addon2");
const itemList = document.getElementById("list");
const boughtList = document.getElementById("ab-list");
const removeAll = document.getElementById("remove-all");
const removeAllBought = document.getElementById("remove-all-bought");



class Item {
	constructor (itemName) {
		this.name = itemName;

		this.create();
	}

	create () {
        //create new div
		let listItem = document.createElement("div");
		listItem.classList.add("list-item", "card-body",  "shadow", "p-3", "mb-1", "bg-body", "rounded");

        //create input area & item name area
		let input = document.createElement("input");
		input.type = "text";
		input.classList.add("form-control");
		input.value = this.name;
		input.disabled = true;

        //button area
		let actions = document.createElement("div");
		actions.classList.add("d-grid", "d-md-flex", "btn-group");

        //update button
		let updateButton = document.createElement("button");
		updateButton.type = "button";
        updateButton.classList.add("btn", "btn-outline-primary");
		updateButton.innerText = "Update";
		updateButton.addEventListener("click", () => this.update(input));

        //remove button
		let removeButton = document.createElement("button");
		removeButton.type = "button";
        removeButton.classList.add("btn", "btn-outline-danger");
        let trashIcon = document.createElement("i");
        trashIcon.classList.add("fas", "fa-trash-alt");
        removeButton.appendChild(trashIcon);
		removeButton.addEventListener("click", () => this.remove(listItem));

        //bought button function
        let boughtButton = document.createElement("button");
        boughtButton.type = "button";
        boughtButton.classList.add("btn", "btn-outline-primary");
        boughtButton.innerText = "Bought";
        boughtButton.addEventListener("click", () => {
            boughtList.appendChild(listItem);

            const mm = moment().format('llll');
            
            listItem.appendChild(document.createTextNode(mm));

            //for "remove all" button to not remove items from bought items
            listItem.classList.add ("bought-items", "card-body", "shadow", "p-3", "mb-1", "bg-body", "rounded");
            this.remove(boughtButton);
        });


        actions.appendChild(updateButton);
        actions.appendChild(boughtButton);
		actions.appendChild(removeButton);
		listItem.appendChild(input);
		listItem.appendChild(actions);
        
        const mm = moment().format('llll');
		itemList.appendChild(listItem);
        listItem.appendChild(document.createTextNode(mm));
	}

	update (input) {
		input.disabled = !input.disabled;
	}

	remove (listItem) {
		listItem.parentNode.removeChild(listItem);
	}
}

//add button
addButton.addEventListener("click", () => newItem());

function newItem () {
	if (itemToAdd.value != "") {
		new Item(itemToAdd.value);
		itemToAdd.value = "";
	}
}

//clean to-be purchased items
const listItem = document.getElementsByClassName("list-item");
removeAll.addEventListener("click", () => {
    while(listItem[0]) {
        listItem[0].parentNode.removeChild(listItem[0]);
    }
});

//clean already purchased items
const boughtItems = document.getElementsByClassName("bought-items");
removeAllBought.addEventListener("click", () => {
    while(boughtItems[0]) {
        boughtItems[0].parentNode.removeChild(boughtItems[0]);
    }
});


