const childprocess = require('child_process');

ls = childprocess.spawn("./node_modules/.bin/jest", [
  "--watch",
  // "--version",
  "--verbose",
  "--json"
]);

ls.stdout.on("data", function(data) {
  console.log(data.toString());
});

ls.stderr.on("data", function(data) {
  console.log(data.toString());
});

ls.on("close", function(code) {
  console.log("done");
});