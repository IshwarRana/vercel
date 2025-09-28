// api/ping.js
const BOT_URLS = [
  "https://webxzonebot.onrender.com"
];

export default async function handler(req, res) {
  try {
    await Promise.all(BOT_URLS.map(async (url) => {
      try {
        await fetch(url);
        console.log(`✅ Pinged: ${url}`);
      } catch (e) {
        console.error(`❌ Failed: ${url} → ${e}`);
      }
    }));
    res.status(200).json({ status: "Pinged all bots" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "Server error" });
  }
}
