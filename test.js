const puppeteer = require("puppeteer-core");
const GoLogin = require("./gologin");

const { spawn, execFile } = require("child_process");
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

    const { ORBITA_BROWSER, params, env } = wsUrl;

    const child = execFile(ORBITA_BROWSER, params, { env }); // COMMENT
    // const child = spawn(ORBITA_BROWSER, params, { env, shell: true });
    child.stdout.on("data", (data) => debug(data.toString())); // COMMENT
})();
