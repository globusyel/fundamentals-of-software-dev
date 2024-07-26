const random_number = Math.floor(Math.random() * 101);
var game_on = true;

function guessing() {
  console.log("Guess a number between 1 and 100");
  process.stdin.on("data", function (data) {
    if (data == random_number) {
      console.log("That's the number!");
      game_on = false;
      process.exit();
    }
    if (data > random_number) {
      console.log("My number is smaller");
    }
    if (data < random_number) {
      console.log("My number is bigger");
    }
  });
}

guessing();
