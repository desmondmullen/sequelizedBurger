const db = require('../models');
const express = require('express');
const router = express.Router();

// Routes
// =============================================================
function displayAll(res) {
  db.Customer.findAll({
    order: [['customer_name', 'ASC']]
  }).then(customerResult => {
    var customers = customerResult;
    db.Burger.findAll({
      order: [['burger_name', 'ASC']]
    }).then(burgerResult => {
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
  // db.Customer.create({ customer_name: req.body.customer_name })
  //   .then((result) => {
  //     console.log(result.id);
  db.Burger.create({
    burger_name: req.body.burger_name,
    maker: req.body.maker
  })
    .then(() => {
      displayAll(res);
    });
  // })
  // .catch(err => {
  //   res.json(err);
  // });
});

router.post('/Customers', (req, res) => {
  if (req.body.customer_name) {
    db.Customer.create({ customer_name: req.body.customer_name })
      .then(() => {
        displayAll(res);
      })
      .catch(err => {
        res.json(err);
      });
  } else {
    displayAll(res);
  }
});

// PUT route for updating burgers. We can access the updated burger in req.body
router.put('/Burgers', (req, res) => {
  db.Burger.update(
    {
      devoured: true,
      last_one_devoured: true,
      eater: req.body.eater
    },
    {
      where: {
        id: req.body.id
      }
    }
  ).then(() => {
    displayAll(res);
  });
});

module.exports = router;