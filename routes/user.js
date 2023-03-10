var express = require('express');
var router = express.Router();
var session=require('express-session');
const user=require('../controller/user')

const upload = require('../config/multer')
const sessionMV=require('../middleware/session')


router.get("/", user.getHome);
router.get("/login", user.getLogin);
router.get("/signup", user.getSignUp);
router.post('/login', user.postLogin)

router.post('/signup', user.postSignup)
router.post('/otp', user.otpVerification);




router.get('/logout', user.getLogout)
router.get('/about', user.getabout)

router.get('/error',user.getError)

router.get('/userProfile',sessionMV.verifyLoginUser, user.getUserProfile)
router.get('/addAddress', sessionMV.verifyLoginUser,user.getAddAddress)
router.post('/addAddress', sessionMV.verifyLoginUser, user.postAddAddress)
router.get('/changePassword', sessionMV.verifyLoginUser, user.changePassword)
router.post("/newPassword", sessionMV.verifyLoginUser, user.postChangePassword);
router.get('/editProfile',sessionMV.verifyLoginUser,user.getEditProfile)
router.post('/editProfile',sessionMV.verifyLoginUser,user.postEditProfile)

router.get('/getcategorywise',sessionMV.verifyLoginUser, user.getcategorywise)

router.get('/productDetails', user.getProductDetails)
router.get('/cart', sessionMV.verifyLoginUser, user.getCart)
router.get('/addToCart/:id', sessionMV.verifyLoginUser, user.addToCart)
router.post('/removeProduct', sessionMV.verifyLoginUser, user.removeProduct)
router.post('/changeQuantity', sessionMV.verifyLoginUser, user.changeQuantity)

router.get('/wishlist', sessionMV.verifyLoginUser, user.getWishlist)
router.get("/addToWishlist/:id", sessionMV.verifyLoginUser, user.addToWishlist);
router.post("/removewishlistProduct",sessionMV.verifyLoginUser,user.removewishlistProduct);


router.get('/checkout', sessionMV.verifyLoginUser, user.getCheckout)
router.post('/placeOrder',sessionMV.verifyLoginUser,user.placeOrder)
router.get("/success",sessionMV.verifyLoginUser,user.getSuccess)
router.get("/cancel",sessionMV.verifyLoginUser,user.getCancel)
router.get("/pay",sessionMV.verifyLoginUser,user.getPay)
router.post("/checkCoupon", sessionMV.verifyLoginUser, user.checkCoupon);

router.get('/orderDetails',sessionMV.verifyLoginUser,user.orderDetails)
router.get("/orderSuccess",sessionMV.verifyLoginUser, user.orderSuccess );
router.get("/viewOrderProducts/:id",sessionMV.verifyLoginUser,user.viewOrderProducts);
router.get("/cancelOrder/:id",sessionMV.verifyLoginUser,user.cancelOrder);

router.get('/categorywise',sessionMV.verifyLoginUser,user.categorywise)
// router.get('/productSearch/:searchtext',user.productSearch)

router.get("/forgotpassword",user.forgotpassword)

router.post('/forgototp', user.forgototp)
router.post('/forgototpverify', user.forgototpverify)
router.post('/forgotupdate', user.forgotupdate)



module.exports = router;