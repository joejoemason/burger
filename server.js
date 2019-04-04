// Importing dependencies
const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

// Importing files
const routes = require("./routes/handlers");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static("public")); // serving static files

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(methodOverride("_method"));


// Configure Express Handlebars
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");


app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Server is starting at PORT ${PORT}`);
});


// Routing
// app.get('/', (req, res) => {
//     res.render('index', {
//         title: "Burger Home",
//         burgerJoint: 'bacon cheeseburger',
//         name: "JOE JOE",
//         toppings: "Bacon",
//         isDisplayName: false,
//     });
// });
// app.get('/each/helper', (req, res) => {
//     res.render('contact', {
//         people: [
//             "James",
//             "Joel",
//             "Jack",
//             "Joe"
//         ],
//         burger: {
//             burgername: "Baconater",
//             toppings: "Lettuce, Tomatoe, Onion",
//             cooked: "Well Done"
//         },

//         lists: [{
//                 items: ['Cheeseburger', 'Hamburger', 'Veggie Burger', 'Western Burger', 'Jalepeno Burger']
//             },
//             {
//                 items: ['Lettuce', 'Tomato', 'Onion', 'Pickle', 'Mustard', 'Bacon', 'Cheese']

//             }
//         ]
//     });
// });


// app.get('/login', (req, res) => {
//     res.render('login', {
//         title: "Burger-Create",
//         sauce: "bbq sauce",
//         isListEnabled: false,
//     });
// });

// //Letting the app know where all my static files will be stored
// app.use(express.static("public"));

// app.listen(PORT, () => (
//     console.log('Server is starting at PORT $(PORT)')
// ));




// // Parse application body as JSON
// app.use(express.urlencoded({
//     extended: true
// }));
// app.use(express.json());

// // Set Handlebars.



// const routes = require("./controllers.")

// app.use(routes);