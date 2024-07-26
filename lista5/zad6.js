//czas, adres klienta, rodzaj żądania HTTP, nazwa zasobu, status odpowiedzi
// -> 3 klienty, którzy skierowali do serwera aplikacji największą liczbę żądań

const fs = require("fs");
const readline = require("readline");

function analyzeLogs(fileName) {
  try {
    const fileStream = fs.createReadStream(fileName, { enc: "utf-8" });

    // interfejs do odczytu pliku
    const rl = readline.createInterface({
      input: fileStream,
    });

    // "licznik" liczby żądań dla każdego ip
    const ip_request_map = new Map();

    rl.on("line", (line) => {
      // dzielimy na osobne linie
      const splitted = line.split(" ");
      const ip = splitted[1];

      // dodajemy liczbę żądań dla danego ip w map
      if (ip) {
        const currentCount = ip_request_map.get(ip) || 0;
        ip_request_map.set(ip, currentCount + 1);
      }
    });

    rl.on("close", () => {
      // sortujemy w malejącej kolejności
      const sortedEntries = Array.from(ip_request_map.entries()).sort(
        ([ipAddressA, countA], [ipAddressB, countB]) => countB - countA
      );

      for (let i = 0; i < 3 && i < sortedEntries.length; i++) {
        console.log(`${sortedEntries[i][0]} ${sortedEntries[i][1]}`);
      }
    });

    rl.on("error", (error) => {
      console.error(`File reading error: ${error.message}`);
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

analyzeLogs("zad6_logs.txt");
