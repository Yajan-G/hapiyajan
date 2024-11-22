const Hapi = require('@hapi/hapi'); // Import Hapi.js

// Create the server instance
const server = Hapi.server({
    port: 3000,
    host: 'localhost',
});

// Define a route
server.route({
    method: 'GET',
    path: '/hello',
    handler: (request, h) => {
        return 'Hello World!';
    }
});

// Start the server
const start = async () => {
    try {
        await server.start();
        console.log('Server running on %s', server.info.uri);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

start();
