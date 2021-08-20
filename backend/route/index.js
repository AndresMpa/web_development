const routerx = require('express-promise-router');
const testRouter = require('./test');

const router = routerx();

router.use('/test', testRouter);

module.exports = router;
