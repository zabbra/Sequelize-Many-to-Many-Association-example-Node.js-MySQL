const config = require("../config/db.config")
const  {Sequelize,DataTypes} = require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        logging: config.logging,
        pool:{
            max: config.pool.max,
            min:config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
)

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorial = require("../models/tutorial.model")(sequelize,DataTypes);
db.tag = require("../models/tag.model")(sequelize,DataTypes);


// Many-to-Many Relation 

    
    db.tag.belongsToMany(db.tutorial, {
        through: "tutorial_tag",
        as: "tutorials",
        foreignKey: "tag_id",
    });
    

    
    db.tutorial.belongsToMany(db.tag, {
        through: "tutorial_tag",
        as: "tags",
        foreignKey: "tutorial_id",
    });



module.exports = db