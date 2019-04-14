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

router.get('/', (req, res) => {
  displayAll(res);
});

router.post('/', (req, res) => {
  db.Burger.create({
    burger_name: req.body.burger_name,
    maker: req.body.maker
  })
    .then(() => {
      displayAll(res);
    });
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