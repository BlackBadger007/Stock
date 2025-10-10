
const global= {
    currentPage: window.location.pathname
  };

// const add="http://localhost:3000";
const add="/api/server";

  const t11= document.getElementById("t1");
  const t12= document.getElementById("t2");
  const t13= document.getElementById("t3");
  const t14= document.getElementById("t4");

  // if(global.currentPage == "/"){
  if(global.currentPage == "/"){
    t11.style.backgroundColor="rgb(213, 213, 107)";
    t12.style.backgroundColor="white";
    t13.style.backgroundColor="white";
    t14.style.backgroundColor="white";
    fetchGainers();
    setInterval(fetchGainers, 13000);
  // }else if(global.currentPage == "/public/nifty50.html"){
  }else if(global.currentPage == "/nifty50.html"){
    t13.style.backgroundColor="rgb(213, 213, 107)";
    t12.style.backgroundColor="white";
    t11.style.backgroundColor="white";
    t14.style.backgroundColor="white";
    fetchNiftyGainers();
    setInterval(fetchGainers, 13000);
  // }else if(global.currentPage == "/public/bankNifty.html"){
  }else if(global.currentPage == "/bankNifty.html"){
    t12.style.backgroundColor="rgb(213, 213, 107)";
    t11.style.backgroundColor="white";
    t13.style.backgroundColor="white";
    t14.style.backgroundColor="white";
    fetchBankNiftyGainers();
    setInterval(fetchGainers, 13000);
  // }else if(global.currentPage == "/public/niftyNext50.html"){
  }else if(global.currentPage == "/niftyNext50.html"){
    t14.style.backgroundColor="rgb(213, 213, 107)";
    t12.style.backgroundColor="white";
    t13.style.backgroundColor="white";
    t11.style.backgroundColor="white";
    fetchNiftyNextGainers();
    setInterval(fetchGainers, 13000);
  }

  async function fetchNiftyGainers() {
    try {
        const response = await fetch(add);
        
        if (!response.ok) {
            throw new Error(`Server responded with status ${response.status}`);
        }
        
        const data = await response.json();
        // console.log(data);
 const geft = document.getElementById("gainersTable");
    const geff = document.getElementById("timee");
    geft.style.color= "blueviolet";
    geff.style.color= "blueviolet";
    const links = document.querySelectorAll('.a1');
    links.forEach(link => {
      link.style.color = 'blueviolet';        // Change text color
      
    });
        
        const gef = document.getElementById("fifi");
        gef.innerText=`NSE Top Gainers`;
        gef.style.color= "blueviolet";
        // Sort by trade quantity descending
        data.NIFTY.data.sort((a, b) => b.trade_quantity - a.trade_quantity);
        
        // Update sync time
        const time = document.getElementById("timee");
        time.innerText = `${data.NIFTY.timestamp}`;
        
        // Render table
        const gainers = data.NIFTY.data;
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

    const gef = document.getElementById("fifi");
    const geff = document.getElementById("timee");
    const geft = document.getElementById("gainersTable");
    gef.style.color= "#026e72";
    geft.style.color= "#026e72";
    geff.style.color= "#026e72";
    const links = document.querySelectorAll('.a1');
    links.forEach(link => {
      link.style.color = '#026e72';        // Change text color
      
    });
    
    console.error("Fetch error:", error.message);
  }
  }

  async function fetchNiftyNextGainers() {
    try {
        const response = await fetch(add);
        
        if (!response.ok) {
            throw new Error(`Server responded with status ${response.status}`);
        }
        
        const data = await response.json();
        
       const geft = document.getElementById("gainersTable");
    const geff = document.getElementById("timee");
    geft.style.color= "blueviolet";
    geff.style.color= "blueviolet";
    const links = document.querySelectorAll('.a1');
    links.forEach(link => {
      link.style.color = 'blueviolet';        // Change text color
      
    });
        
        const gef = document.getElementById("fifi");
        gef.innerText=`NSE Top Gainers`;
        gef.style.color= "blueviolet";
        // Sort by trade quantity descending
        data.NIFTYNEXT50.data.sort((a, b) => b.trade_quantity - a.trade_quantity);
        
        // Update sync time
        const time = document.getElementById("timee");
        time.innerText = `${data.NIFTYNEXT50.timestamp}`;
        
        // Render table
        const gainers = data.NIFTYNEXT50.data;
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

    const gef = document.getElementById("fifi");
    const geff = document.getElementById("timee");
    const geft = document.getElementById("gainersTable");
    gef.style.color= "#026e72";
    geft.style.color= "#026e72";
    geff.style.color= "#026e72";
    const links = document.querySelectorAll('.a1');
    links.forEach(link => {
      link.style.color = '#026e72';        // Change text color
      
    });
    
    console.error("Fetch error:", error.message);

  }
  }
  async function fetchBankNiftyGainers() {
    try {
                const response = await fetch(add);

        
        if (!response.ok) {
            throw new Error(`Server responded with status ${response.status}`);
        }
        
        const data = await response.json();
        
     const geft = document.getElementById("gainersTable");
    const geff = document.getElementById("timee");
    geft.style.color= "blueviolet";
    geff.style.color= "blueviolet";
    const links = document.querySelectorAll('.a1');
    links.forEach(link => {
      link.style.color = 'blueviolet';        // Change text color
      
    });
        
        const gef = document.getElementById("fifi");
        gef.innerText=`NSE Top Gainers`;
        gef.style.color= "blueviolet";
        // Sort by trade quantity descending
        data.BANKNIFTY.data.sort((a, b) => b.trade_quantity - a.trade_quantity);
        
        // Update sync time
        const time = document.getElementById("timee");
        time.innerText = `${data.BANKNIFTY.timestamp}`;
        
        // Render table
        const gainers = data.BANKNIFTY.data;
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

    const gef = document.getElementById("fifi");
    const geff = document.getElementById("timee");
    const geft = document.getElementById("gainersTable");
    gef.style.color= "#026e72";
    geft.style.color= "#026e72";
    geff.style.color= "#026e72";
    const links = document.querySelectorAll('.a1');
    links.forEach(link => {
      link.style.color = '#026e72';        // Change text color
      
    });
    
    console.error("Fetch error:", error.message);
  }
  }


