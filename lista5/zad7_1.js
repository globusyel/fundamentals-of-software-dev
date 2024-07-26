//”ręcznie” napisana funkcja przyjmująca te same argumenty co fs::readFile ale zwracającej Promise

const fs = require("fs");

function readFileAsyncPromise(file_name) {
  return new Promise((resolve, reject) => {
    fs.readFile(file_name, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

readFileAsyncPromise("lorem_ipsum.txt")
  .then((data) => {
    console.log("File content:", data);
  })
  .catch((err) => {
    console.error("Reading file error:", err);
  });
