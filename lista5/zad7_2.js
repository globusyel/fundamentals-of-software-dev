//util.promisify z biblioteki standardowej
const fs = require("fs");
const util = require("util");

const readFileAsyncPromisify = util.promisify(fs.readFile);

readFileAsyncPromisify("lorem_ipsum.txt", "utf8")
  .then((data) => {
    console.log("File content:", data);
  })
  .catch((err) => {
    console.error("Reading file error:", err);
  });
