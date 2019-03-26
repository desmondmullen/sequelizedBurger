const db = require('../models');
const express = require('express');
const router = express.Router();

// Routes
// =============================================================
function displayAll(res) {
  // console.log(res);
  db.Customer.findAll({
    order: [['customer_name', 'ASC']]
  }).then(customerResult => {
    var customers = customerResult;
    db.Burger.findAll({
      order: [['burger_name', 'ASC']]
    }).then(burgerResult => {
      // console.log(burgerResult[0].burger_name);
      // console.log(customerResult[0].customer_name);
      const hbsObject = {
        data: {
          burgers: burgerResult,
          customers: customerResult
        }
      };
      res.render('index', hbsObject);
      db.Burger.update(
        {
          last_one_devoured: false
        },
        {
          where: {
            devoured: true
          }
        }
      );
    });
  });
}

// GET route for getting all of the burgers
router.get('/', (req, res) => {
  displayAll(res);
});

// POST route for saving a new burger. We can create a burger using the data on req.body
router.post('/', (req, res) => {
  // console.log(req.body.burger_name);
  if (req.body.burger_name) {
    db.Burger.create({ burger_name: req.body.burger_name })
      .then(() => {
        displayAll(res);
      })
      .catch(err => {
        // console.log(err.Error.msg);
        res.json(err);
      });
  } else {
    displayAll(res);
  }
});

// PUT route for updating burgers. We can access the updated burger in req.body
router.put('/', (req, res) => {
  // router.put('/:id', (req, res) => {
  db.Burger.update(
    {
      devoured: true,
      last_one_devoured: true
    },
    {
      where: {
        id: req.body.id
        // id: req.params.id
      }
    }
  ).then(() => {
    displayAll(res);
  });
});

module.exports = router;