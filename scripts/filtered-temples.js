const lastModified = document.querySelector("#lastModified");
lastModified.textContent = document.lastModified;

const currentTime = document.querySelector("#currentTime");

function updateTime() {
    const now = new Date();
    currentTime.textContent = now.toLocaleTimeString();
}

setInterval(updateTime, 1000);
updateTime();

const nav = document.querySelector("#nav");
const open = document.querySelector("#openmenu");
const close = document.querySelector("#closemenu");

open.addEventListener("click",()=>{
    nav.classList.add("visible");
})

close.addEventListener("click", () => {
    nav.classList.remove("visible");
})

document.addEventListener('DOMContentLoaded', () => {
  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Santiago Chile Temple",
        location: "Santiago, Region Metropolitana",
        dedicated: "2006, March 12",
        area: 20831,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/_temp/024-Santiago-Chile-Temple.jpg"
      },
      {
        templeName: "Madrid Spain Temple",
        location: "Madrid, Spain",
        dedicated: "1999, March, 19-21",
        area: 45800,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
      },
      {
        templeName: "Caracas Venezuela Temple",
        location: "Caracas, Dependencias Federales, Venezuela",
        dedicated: "2000, August, 20",
        area: 15332,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/_temp/096-Caracas-Venezuela-Temple.jpg"
      }
    
  ];
  

  const templesContainer = document.querySelector("#temples-container");
  const headerTitle = document.querySelector("#tittle"); 

  function displayTemples(filteredTemples) {
      templesContainer.innerHTML = ''; 
      filteredTemples.forEach(temple => {
          const templeElement = document.createElement('div');
          templeElement.classList.add('temple');
          templeElement.innerHTML = `
              <h3>${temple.templeName}</h3>
              <p>Location: ${temple.location}</p>
              <p>Dedicated: ${temple.dedicated}</p>
              <p>Area: ${temple.area} square feet</p>
              <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
          `;
          templesContainer.appendChild(templeElement);
      });
  }

  displayTemples(temples); 

  const homelink = document.querySelector("#home");
  const oldlink = document.querySelector("#old");
  const newlink = document.querySelector("#new");
  const largelink = document.querySelector("#large");
  const smalllink = document.querySelector("#small");

  if (homelink) {
      homelink.addEventListener('click', (event) => {
          event.preventDefault();
          headerTitle.textContent = "Home"; 
          displayTemples(temples); 
      });
  } 

  if (oldlink) {
      oldlink.addEventListener('click', (event) => {
          event.preventDefault();
          headerTitle.textContent = "Old"; 
          const oldTemples = temples.filter(temple => new Date(temple.dedicated) < new Date('1899-12-31'));
          displayTemples(oldTemples);
      });
  } 

  if (newlink) {
      newlink.addEventListener('click', (event) => {
          event.preventDefault();
          headerTitle.textContent = "New"; 
          const newTemples = temples.filter(temple => new Date(temple.dedicated) >= new Date('2000-01-01'));
          displayTemples(newTemples);
      });
  } 

  if (largelink) {
      largelink.addEventListener('click', (event) => {
          event.preventDefault();
          headerTitle.textContent = "Large"; 
          const largeTemples = temples.filter(temple => temple.area >= 90000);
          displayTemples(largeTemples);
      });
  } 

  if (smalllink) {
      smalllink.addEventListener('click', (event) => {
          event.preventDefault();
          headerTitle.textContent = "Small"; // Cambiar el texto del título
          const smallTemples = temples.filter(temple => temple.area < 10000);
          displayTemples(smallTemples);
      });
  } 
});









 

  
    