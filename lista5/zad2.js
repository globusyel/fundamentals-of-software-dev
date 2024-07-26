function zad2() {
  console.log("What is your name?");
  process.stdin.on("data", function (data) {
    console.log(`Hi, ${data.toString()}`);
    process.exit();
  });
}
zad2();
//node zad2.js
