// const express = require("express");
// const axios = require("axios");
// const cors = require("cors");

// const app = express();
// app.use(cors()); // Allow all origins

// app.get("/", async (req, res) => {
//   try {
//     const response = await axios.get("https://www.nseindia.com/api/live-analysis-variations?index=gainers", {
//       headers: {
//         "User-Agent": "Mozilla/5.0",
//         "Accept": "application/json",
//         "Referer": "https://www.nseindia.com/"
//       }
//     });
//     res.json(response.data);
//   } catch (error) {
//     console.error("Error fetching NSE data:", error.message);
//     res.status(500).json({ error: "Failed to fetch data from NSE" });
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Proxy server running on http://localhost:${PORT}`));






//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// activate for live streaming






const axios = require("axios");

module.exports = async (req, res) => {
  try {
    const response = await axios.get("https://www.nseindia.com/api/live-analysis-variations?index=gainers", {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json",
        "Referer": "https://www.nseindia.com/"
      }
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Full error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch data from NSE" });
  }
};