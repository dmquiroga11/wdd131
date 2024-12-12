document.addEventListener("DOMContentLoaded", () => {
    const selectElement = document.getElementById("options");
    selectElement.value = ""; 
});

const nav = document.querySelector("#nav");
const open = document.querySelector("#openmenu");
const close = document.querySelector("#closemenu");

open.addEventListener("click", () => {
    nav.classList.add("visible");
});

close.addEventListener("click", () => {
    nav.classList.remove("visible");
});


    document.addEventListener("DOMContentLoaded", () => {
        const selectElement = document.getElementById('options');
        const linksContainer = document.getElementById('links-container');
    
        selectElement.addEventListener('change', (event) => {
            const selectedValue = event.target.value;            
            
            document.querySelectorAll('.social-links').forEach(div => div.style.display = 'none');          
            
            if (selectedValue) {
                document.getElementById(`${selectedValue}-links`).style.display = 'flex';
            }
        });
    });
    
    
   
    
    
    
    
