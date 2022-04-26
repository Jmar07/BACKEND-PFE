const express = require("express");
const router = express.Router();
const loginController = require("./controllers/loginController")
const clientController = require("./controllers/clientController")


router.post("/login",loginController.login);
router.get("/login",loginController.login);
router.get("/client",clientController.client);



module.exports = router;

