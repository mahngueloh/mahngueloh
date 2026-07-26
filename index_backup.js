const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {

res.send(`

<html>

<head>

<title>Mahngueloh Tech</title>

<meta name="viewport" content="width=device-width, initial-scale=1">

<style>

body{
background:#111;
font-family:Arial,sans-serif;
color:white;
margin:0;
padding:20px;
}

.card{
background:#1d1d1d;
border-radius:20px;
padding:25px;
max-width:450px;
margin:auto;
box-shadow:0 0 15px #000;
}

h1{
font-size:34px;
color:#00ff99;
text-align:center;
}

h2{
text-align:center;
font-size:20px;
font-weight:normal;
}

.status{
margin-top:25px;
font-size:22px;
line-height:2;
}

button{
width:100%;
padding:18px;
margin-top:15px;
font-size:20px;
border:none;
border-radius:12px;
background:#00b894;
color:white;
font-weight:bold;
}

</style>

</head>

<body>

<div class="card">

<h1>🚀 Mahngueloh Tech</h1>

<h2>Bot Hosting Platform</h2>

<div class="status">

✅ Status : Online<br>
📦 Version : 0.1 Alpha<br>
🤖 Bots : 0<br>
💾 Server : Ready

</div>

<button>🤖 Bot Manager</button>

<button>📂 File Manager</button>

<button>🖥 Console</button>

<button>📊 Dashboard</button>

</div>

</body>

</html>

`);

});

app.listen(PORT, () => {

console.log("Mahngueloh Tech running...");
console.log("http://127.0.0.1:3000");

});
