const {Pokemon} = require('.../models')
module.exports.viewALL = async function(req, res, next) {
    const pokemonList = await Pokemon.findAll();
    res.render('index', {pokemonList});
}