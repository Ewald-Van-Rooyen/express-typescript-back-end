import app from "./app";

const port = process.env.PORT || 4000;

// Start server
const server = app.listen(port, () => console.log(`Server is listening on port ${port}!`));

const shutdown = (done: () => {}) => {
    server.close(done);
};

process.on("exit", shutdown.bind(null, process.exit));
process.on("SIGINT", shutdown.bind(null, process.exit));
process.on("uncaughtException", shutdown.bind(null, process.exit));
