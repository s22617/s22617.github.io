var inputElement = document.getElementById("input");
inputElement.addEventListener('keyup', searchItem);

function searchItem() {
    const input = document.getElementById('input').value.toUpperCase();

    const itemsSection = document.getElementById("items");

    const items = itemsSection.getElementsByClassName("item");
    //console.log(items[0].querySelector(".item-content h5.item-title").innerText);

    for (let i = 0; i < items.length; i++) {
        let title = items[i].querySelector(".item-content p.item-title");
        console.log(title);

        if (title.innerText.toUpperCase().indexOf(input) > -1) {
            items[i].style.display = "";
        }
        else {
            items[i].style.display = "none";
        }
    }
}