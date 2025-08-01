// api/proxy.js

export default async function handler(req, res) {
  const targetUrl = req.query.url;
  if (!targetUrl) {
    return res.status(400).json({ error: "Missing URL" });
  }

  try {
    const response = await fetch(targetUrl);
    const data = await response.json(); // or .json() if expecting JSON
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch target URL" });
  }
}
