const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list"); 

button.addEventListener("click", function() {
  if (input.value.trim() !== '') {
    const myItem = input.value;
    input.value = ''; 

    // Crear nuevos elementos
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listText.textContent = myItem;
    listBtn.textContent = 'Eliminar';

    
    listItem.appendChild(listText);
    listItem.appendChild(listBtn);
    list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
      list.removeChild(listItem);
    });


    input.focus();
  }
});



      
