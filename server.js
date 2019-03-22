const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const exphbs = require('express-handlebars');
const routes = require('./controllers/burgers_controller.js');
const methodOverride = require('method-override')

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(routes);

app.listen(PORT, () => {
    console.log(`App now listening at localhost:${PORT}`);
});