var router=require("express").Router();
const usersFunctions=require('../controllers/user');
router.post('/register',usersFunctions.register)
router.get('/login',usersFunctions.login)
module.exports=router;