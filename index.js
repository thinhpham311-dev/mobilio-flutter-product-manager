import app from "./src/app.js";

const server = app.listen(3055, () => {
    console.log("start");
});

process.on('SIGINT', async () => {
    console.log("Closing connections...");
    server.close(() => {
        console.log("Exit Server Express");
        process.exit(0);
    });
});
