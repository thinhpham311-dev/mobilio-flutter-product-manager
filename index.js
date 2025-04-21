import app from "./src/app.js";

const server = app.listen(3000, () => {
    console.log("start http://localhost:3000");
});

process.on('SIGINT', async () => {
    console.log("Closing connections...");
    server.close(() => {
        console.log("Exit Server Express");
        process.exit(0);
    });
});
