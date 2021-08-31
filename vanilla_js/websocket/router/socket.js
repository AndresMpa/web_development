const socketController = require("../controller/socketController");
const routerx = require("express-promise-router");

const router = routerx();

/*Instacia + https + ( 'ruta', funcion )*/
router.get("/message", socketController.message);

module.exports = router;
