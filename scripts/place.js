    const temperature = 10;
    const windSpeed = 14;

    function windChill(temperature, windSpeed) {
        return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    }

   
    function updateWindChill() { 
        const windChillValue = windChill(temperature, windSpeed); 
        const windChillElement = document.getElementById("windChillResult");
        
        if (temperature <= 10 && windSpeed > 4.8) {
            windChillElement.innerText = `${windChillValue.toFixed(2)}°C`;    
        } else {
            windChillElement.innerText = "N/A";
        }
    }

   
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