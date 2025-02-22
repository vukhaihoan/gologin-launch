const puppeteer = require("puppeteer-core");
const GoLogin = require("./gologin");

(async () => {
    const GL = new GoLogin({
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjE3NjgyNTViOGFkMDRiNGFiNDIyN2EiLCJ0eXBlIjoiZGV2Iiwiand0aWQiOiI2MjE3NjgzNzcxOWQzMzlmZjFiNzE3NTAifQ.3AUfA13BeoEBg_UokJYPgC0qfoulvnIH-o79h-1s-Pc",
        profile_id: "621d932e6e615871c107af94",
    });

    const { status, wsUrl } = await GL.start().catch((e) => {
        console.trace(e);
        return { status: "failure" };
    });

    if (status !== "success") {
        console.log("Invalid status");
        return;
    }

    const browser = await puppeteer.connect({
        browserWSEndpoint: wsUrl.toString(),
        ignoreHTTPSErrors: true,
    });

    const page = await browser.newPage();
    await page.goto("https://myip.link/mini");
    // console.log(await page.content());
    await page.screenshot({ path: "example.png" });
    // await browser.close();
    // await GL.stop();
})();
