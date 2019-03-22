const db = require("../models");
// Routes
// =============================================================
module.exports = (app) => {
  // GET route for getting all of the burgers
  app.get("/", (req, res) => {
    db.Burger.findAll({}).then((result) => {
      res.json(result);
    });
  });

  // POST route for saving a new burger. We can create a burger using the data on req.body
  app.post("/", (req, res) => {
    db.Burger.create({ text: req.body.text, complete: req.body.complete })
      .then(() => db.Burger.findAll({}))
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err.Error.msg);
        res.json(err);
      });
  });

  // DELETE route for deleting burgers. We can access the ID of the burger to delete in
  app.delete("/:id", (req, res) => {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => db.Burger.findAll({}))
      .then((result) => {
        res.json(result);
      });
  });

  // PUT route for updating burgers. We can access the updated burger in req.body
  app.put("/", (req, res) => {
    console.log(req.body.id, req.body.complete);
    db.Burger.update({
      id: req.body.id,
      text: req.body.text,
      complete: req.body.complete
    }, {
        where: {
          id: req.body.id
        }
      }).then(() => db.Burger.findAll({}))
      .then((result) => {
        res.json(result);
      });
  });
};
