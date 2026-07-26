const si = require('systeminformation');

async function status() {
    try {
        const mem = await si.mem();
        const os = await si.osInfo();
        const time = new Date();

        console.log("📱 Mahngueloh Status");
        console.log("----------------------");
        console.log("Status :", "Online");
        console.log("OS     :", os.distro);
        console.log("Kernel :", os.kernel);
        console.log("RAM    :", Math.round(mem.available / 1024 / 1024) + " MB free");
        console.log("Time   :", time.toLocaleString());
    } catch (err) {
        console.error("Status Error:", err.message);
    }
}

module.exports = { status };

