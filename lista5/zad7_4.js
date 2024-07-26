function readFileAsync(file_name) {
  return require("fs").promises.readFile(file_name, "utf8");
}

// "po staremu" - kontynuacja (Promise::then)
readFileAsync("lorem_ipsum.txt")
  .then((data) => {
    console.log("plik (po staremu):", data);
  })
  .catch((err) => {
    console.error("Reading file error", err);
  });

// "po nowemu" - przez async/await
async function readAndPrintFile() {
  try {
    const data = await readFileAsync("lorem_ipsum.txt");
    console.log("plik (po nowemu):", data);
  } catch (err) {
    console.error("Reading file error", err);
  }
}

readAndPrintFile();
