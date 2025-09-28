// api/ping.js
import fetch from "node-fetch";

const BOT_URLS = [
  "https://auto-the-cloner-boy.onrender.com",
  "https://auto-delete.onrender.com",
  "https://auto-forward.onrender.com",
  "https://auto-caption-bot.onrender.com",
  "https://auto-filter-bot.onrender.com",
  "https://webxzonebot.onrender.com"
];

export default async function handler(req, res) {
  for (let url of BOT_URLS) {
    try {
      await fetch(url, { timeout: 5000 });
      console.log(`✅ Pinged: ${url}`);
    } catch (e) {
      console.error(`❌ Failed: ${url} → ${e}`);
    }
  }
  res.status(200).json({ status: "Pinged all bots" });
}
