// api/status.js
const BOT_URLS = [
  { name: "User Bot 56", url: "https://webxzonebot.onrender.com" }
];

export default async function handler(req, res) {
  try {
    const results = await Promise.all(BOT_URLS.map(async (bot) => {
      try {
        const response = await fetch(bot.url, { timeout: 5000 });
        return { name: bot.name, status: response.ok ? "Online" : "Error" };
      } catch {
        return { name: bot.name, status: "Offline" };
      }
    }));

    // HTML snippet
    let html = "";
    for (let bot of results) {
      let cls = bot.status === "Online" ? "online" : bot.status === "Offline" ? "offline" : "error";
      html += `<li class="${cls}">${bot.name}: ${bot.status}</li>`;
    }

    res.status(200).send(html);
  } catch (e) {
    console.error(e);
    res.status(500).send("<li class='error'>Server error occurred</li>");
  }
}}      li { padding: 10px; margin: 5px 0; border-radius: 5px; font-weight: bold; }
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
