/************************************/
/*** Import des modules nécessaires */

const db = require("./app/models")
const TutorialController = require("./app/controllers/tutorial.controller");
const TagController = require("./app/controllers/tag.controller");



const run = async () => {
   //Créer des didacticiels
   const tut1 = await TutorialController.create({
      title: "Tut#1",
      description: "Tut#1 Description",
    });

    const tut2 = await TutorialController.create({
      title: "Tut#2",
      description: "Tut#2 Description",
    });

    const tut3 = await TutorialController.create({
      title: "Tut#3",
      description: "Tut#3 Description",
    });
    
    const tut4 = await TutorialController.create({
      title: "Tut#4",
      description: "Tut#4 Description",
    });


    //Créer des balises
    const tag1 = await TagController.create({
      name: "Tag#1",
    });
    const tag2 = await TagController.create({
      name: "Tag#2",
    });


    //Ajouter des didacticiels aux balises
    await TagController.addTutorial(tag1.id, tut1.id);

    await TagController.addTutorial(tag1.id, tut2.id);

    await TagController.addTutorial(tag1.id, tut3.id);

    await TagController.addTutorial(tag2.id, tut3.id);

    await TagController.addTutorial(tag2.id, tut4.id);

    await TagController.addTutorial(tag2.id, tut1.id);


     //Afficher la balise (y compris les didacticiels) par identifiant
     const _tag1 = await TagController.findById(tag1.id);
     console.log(">> tag1", JSON.stringify(_tag1, null, 2));

     //Afficher toutes les balises
    const tags = await TagController.findAll();
    console.log(">> tags", JSON.stringify(tags, null, 2));

    //Afficher le didacticiel (y compris les balises) par identifiant

    const _tut = await TutorialController.findById(tut3.id);
    console.log(">> tut3", JSON.stringify(_tut, null, 2));

    //Afficher tous les tutoriels
    const tuts = await TutorialController.findAll();
    console.log(">> tuts", JSON.stringify(tuts, null, 2));

};

db.sequelize.sync({force:true}).then(() =>{
   console.log("Drop and Resync Db")
   run();
})

db.sequelize.authenticate()
.then(() => console.log('Database connected...'))
.catch(err => console.log('Database Error', err))



