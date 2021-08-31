const routerx = require("express-promise-router");
const socket = require("./socket");

const router = routerx();

router.use("/socket", socket)

module.exports = router;
