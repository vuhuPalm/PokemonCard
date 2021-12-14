const {Pokemon} = require('../models')

module.exports.viewAll = async function(req, res, next) {
    const pokemonList = await Pokemon.findAll();
    console.log (pokemonList);
    res.render('index', {pokemonList});
}