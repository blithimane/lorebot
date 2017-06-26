const url = require('url');

const params = url.parse(process.env.DATABASE_URL);
const auth = params.auth.split(':');

module.exports = {
  "prefix":"!",
  "token":"your_discord_token_here" ,
  "ownerID":"your_discord_username_here",
  user: auth[0],
  password: auth[1],
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
};

console.log(process.env.DATABASE_URL);
console.log(JSON.stringify(module.exports));