// api/status.js
import fetch from "node-fetch";

const BOT_URLS = [
  { name: "Auto Cloner", url: "https://auto-the-cloner-boy.onrender.com" },
  { name: "Auto Delete", url: "https://auto-delete.onrender.com" },
  { name: "Auto Forward", url: "https://auto-forward.onrender.com" },
  { name: "Auto Caption", url: "https://auto-caption-bot.onrender.com" },
  { name: "Auto Filter", url: "https://auto-filter-bot.onrender.com" },
  { name: "User Bot 56", url: "https://webxzonebot.onrender.com" }
];

export default async function handler(req, res) {
  const results = [];

  for (let bot of BOT_URLS) {
    try {
      const response = await fetch(bot.url, { timeout: 5000 });
      if (response.ok) {
        results.push({ name: bot.name, status: "Online" });
      } else {
        results.push({ name: bot.name, status: "Error" });
      }
    } catch (err) {
      results.push({ name: bot.name, status: "Offline" });
    }
  }

  // HTML snippet
  let html = "";
  for (let bot of results) {
    let cls = bot.status === "Online" ? "online" : bot.status === "Offline" ? "offline" : "error";
    html += `<li class="${cls}">${bot.name}: ${bot.status}</li>`;
  }

  res.status(200).send(html);
}      li { padding: 10px; margin: 5px 0; border-radius: 5px; font-weight: bold; }
      .online { background: #d4edda; color: #155724; }
      .offline { background: #f8d7da; color: #721c24; }
      .error { background: #fff3cd; color: #856404; }
    </style>
    <meta http-equiv="refresh" content="120">
  </head>
  <body>
    <h1>Bot Status Dashboard</h1>
    <ul>
  `;

  for (let bot of results) {
    let cls = bot.status === "Online" ? "online" : bot.status === "Offline" ? "offline" : "error";
    html += `<li class="${cls}">${bot.name}: ${bot.status}</li>`;
  }

  html += `
    </ul>
    <p>Last checked: ${new Date().toLocaleString()}</p>
  </body>
  </html>
  `;

  res.status(200).send(html);
}
