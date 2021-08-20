const routerx = require('express-promise-router');
const testController = require('../controller/test-controller');
//const auth = require('../middleware/auth');

const router = routerx();

router.post('/log', testController.log);
router.get('/list', testController.list);
router.post('/send', testController.send);
router.post('/getTarget', testController.getTarget);

module.exports = router;
