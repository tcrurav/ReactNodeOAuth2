const db = require("../models");
const Scooter = db.scooter;
const Op = db.Sequelize.Op;

// Create and Save a new Scooter
exports.create = (req, res) => {
  // Validate request
  if (!req.body.id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Scooter
  const scooter = {
    id: req.body.id,
    userId: req.body.userId,
    boxId: req.body.boxId
  };

  // Save Scooter in the database
  Scooter.create(scooter)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Scooter."
      });
    });
};

// Retrieve all Scooters from the database.
exports.findAll = (req, res) => {
  Scooter.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving scooters."
      });
    });
};

// Find a single Scooter with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Scooter.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Scooter with id=" + id
      });
    });
};

// Update a Scooter by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Scooter.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Scooter was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Scooter with id=${id}. Maybe Scooter was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Scooter with id=" + id
      });
    });
};

// Delete a Scooter with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Scooter.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Scooter was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Scooter with id=${id}. Maybe Scooter was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Scooter with id=" + id
      });
    });
};