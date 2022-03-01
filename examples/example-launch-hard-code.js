const puppeteer = require("puppeteer");
// const StealthPlugin = require("puppeteer-extra-plugin-stealth");
// const adblocker = require("puppeteer-extra-plugin-adblocker");

// puppeteer.use(StealthPlugin());
// puppeteer.use(adblocker());

(async () => {
    puppeteer
        .launch({
            executablePath: "C:\\Users\\vukhaihoan\\.gologin\\browser\\orbita-browser\\chrome.exe",
            args: [
                "--user-data-dir=C:\\Users\\VUKHAI~1\\AppData\\Local\\Temp\\gologin_profile_621d932e6e615871c107af94",
            ],
            headless: false,
        })
        .then(async (browser) => {
            const page = await browser.newPage();
            await page.goto("https://myip.link/mini");
        });
})();
