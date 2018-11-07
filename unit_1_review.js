/*
    Unit 1 Final Review

    Do I understand:
      -> Function Scope
      -> Conditionals
      -> Loops
      -> Iterating through Arrays
      -> Manipulating Arrays
      -> Adding Strings
      -> Callbacks
      -> Array Methods
      -> Object Literals and Keys
      -> Classes
*/
console.log('------Q1-------');

/*  1
    @func catchPhrase
    @param name {string}
    @param greet {string}
    @returns {string}
    @desc - Given 2 string parameters, return a combined string
    @example - 
        console.log(catchPhrase('Mo', '^_^')); // 'Mo said, "^_^"'
        console.log(catchPhrase('Taq', 'Eat, sleep, code')); // 'Mo said, "Eat Sleep Code"'

*/
const catchPhrase = (name, greet) => {
        if ((typeof name != 'string') & (typeof greet != 'string')) {
                throw new Error("Arguments are not string")
        }
        return `${name} said ${greet}`
};

console.log(catchPhrase('Taq', 'Eat, sleep, code'));

console.log('------Q2-------');
/*  2
    @func isOdd
    @param num {number}
    @returns {boolean}
    @desc - Given a number return true if it's odd
            return false if it's even
    @example - 
        isOdd(5); // true
        isOdd(2); // false

*/
function isOdd(num) {
        return num % 2 === 0 ? false : true
}

console.log(isOdd(6))

console.log('------Q3-------');
/*  3 
    @func fizzBuzz
    @param end {number}
    @desc - Count from 1 to the end. Implement basic fizzBuzz
            Console.log each iteration. This function does not return anything
*/
function fizzBuzz(end) {
        for (let i = 1; i < end; i++) {
                if (i % 3 === 0 & i % 5 != 0) console.log(i, "fizz");
                else if (i % 5 === 0 & i % 3 != 0) console.log(i, "buzz");
                else if (i % 5 === 0 & i % 3 === 0) console.log(i, "fizzbuzz");


        }
}
fizzBuzz(20)

console.log('------Q4-------');
/*  4
    @func myForEach
    @param arr {arr}
    @param cb {function}
    
    @desc - Implement the Javascript forEach method.

    @example - 
            myForEach([1, 2, 3], (e, i, original) => {
              console.log(e);
            });
*/
function myForEach(arr, cb) {
        for (let i = 0; i < arr.length; i++) {
                cb(arr[i], i, arr)
        }
}
myForEach([1, 2, 3], (e, i, original) => {
        console.log(e);
});

/*  5
    @func myMap
    @param arr {array}
    @param cb {function}
    @returns {array}
    @desc - Implement the Javascript map array method.

    @example - 
            myMap([1, 2, 3], (e, i, original) => {
              return e * 2;
            });
*/
console.log('------Q5-------');

function myMap(arr, cb) {
        newArr = []
        for (let i = 0; i < arr.length; i++) {
                newArr.push(cb(arr[i], i, arr))
        }
        console.log(newArr)
}
myMap([1, 2, 3], (e, i, original) => {
        return e * 2;
});

console.log('------Q6-------');
/*  6
    @func createObject
    @param keyName {string}
    @param keyValue {anything}

    @desc - Return an object with the passed in keyName and keyValue.

    @example - 
            createObject('name', 'John'); // { name: 'John' }
            createObject('age', 15); // { age: 15 }
            createObject('a', 'c'); // { a: 'c' }

*/
function createObject(keyName, keyValue) {
        obj = new Object
        obj[keyName] = keyValue
        return obj
}
console.log(createObject('name', 'John'));

console.log('------Q7-------');
/*  7
    Define a @class called Pet
    With @properties: name, animal, greet
    With @methods: 
        greets() // Returns the pet's special greet. Eg. "Rexy the dog said Woof!"
*/
class Pet {
        constructor(name, animal, greet) {
                this.name = name
                this.animal = animal
                this.greet = greet
        }

        greets() {
                return this.greet
        }
}

let cat = new Pet("katty", "cat", 'meow')
console.log(cat.greets());

/*  8
    Define a @class called Person
    With @properties: name, age, pets
    With @methods: 
        profile() // Returns a greeting. Eg. "John is 30 years old."
        addPet(name, animal, greet) // Adds a new pet for the person
        petsOfKind(animal) // Returns list of pets that match the animal passed in

        const mo = new Person('Mo', 25);
        mo.addPet('Corgi', 'Dog', 'Trof');
        mo.addPet('Husky', 'Dog', 'Woof');
        mo.addpet('Tiger', 'Cat', 'Rawr');

        mo.petsOfKind('Dog'); // [ Pet {name: 'Corgi', animal: 'Dog', greet: 'Trof'},  
                                    Pet {name: 'Husky', animal: 'Dog', greet: 'Woof'} ]

        mo.petsOfKind('Cat'); // [ Pet {name: 'Tiger', animal: 'Cat', greet: 'Rawr'} ]
*/

console.log('------Q8-------');
class Person {
        constructor(name, age, pets = []) {
                this.name = name
                this.age = age
                this.pets = pets
        }
        profile() {
                `${this.name} is ${this.age} years old`
        }
        addPet(name, animal, greet) {
                this.pets.push(new Pet(name, animal, greet))
        }
        petsOfKind(animal) {
                let hold = this.pets.reduce((acc, petObj) => {
                        if (petObj.animal === animal) {
                                return acc.concat(petObj)

                        }
                        return acc
                }, [])
                console.log(hold);

        }
}

const mo = new Person('Mo', 25);
mo.addPet('Corgi', 'Dog', 'Trof');
mo.addPet('Husky', 'Dog', 'Woof');
mo.addPet('Tiger', 'Cat', 'Rawr');
mo.addPet('Cate', 'Cat', 'moo');


mo.petsOfKind('Dog');
mo.petsOfKind('Cat');