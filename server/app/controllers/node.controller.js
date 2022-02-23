const db = require("../models");
const Nodes = db.Nodes;
const _ = require('underscore');
const { NodeObjectType } = require("../models/nodeobjecttype");

exports.create = async (request, response) => {
    getRandomObjectType();
    const node = {
        objectType: getRandomObjectType(),
        position:{
            x: request.body.position.x,
            y: request.body.position.y
        },
        label: getRandomLabel()
    };

    try {
        let data = await Nodes.create(node);
        response.send(data);
    } catch(e) {
        console.log(e);
    }
}


exports.findAll = async (request, response) => {
    const data = await Nodes.findAll();
    response.send(data);
}

exports.getLastTen = async (request, response) => {
    const data = await Nodes.findAll({
        limit: 10,
        order: [['createdAt', 'DESC']]
    });

    response.send(data);
}

exports.deleteById = async (request, response) => {
    const data = await Nodes.findOne(
        {
            where: {
                id: request.params.id
            }
        });
    
    data != null && data.destroy()
    response.send(200);
}


const getRandomObjectType = function() {
    let values = _.values(NodeObjectType);
    let maxIndex = _.size(NodeObjectType) -1;
    let randomNr = _.random(maxIndex);
    return values[randomNr]
}

const getRandomLabel = function(){
    let possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let shuffled = _.shuffle(possibleChars);
    return shuffled.join("").substring(0, _.random(5,10));
}