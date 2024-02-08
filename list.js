document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".btn.btn-primary").addEventListener("click", event => {
        var itemList = document.getElementById("my-list");
        var template = document.getElementById("list-template");
        var total = itemList.childElementCount + 1;
        var clone = template.content.cloneNode(true);
        clone.querySelector("[data-id='number']").textContent = `${total}`;
        clone.querySelector("[data-id='name']").textContent = "Rick Sanchez";
        clone.querySelector("[data-id='status']").textContent = "Alive";
        clone.querySelector("[data-id='specie']").textContent= "Human";
        clone.querySelector("[data-id='image']").src = "https://rickandmortyapi.com/api/character/avatar/1.jpeg";
        itemList.appendChild(clone);
    });
    document.querySelector(".btn.btn-light").addEventListener("click", event => {
        var itemList = document.getElementById("my-list");
        itemList.replaceChildren();
    });
});
