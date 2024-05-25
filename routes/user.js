const express = require("express");
const Route = express.Router();

/* Controllers */
const UserController = require("../controllers/api/user/user");
/* End Controllers *

/* Api Auth User Route*/
Route.get("/list", UserController.getUserList);

/* End Admin Auth Routes */
module.exports = Route;