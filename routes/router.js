import Router from 'express';
const router = new Router();
import autoShopController from '../controllers/controller.js';

router.post('/auto', autoShopController.createCarItem);
router.get('/auto', autoShopController.getCarItems);
router.get('/auto/:id', autoShopController.getCarItem);
router.delete('/auto/:id', autoShopController.deleteCarItem);
router.put('/auto/:id', autoShopController.bindCarItem);
router.put('/auto/update/:id', autoShopController.updateCarItem);

export default router;
