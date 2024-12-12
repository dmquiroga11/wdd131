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
    document.addEventListener('DOMContentLoaded', () => {
        const options = document.getElementById('options');
        const checkMostVisitedButton = document.getElementById('checkMostVisited');
        const mostVisitedResult = document.getElementById('mostVisitedResult');
    
        
        const storedVisits = JSON.parse(localStorage.getItem('visitCounts')) || {
            facebook: 0,
            youtube: 0,
            pinterest: 0,
            lds_church: 0
        };
    
        const visitCounts = {...storedVisits};
    
        options.addEventListener('change', (event) => {
            if (event.target.value) {
                visitCounts[event.target.value]++;
                localStorage.setItem('visitCounts', JSON.stringify(visitCounts));
            }
        });
    
        checkMostVisitedButton.addEventListener('click', () => {
            let mostVisited = '';
            let maxCount = 0;
    
            for (const [key, value] of Object.entries(visitCounts)) {
                if (value > maxCount) {
                    mostVisited = key;
                    maxCount = value;
                }
            }
    
            mostVisitedResult.textContent = `The most visited social media resource is: ${mostVisited}`;
        });
    });
    
    
    
    
   
    
    
    
    
