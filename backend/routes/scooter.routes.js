module.exports = app => {
    const scooters = require("../controllers/scooter.controller.js");
    const auth = require("../controllers/auth.js");
  
    var router = require("express").Router();
  
    // Create a new Scooter
    router.post("/", auth.isAuthenticated, scooters.create);
  
    // Retrieve all Scooter
    router.get("/", auth.isAuthenticated, scooters.findAll);

    // Retrieve a single Scooter with id
    router.get("/:id", auth.isAuthenticated, scooters.findOne);
  
    // Update a Scooter with id
    router.put("/:id", auth.isAuthenticated, scooters.update);
  
    // Delete a Scooter with id
    router.delete("/:id", auth.isAuthenticated, scooters.delete);
  
    app.use('/api/scooters', router);
  };