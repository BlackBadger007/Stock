const axios = require("axios");

module.exports = async (req, res) => {
  try {
    const response = await axios.get("https://www.nseindia.com/api/live-analysis-volume-gainers", {
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