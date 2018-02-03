const config = require('./src/config/config.js');
const app = require('./src/server.js');

app.listen(config.port);
console.log(`Listening on port http://localhost: ${config.port}`);
