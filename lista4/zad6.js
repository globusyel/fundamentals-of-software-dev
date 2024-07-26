/*
function Tree(val, left, right) {
    this.left = left;
    this.right = right;
    this.val = val;
}

Tree.prototype[Symbol.iterator] = function*() {
    yield this.val;
    if ( this.left ) yield* this.left;
    if ( this.right ) yield* this.right;
}

var root = new Tree( 1,
    new Tree( 2, new Tree( 3 ) ), new Tree( 4 ));

for ( var e of root ) {
    console.log( e );
}
// 1 2 3 4

*/

function Tree(val, left, right) {
  this.left = left;
  this.right = right;
  this.val = val;
}

// Definicja iteratora "wszerz"
Tree.prototype.breadthFirstIterator = function* () {
  // Utwórz kolejkę i dodaj do niej korzeń drzewa
  const queue = [this];

  // Dopóki kolejka nie jest pusta
  while (queue.length > 0) {
    // Wyjmij węzeł z kolejki
    // queue.shift() usuwa i zwraca pierwszy element z kolejki
    const current = queue.shift();

    // Dodaj prawy i lewy podwęzeł do kolejki (jeśli istnieją)
    if (current.right) {
      queue.push(current.right);
    }
    if (current.left) {
      queue.push(current.left);
    }
    // Zwróć wartość aktualnego węzła
    yield current.val;
  }
};

// Przykładowe drzewo
var root = new Tree(1, new Tree(2, new Tree(3)), new Tree(4));

// Wykorzystanie iteratora "wszerz"
for (var e of root.breadthFirstIterator()) {
  console.log(e);
}
