module.exports = (sequelize,Sequelize) =>{

    const User = sequelize.define('User',{
        id:{
            type:Sequelize.INTEGER(10).UNSIGNED,
            primaryKey:true,
            autoIncrement:true
        },
        username:{
            type:Sequelize.STRING(100),
            allowNull:false,
            unique:true,
    
        },
        email:{
            type:Sequelize.STRING(),
            allowNull:false,
            unique:true,
            validate:{
                isEmail:true, // Ici validation de donnée
            },
    
        },
        password:{
            type:Sequelize.STRING(64),
            allowNull:false
        },
        
    },
    
    {paranoid:true}) // Ici pour faire du softDelete



    

    return User
}


