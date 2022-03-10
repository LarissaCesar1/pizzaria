const express = require("express");

const router = express.Router();

const PizzasControllers= require("../controllers/PizzasControllers");

router.get('/', PizzasControllers.listar);
router.get('/pizzas/:id'),

module.exports =  router;