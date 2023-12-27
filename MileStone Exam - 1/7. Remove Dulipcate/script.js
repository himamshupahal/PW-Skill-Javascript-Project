let ItemContainer = [];

function AddItem() {
    let Item = document.getElementById('user-items').value ;
    if (!Item) {
        alert("Please enter an item.")
        return ;
    }

    if (!ItemContainer.includes(Item)) {
        ItemContainer.push(Item);
        alert("Successfully Added Items .") ;
    }
    else{
        alert("Item Already Added.");
    }
}

document.getElementById('submit-btn').addEventListener("click" ,AddItem);
