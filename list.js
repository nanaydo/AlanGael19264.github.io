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

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".btn.btn-primary").addEventListener("click", event => {
        fetch('https://rickandmortyapi.com/api/character')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(HTTP error! status: ${response.status});
                }
                return response.json();
            })
            .then((data) => {
                var itemList = document.getElementById("my-list");
                var template = document.getElementById("list-template");
                data.results.forEach(element => {
                    var clone = template.content.cloneNode(true);
                    var colElement = clone.querySelector(".col-xs-12");
                    if (colElement) {
                        colElement.setAttribute("data-detail", element.id);
                    }
                    clone.querySelector("[data-id='id']").textContent = ID: ${element.id};
                    clone.querySelector("[data-id='name']").textContent = Name: ${element.name};
                    clone.querySelector("[data-id='status']").textContent = Status: ${element.status};
                    clone.querySelector("[data-id='species']").textContent = Species: ${element.species};
                    clone.querySelector("[data-id='image']").src = element.image;
                    itemList.appendChild(clone);
                });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });

    document.querySelector(".btn.btn-light").addEventListener("click", event => {
        var itemList = document.getElementById("my-list");
        itemList.innerHTML = ''; // Limpiar la lista
    });
});
