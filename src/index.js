const app = require("./app.js");

app.listen(app.get("port"), () => {
  console.log("Santa's secret is running on port: ", app.get("port"));
});

console.log("hello santa");
