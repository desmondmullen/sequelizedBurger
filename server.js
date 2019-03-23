const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const db = require('./models');

const routes = require('./routes/api-routes.js');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(routes);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on PORT ${PORT}`);
    });
});