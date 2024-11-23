
const temperature =27;
const windSpeed = 14;


function windChill(temperature, windSpeed) {
    const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    return windChill;
}
function updateWindChill() {
     const windChillValue = windChill(temperature, windSpeed); 
     const windChillElement = document.getElementById("windChillResult"); 
     windChillElement.innerText = `${windChillValue.toFixed(2)}°C`; } 

document.addEventListener("DOMContentLoaded", updateWindChill);



const lastModified = document.querySelector("#lastModified");
lastModified.textContent = document.lastModified;

const currentTime = document.querySelector("#currentTime");

function updateTime() {
    const now = new Date();
    currentTime.textContent = now.toLocaleTimeString();
}

setInterval(updateTime, 1000);
updateTime();