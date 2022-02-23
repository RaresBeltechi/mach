module.exports = app => {
    const nodes = require("../controllers/node.controller.js");
    var router = require("express").Router();

    // POST
    router.post("/", nodes.create);
    
    // GET
    router.get("/", nodes.findAll);
    router.get("/initialize", nodes.getLastTen);
    
    // DELETE
    router.delete('/:id',nodes.deleteById);

    app.use('/api/nodes',router);
}