async function fetchGainers() {
    try {
                const response = await fetch(add);

        
        if (!response.ok) {
            throw new Error(`Server responded with status ${response.status}`);
        }
        
        const data = await response.json();

    const geft = document.getElementById("gainersTable");
    const geff = document.getElementById("timee");
    geft.style.color= "blueviolet";
    geff.style.color= "blueviolet";
    const links = document.querySelectorAll('.a1');
    links.forEach(link => {
      link.style.color = 'blueviolet';        // Change text color
      
    });
        
        const gef = document.getElementById("fifi");
        gef.innerText=`NSE Top Gainers`;
        gef.style.color= "blueviolet";
        // Sort by trade quantity descending
        data.allSec.data.sort((a, b) => b.trade_quantity - a.trade_quantity);
        
        // Update sync time
        const time = document.getElementById("timee");
        time.innerText = `${data.allSec.timestamp}`;
        
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


  } catch (error) {   
    
    const gef = document.getElementById("fifi");
    const geff = document.getElementById("timee");
    const geft = document.getElementById("gainersTable");
    gef.style.color= "#026e72";
    geft.style.color= "#026e72";
    geff.style.color= "#026e72";
    const links = document.querySelectorAll('.a1');
    links.forEach(link => {
      link.style.color = '#026e72';        // Change text color
      
    });
    
    console.error("Fetch error:", error.message);

    // Show error in UI
    // const errorBox = document.getElementById("error-message");
    // if (errorBox) {
    //   errorBox.textContent = `Error: ${error.message}`;
    // }
  }
}

// function updateClock() {
//       const now = new Date();
//       const timeString = now.toLocaleTimeString(); // e.g., "12:21:45 PM"
//       document.getElementById("clock").textContent = timeString;
//     }
//   setInterval(updateClock, 1000);
//   updateClock();
