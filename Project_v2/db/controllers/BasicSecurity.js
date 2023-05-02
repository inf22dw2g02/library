const usersService = require("../service/usersService");
const basicAuth = require("basic-auth");


async function auth(req, res, next) {
    var user = basicAuth(req);
    if (!user || !user.name || !user.pass) {
      res.set("WWW-Authenticate", "Basic realm=Authorization Required");
      res.sendStatus(401);
      return;
    }
    if (await usersService.authenticate({username: user.name, password: user.pass})) {
      next();
    } else {
      res.set("WWW-Authenticate", "Basic realm=Authorization Required");
      res.sendStatus(401);
      return;
    }
  };


module.exports = auth;