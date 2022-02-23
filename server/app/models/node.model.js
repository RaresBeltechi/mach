const { NodeObjectType } = require("./nodeobjecttype");

module.exports = (sequelize, Sequelize) => {
    
    const Node = sequelize.define('node', {
        objectType: {
            type: Sequelize.ENUM,
            values: [
                NodeObjectType.CIRCLE,
                NodeObjectType.TRIANGLE,
                NodeObjectType.DIAMOND]
        },
        position: {
            type: Sequelize.JSON
        },
        label: {
            type: Sequelize.STRING
        }
    });

    return Node;
}