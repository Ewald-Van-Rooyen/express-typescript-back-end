import app from "./app";

import logger from "./utils/logger";

const port = process.env.PORT || 4000;

// Start server
const server = app.listen(port, () => logger.info(`Server is listening on port ${port}!`));

// Setup handling of unexpected failures gracefully
const shutdown = (done: () => {}) => {
    server.close(done);
};

process.on("exit", shutdown.bind(null, process.exit));
process.on("SIGINT", shutdown.bind(null, process.exit));
process.on("uncaughtException", shutdown.bind(null, process.exit));
