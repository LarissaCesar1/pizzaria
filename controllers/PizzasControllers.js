const PizzasControllers = {
    listar: (req, res)=> {
        res.render('pizzas.ejs', {PizzasJson});
    }
};
module.exports = PizzasControllers;

const PizzasJson = require('../database/Pizzas.json');