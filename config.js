const url = require('url');

const params = url.parse(process.env.DATABASE_URL);
const auth = params.auth.split(':');

module.exports = {
  "prefix":"!",
  "token":process.env.DISCORD_TOKEN ,
  "ownerID":process.env.DISCORD_USER,
  user: auth[0],
  password: auth[1],
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
};