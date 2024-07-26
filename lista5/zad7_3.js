// fs.promises z biblioteki standardowej

const fsPromises = require("fs").promises;

fsPromises
  .readFile("lorem_ipsum.txt", "utf8")
  .then((data) => {
    console.log("File content:", data);
  })
  .catch((err) => {
    console.error("Reading file error:", err);
  });
