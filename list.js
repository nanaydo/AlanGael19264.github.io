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
        clone.querySelector("[data-id='image']").src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmag.elcomercio.pe%2Ffama%2Frick-and-morty-explicacion-del-verdadero-origen-de-rick-sanchez-serie-de-hbo-max-nnda-nnlt-noticia%2F&psig=AOvVaw2XaaPYgxvF84Q5X7Daztcj&ust=1707446929456000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJD-m9DdmoQDFQAAAAAdAAAAABAE";
        itemList.appendChild(clone);
    });
    document.querySelector(".btn.btn-light").addEventListener("click", event => {
        var itemList = document.getElementById("my-list");
        itemList.replaceChildren();
    });
});
