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
        clone.querySelector("[data-id='image']").textContent= "src='https://static.wikia.nocookie.net/rick-and-morty933/images/a/a6/Rick_Sanchez.png/revision/latest/thumbnail/width/360/height/360?cb=20170925123206&path-prefix=de';"
        itemList.appendChild(clone);
    });
    document.querySelector(".btn.btn-light").addEventListener("click", event => {
        var itemList = document.getElementById("my-list");
        itemList.replaceChildren();
    });
});
