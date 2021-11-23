var express = require("express");
var mongoose = require("mongoose");
// added both below
const logger = require("morgan");
const routes = require("routes")

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

app.use(require("./routes/htmlRoutes"))
app.use(require("./routes/apiRoutes"))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true
});

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});
