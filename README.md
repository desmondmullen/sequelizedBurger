# burger

![Eat Da Burger!](public/assets/img/black-bean-burger-small.png)

**Eat-Da-Burger is an exercise in full stack development skills with a focus on Node.js, Express, Handlebars, Sequelize, and SQL.** I created this for the Coding Boot Camp at UNC-Chapel Hill in March 2019.

# Features
Uses Node, Express, Handlebars, Sequelize, SQL, and an MVC design pattern. Node, Express and Sequelize query and route the data, Handlebars is used to generate HTML. A JawsDB MySQL add-on supplies the SQL component in the Heroku deployment.

Users can "Add a Burger" by first clicking the "Select or add your name" button, then entering a burger name of their choosing. Their burger is then added to the "Burgers that have been created" list along with their name as maker. Users can click "Devour this burger" and select or add their name to devour any burger that has been created and not yet devoured. Clicking "Devour..." moves the burger into the "Hall of Fame" where the maker and eater of the burger are displayed with the burger name. "Gameplay" is not the point here, it's all about the internal workings and interplay of the front-end, server-side, and SQL components.

In addition to the requirements of the assignment, I added a fade-out and fade-in animation representing the burger getting devoured and then showing up in the Hall of Fame list of devoured burgers. This ended up being way more complex than I would have imagined but was a fun challenge. Doing these animations required adding a column to the database table, doing "multiple statements" in each SQL query, and some cleverness with the Handlebars code. It looks simple but it's fairly involved. I like that it makes clear what happens when a burger gets "devoured".