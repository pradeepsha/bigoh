const express = require("express");
const Route = express.Router();


/* Controllers */
const ApiAuth = require("../controllers/api/auth");
/* End Controllers */
/* Api Auth User Route*/

Route.post("/api/create-form",ApiAuth.validateCreateForm(), ApiAuth.postCreateForm)
Route.post("/api/fill-form/:form_title",ApiAuth.validateFillForm(), ApiAuth.postFillForm)

/* End Admin Auth Routes */
module.exports = Route;
