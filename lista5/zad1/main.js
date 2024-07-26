// zaczyna wykonywać module.exports = a; i ustawia wartość jako funkcję a a dopiero póżniej wykonuje var b = require("./b");

var a = require("./a");

a(6);
