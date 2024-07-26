//klasyczny interfejs programowania asynchronicznego, w którym asynchroniczny
//wynik wywołania funkcji jest dostarczany jako argument do funkcji zwrotnej(callback).
const fs = require("fs");

function readFileAsync(file_name, callback) {
  fs.readFile(file_name, "utf8", (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}

readFileAsync("lorem_ipsum.txt", (err, data) => {
  if (err) {
    console.error("Reading file error:", err);
  } else {
    console.log("File content:", data);
  }
});
