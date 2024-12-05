document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector("#favchap");
  const button = document.querySelector("button");
  const list = document.querySelector("#list"); 

  let chaptersArray = getChapterList() || [];

  button.addEventListener("click", function() {
      if (input.value !== '' && !chaptersArray.includes(input.value)) {
          displayList(input.value);
          chaptersArray.push(input.value); 
          setChapterList(); 
          input.value = ''; 
          input.focus();
      }
  });

  function displayList(item) {
      const listItem = document.createElement("li");
      const deleteButton = document.createElement("button"); 
      listItem.textContent = item; 
      deleteButton.textContent = "❌"; 
      deleteButton.classList.add("delete");
      listItem.append(deleteButton); 
      list.append(listItem); 
      deleteButton.addEventListener('click', () => {
          list.removeChild(listItem); 
          deleteChapter(item); // Use `item` directly
          input.focus();
      });
  }

  function setChapterList() {
      localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
  }

  function getChapterList() {
      return JSON.parse(localStorage.getItem('myFavBOMList')) || [];
  }

  function deleteChapter(chapter) {
      chaptersArray = chaptersArray.filter(item => item !== chapter);
      setChapterList();
  }

  // Llenar la lista al cargar la página
  chaptersArray.forEach(chapter => displayList(chapter));
});
