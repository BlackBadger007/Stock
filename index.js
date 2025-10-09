// async function fetchGainers() {

//     const response = await fetch("http://localhost:3000/api/gainers");

//   const data = await response.json();
//   console.log(data);

//  data.allSec.data.sort((a, b) => b.trade_quantity - a.trade_quantity);

// //  console.log(prod);

// const now = new Date();

// const hours = now.getHours();      // returns hour (0–23)
// const minutes = now.getMinutes();  // returns minutes (0–59)
// const seconds = now.getSeconds();  // returns seconds (0–59)

// // console.log(`Current time: ${hours}:${minutes}:${seconds}`);

// const time = document.getElementById("timee");
// time.innerText=`Sync: ${data.allSec.timestamp}`;
//   const gainers = data.allSec.data;
//   const tbody = document.querySelector("#gainersTable tbody");
//   tbody.innerHTML = "";

//   gainers.forEach(stock => {
//     const row = document.createElement("tr");
//     row.innerHTML = `
//       <td>${stock.symbol}</td>
//       <td>${stock.open_price}</td>
//       <td>${stock.ltp}</td>
//       <td>${stock.perChange}</td>
//       <td>${stock.trade_quantity}</td>
//     `;
//     tbody.appendChild(row);
//   });
// }

// function updateClock() {
//       const now = new Date();
//       const timeString = now.toLocaleTimeString(); // e.g., "12:21:45 PM"
//       document.getElementById("clock").textContent = timeString;
//     }


//     // Update every second
//     setInterval(updateClock, 1000);

//     // Initial call to show time immediately
//     updateClock();


// // Refresh every minute
// fetchGainers();
// setInterval(fetchGainers, 13000);




////////////////////////////////////////////////////////////


async function fetchGainers() {
    try {
        const response = await fetch("/api/server");
        
        if (!response.ok) {
            throw new Error(`Server responded with status ${response.status}`);
        }
        
        const data = await response.json();
        // console.log(data);
        
        const gef = document.getElementById("fifi");
        gef.innerText=`NSE Top Gainers`;
        gef.style.color= "yellow";
        // Sort by trade quantity descending
        data.allSec.data.sort((a, b) => b.trade_quantity - a.trade_quantity);
        
        // Update sync time
        const time = document.getElementById("timee");
        time.innerText = `Sync: ${data.allSec.timestamp}`;
        
        // Render table
        const gainers = data.allSec.data;
        const tbody = document.querySelector("#gainersTable tbody");
        tbody.innerHTML = "";

        gainers.forEach(stock => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${stock.symbol}</td>
        <td>${stock.open_price}</td>
        <td>${stock.ltp}</td>
        <td>${stock.perChange}</td>
        <td>${stock.trade_quantity}</td>
      `;
      tbody.appendChild(row);
    });

    // Clear any previous error

  } catch (error) {
    console.error("Fetch error:", error.message);

    const gef = document.getElementById("fifi");
    gef.innerText=`NSE Top Gainers`;
    gef.style.color= "red";

    // Show error in UI
    // const errorBox = document.getElementById("error-message");
    // if (errorBox) {
    //   errorBox.textContent = `Error: ${error.message}`;
    // }
  }
}

function updateClock() {
      const now = new Date();
      const timeString = now.toLocaleTimeString(); // e.g., "12:21:45 PM"
      document.getElementById("clock").textContent = timeString;
    }


    // Update every second
    setInterval(updateClock, 1000);

    // Initial call to show time immediately
    updateClock();


// Refresh every minute
fetchGainers();
setInterval(fetchGainers, 13000);