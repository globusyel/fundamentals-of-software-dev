// Iterator z zadania ze stalą 10 
function createGenerator_orig() {
    var _state = 0;
    return {
        next: function() {
            return {
                value: _state,
                done: _state++ >= 10
            }
        }
    }
}

console.log("Generator oryginalny:");
 var foo = {
     [Symbol.iterator]: createGenerator_orig
 };

for (var f of foo)
     console.log(f);


// Iterator sparametryzowany 
function createGenerator(elemsCount) {
    return function createGenerator() {
        var _state = 0;
        return {
            next: function() {
                return {
                    value: _state,
                    done: _state++ >= elemsCount
                };
            }
        };
    };
}

var foo1 = {
    [Symbol.iterator]: createGenerator(3)
};

var foo2 = {
    [Symbol.iterator]: createGenerator(7)
};

console.log("__________________________________");
console.log("Generator sparametryzowany (foo1):");
for (var item of foo1)
    console.log(item);

console.log("__________________________________");
console.log("Generator sparametryzowany (foo2):");
for (var item of foo2)
    console.log(item); 