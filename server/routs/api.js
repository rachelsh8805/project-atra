const router = require('express').Router();
const worker=require("../controllers/worker")
const admin=require("../controllers/admin")

router.post('/LoginAdmin',admin.LoginAdmin);
router.post('/SetNnewEmployed',admin.SetNnewEmployed);
router.post('/updateEmployed',admin.updateEmployed);
router.post('/checkPermission',worker.checkPermission);
router.get('/getAllEmployed',worker.getAllEmployed);
router.post('/getEmployedById',worker.getEmployedById);
module.exports=router;