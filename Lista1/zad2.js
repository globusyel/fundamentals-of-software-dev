function is_devisible(number) {
  const digits = Array.from(String(number), Number);
  for (const digit of digits) {
    if (digit === 0 || number % digit !== 0) {
      return false;
    }
  }
  return true;
}

function sumOfDigits(number) {
  return Array.from(String(number), Number).reduce((acc, digit) => acc + digit, 0);
}

function is_devisible_sum(number) {
  const sum = sumOfDigits(number);
  return sum > 0 && number % sum === 0;
}

function find_good() {
  for (let number = 1; number <= 100000; number++) {
    if (is_devisible(number) && is_devisible_sum(number)) {
      console.log(number);
    }
  }
}

find_good();
