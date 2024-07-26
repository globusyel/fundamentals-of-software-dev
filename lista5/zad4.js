//przeczytanie w całości pliku tekstowego a następnie wypisanie jego zawartości na konsoli
var fs = require("fs");

function fsCallback(path, encoding, callback) {
  fs.readFile(path, encoding, (err, data) => {
    if (err) callback(err, null);
    else callback(null, data);
  });
}

fsCallback("lorem_ipsum.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("ERROR (callback): " + err);
  } else {
    console.log("DATA3 (callback): " + data);
  }
});
