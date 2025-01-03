
document.addEventListener('DOMContentLoaded', () => {
  const lastModified = document.querySelector("#lastModified");
  if (lastModified) {
      lastModified.textContent = document.lastModified;
  }

  const currentTime = document.querySelector("#currentTime");
  if (currentTime) {
      function updateTime() {
          const now = new Date();
          currentTime.textContent = now.toLocaleTimeString();
      }
      setInterval(updateTime, 1000);
      updateTime();
  }

  const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ]

  const selectElement = document.getElementById("product");
  if (selectElement) {
      products.forEach(product => {
          const option = document.createElement("option");
          option.value = product.name;
          option.textContent = product.name;
          selectElement.appendChild(option);
      });
  }

  
  const counterElement = document.getElementById('counter');
  if (counterElement) {      
      let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;      
      reviewCount++;
      localStorage.setItem('reviewCount', reviewCount);      
      counterElement.textContent = 'Completed Reviews: ' + reviewCount;
  }
});







    
  
  