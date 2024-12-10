
const nav = document.querySelector("#nav");
const open = document.querySelector("#openmenu");
const close = document.querySelector("#closemenu");

open.addEventListener("click", () => {
    nav.classList.add("visible");
});

close.addEventListener("click", () => {
    nav.classList.remove("visible");
});

/*const scripture = [
    {
      id: "matthew 19:14",
      text:"But Jesus said, Suffer little children, and forbid them not, to come unto me: for of such is the kingdom of heaven."
    },
    {
      id: "mark 10:15",
      text:"Verily I say unto you, Whosoever shall not receive the kingdom of God as a little child, he shall not enter therein."
    },
    {
      id: "proverbs 22:6",
      text:"Train up a child in the way he should go: and when he is old, he will not depart from it."
    },
    {
      id: "3 Nephi 17:21",
      text:"And when he had said these words, he wept, and the multitude bare record of it, and he took their little children, one by one, and blessed them, and prayed unto the Father for them."
    },
    {
      id: "DyC 74:7",
      text:"But little children are holy, being sanctified through the atonement of Jesus Christ; and this is what the scriptures mean."
    }
  ]*/
    const scripture = [
        {
          id: "matthew 19:14",
          text:"But Jesus said, Suffer little children, and forbid them not, to come unto me: for of such is the kingdom of heaven."
        },
        {
          id: "mark 10:15",
          text:"Verily I say unto you, Whosoever shall not receive the kingdom of God as a little child, he shall not enter therein."
        },
        {
          id: "proverbs 22:6",
          text:"Train up a child in the way he should go: and when he is old, he will not depart from it."
        },        
        {
          id: "DyC 74:7",
          text:"But little children are holy, being sanctified through the atonement of Jesus Christ; and this is what the scriptures mean."
        }
    ];
    
    function displayRandomScripture() {
        
        const randomIndex = Math.floor(Math.random() * scripture.length);        
        const randomScripture = scripture[randomIndex];       
        const scriptureElement = document.getElementById('scripture');
        scriptureElement.textContent = `"${randomScripture.text}" - ${randomScripture.id}`;
    }    
    displayRandomScripture();
    
