const express = require("express");
const cors = require("cors");
const app = express();
const db = require('./models');

var corsOptions = {
    origin: "http://localhost:8081"
}

// db.sequelize.sync({force: true});
db.sequelize.sync();


app.use(cors(corsOptions));

// parse requests of content type ( json / x-www-form-urlencoded)

app.use(express.json())
app.use(express.urlencoded({ extended: true}));

app.get("/", (request, response) => response.json({message: "welcome"}));

// register node

require("./routes/node.routes")(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('server running');
});