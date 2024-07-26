//odczyta zawartość jakiegoś zasobu sieciowego i wypisze ją na konsoli
const https = require("https");

function promisedGet(url) {
  return new Promise(function (resolve, reject) {
    const client = https.get(url, function (res) {
      let buffer = "";
      res
        .on("data", function (data) {
          buffer += data.toString();
        })
        .on("end", function () {
          resolve(buffer);
        });
    });

    client.on("error", function (err) {
      reject(err);
    });
  });
}

(async function () {
  try {
    const result = await promisedGet("https://skos.ii.uni.wroc.pl/");
    console.log(result);
  } catch (error) {
    console.error("Error:", error.message);
  }
})();
