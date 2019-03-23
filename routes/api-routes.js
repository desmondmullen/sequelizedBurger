const db = require("../models");
// Routes
// =============================================================
module.exports = (app) => {
  function displayAll(res) {
    db.Burger.findAll({}).then((result) => {
      const hbsObject = {
        burgers: result
      };
      res.render('index', hbsObject);
    });
  };

  // GET route for getting all of the burgers
  app.get("/", (req, res) => {
    displayAll(res);
  });

  // POST route for saving a new burger. We can create a burger using the data on req.body
  app.post("/", (req, res) => {
    if (req.body.burger_name) {
      db.Burger.create({ burger_name: req.body.burger_name })
        .then(() => {
          displayAll(res);
        })
        .catch((err) => {
          console.log(err.Error.msg);
          res.json(err);
        });
    } else {
      displayAll(res);
    }
  });

  // PUT route for updating burgers. We can access the updated burger in req.body
  app.put("/:id", (req, res) => {
    db.Burger.update({
      devoured: true,
      last_one_devoured: true
    }, {
        where: {
          id: req.params.id
        }
      }).then(() => {
        displayAll(res);
      });
  });
};
