const config = require('./server/config/config.js');
const app = require('./server/server.js');

app.listen(config.port);
console.log(`Listening on port http://localhost: ${config.port}`);
