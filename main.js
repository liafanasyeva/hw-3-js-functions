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
toCamelCase("the-stealth-warrior")
toCamelCase("The_Stealth_Warrior") 


// Task 4 
function reverseWord(str) {
    return str.split(' ') //from str to arr with no spaces
                .map(function(a) { //use map() to call every element of arr 
                    return a.split('').reverse().join('')} 
                    ).join(' ');
}

reverseWord(' A fun little challenge! ')

// Task 5
function stringExpansion (str) {
    var strs = [];
    var nums = [];
    for (var i = 0; i<str.length;i++ ) {
        var char = str[i];
        if (isNaN(char)) {
            if (nums.length == 0) {
                strs.push(char);
            } else {
            if (nums.length != 0)     
            for (var j=0; j < nums[0]; j++) {
            strs.push(char);
            }
          }
        } else { 
            nums.unshift(char); 
        }
    } 
    console.log(strs.join(''));
}
stringExpansion('3D2a5d2f');
stringExpansion('3d332f2a');
stringExpansion('abcde');


// Task 6
function largest (...args) {
    var arr = Array.prototype.slice.call(args);
    var max = Math.max.apply(null, arr);
    console.log(max);
}
largest(2, 0.1, -5, 100, 3) 

function smallest (...args) {
    var arr = Array.prototype.slice.call(args);
    var max = Math.min.apply(null, arr);
    console.log(max);
}
smallest(2, 0.1, -5, 100, 3)
