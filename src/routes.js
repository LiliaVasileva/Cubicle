const router = require('express').Router();

const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const accessoryController = require('./controllers/accessoryControlller');



// require('./config/viewEngine')(app);

router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage);
router.get('/404', homeController.getErrorPage);

router.get('/create', cubeController.getCreateCube);
router.post('/create', cubeController.postCreateCube);
router.get('/details/:cubeId', cubeController.getCubeDetails);
router.get('/details/:cubeId/attach', cubeController.getAttchedAccessory);
router.post('/details/:cubeId/attach', cubeController.postAttachAccessory);

// other way of setting the routers

router.use('/accessory', accessoryController);

module.exports = router;