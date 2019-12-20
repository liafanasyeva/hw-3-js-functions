// Task 1
function splitAndMerge(str,sp) {
    var array = [];
    array = str.split(' ')
             .join('')
             .split('')
             .join(sp);

    return ('New sentence: ' + array);
}
splitAndMerge("My name is John"," ")

// Task 2
function convert(hash) {
    return Object.entries(hash);
}
console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));

// Task 3
function toCamelCase(str) { 
    var newStr = str.replace(/\W/g,' ')
                    .replace('_',' '); //doesnt work with '_'
    return newStr 
        .replace(/\s(.)/g, function(a) { 
            return a.toUpperCase()
                     .replace(/\s+/g,''); 
        });
   
} 
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"


// Task 4 
function reverseWord(str) {
    return str.split(' ') //from str to arr with no spaces
                .map(function(a) { //use map() to call every element of arr 
                    return a.split('').reverse().join('')} 
                    ).join(' ');
}

reverseWord(' A fun little challenge! ')