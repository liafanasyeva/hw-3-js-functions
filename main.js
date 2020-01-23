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

//Task 7

var baseArray = [10, 20, 30, 40, 50];
var newArray = transform(baseArray);

function transform(array) {
    return baseArray.map(function (item) {
        return function () {
            return item;
        }
    })
}

newArray[3]();

//Task 8
function sum() {
  var args = [].slice.call(arguments);
  if (args.length === 0) {
    return 0;
  } else {
    return args.pop() + sum.apply(this, args);
  }
}
console.log(sum(1, 3, 5, 7));

// Task 9
function countDown(c) {
  setTimeout(function() {
    console.log(c);
    if (c > 0) {
        setTimeout(countDown(c - 1), 1000);
    }
  }, 1000)
}

countDown(3);

// Task 10
var user = {
    firstName: 'Elle',
    surName: 'A.'
};
Function.prototype.myBind = function(userInfo) {
  var fn = this;
  return function() {
    return fn.apply(userInfo, arguments);
  };
};

function sayName() {
    console.log(`Привет, ${this.firstName} ${this.surName} :)`)
}
var greeting = sayName.myBind(user);
greeting();
