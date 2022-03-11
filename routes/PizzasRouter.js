const express = require("express");

const router = express.Router();

const PizzasControllers= require("../controllers/PizzasControllers");

router.get('/', PizzasControllers.listar);
router.get('/pizza/busca', PizzasControllers.buscar);
router.get('/pizzas/:id', PizzasControllers.mostrar);



module.exports =  router;