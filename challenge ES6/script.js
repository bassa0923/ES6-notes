    // ES6 introduction !!!!!

  // let and const!

  // ES5 code
  /*
  var name5 = 'Jane Smith';
  var age5 = 23;
  matchMedia,e5 = 'Jane Miller';
  console.log(name5);

  // ES6 code
  const name6 = 'Jane Smith';
  let age = 23;
  name6 = 'Jane Miller';
  console.log(name6);
  // we cant change const value!
  // var === function scoped!
  // let, const  === block scoped! 

  */



  // ES5 code
  /*
  function driversLicense5(passedTest) {

    if (passedTest) {
      var firstName = 'John';
      var yearOfBirth = 1990;

    
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car,')
  }

  driversLicense5(true);

  // ES6 code
  // we cant declare const in the block and use it outside of block
  function driversLicense6(passedTest) {
    let firstName;
    const yearOfBirth = 1990;

    if (passedTest) {
    firstName = 'John';

    
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car,')
  }

  driversLicense6(true);

  */



  /*

  // a little difference between let and var, proves that let is block-scoped and var is a function-scoped
  let i6 = 23;

  for (let i6 = 0; i6 < 5; i6++) {
    console.log(i6)
  }

  console.log(i6);

  var i5 = 23;

  for (var i5 = 0; i5 < 5; i5++) {
    console.log(i5)
  }

  console.log(i5);

  */


  // Blocks and IIFEs !!!
  /*

  {
    const a = 1;
    let b = 2;
    var c = 3;

  }

 // console.log(a + b); 
  console.log(c);
  
  */


  // ES5 code 
  /*
  (function() {
    var c = 3;
  })();
  console.log(c)
  */



  // Strings 
  /*
  let firstName = 'Saba';
  let lastName = 'Megrelishvili';
  const yearOfBirth = 2001;
  function calcAge(year) {
    return 2022 - year;
  }

  // ES5
  console.log('This is ' + firstName + ' ' + lastName + '. I was born in ' + yearOfBirth + '. Today i am ' + calcAge(yearOfBirth) + ' years old.')

  // ES6
  console.log(`This is ${firstName} ${lastName}. I was born in ${yearOfBirth}. Today I am ${calcAge(yearOfBirth)} years old.`)

  // new methods with strings 
  const n = `${firstName} ${lastName}`;
  console.log(n.startsWith('S'));
  console.log(n.endsWith('i'));
  console.log(n.includes('ab'));
  console.log(`${firstName} `.repeat(5));
  
  */

  // Arrow functions !!!

  //const years = [1990, 1956, 1965, 1940];

  // ES5
  /*
  var ages5 = years.map(function(el){
    return 2022 - el; 

  });
  console.log(ages5)

  // ES6
  let ages6 = years.map(el => 2022 - el);
  console.log(ages6);

  ages6 = years.map((el, index) => `Age element ${index + 1}: ${2022 - el}.`)
  console.log(ages6);

  ages6 =  years.map((el, index) => {
    const now = new Date().getFullYear();
      const age = now - el;
      return  `Age element ${index + 1}: ${age}.`
  })
  console.log(ages6);

  */


  // Arrow functions for better understanding!!!
  // biggest advantage they share surrounding this keyword

  // ES5

  // only in method call this keyword points to object, but in a regular function call global obejct(window object)
  /*
  var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
      var self = this;
      document.querySelector('.green').addEventListener('click', function() {
          var str = 'This is box numbert ' + self.position + ' and it is ' + self.color;
          alert(str);
      });
    }
  }

  box5.clickMe();
  */

  // ES6
  // arrow function shares lexical this keyword of surroundings
  /*
  const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
      document.querySelector('.green').addEventListener('click', () => {
          var str = 'This is box numbert ' + this.position + ' and it is ' + this.color;
          alert(str);
      });
    }
  }

  box6.clickMe();
  */

  /*
  //not so useful this points to global object
  const box66 = {
    color: 'green',
    position: 1,
    clickMe: ()  => {
      document.querySelector('.green').addEventListener('click', () => {
          var str = 'This is box numbert ' + this.position + ' and it is ' + this.color;
          alert(str);
      });
    }
  }

  box66.clickMe();

  */

  //ES5

  /*
  function Person(name) {
    this.name = name;
  }

  Person.prototype.myFriends5 = function(friends) { 

    var arr = friends.map(function(el){
      return this.name + ' is friends with ' + el;
    }.bind(this));
    
    console.log(arr);

  }

  

  var friends = ['Bob', 'Jane', 'Mark'];
  new Person('John').myFriends5(friends);

  */

  //best solution without hacks
  /*
  function Person(name) {
    this.name = name;
  }

  Person.prototype.myFriends6 = function(friends) { 

    let arr = friends.map(el => 
    `${this.name} is friend with ${el}`);
    
    
    
    console.log(arr);

  }

  var friends = ['Bob', 'Jane', 'Mark'];
  new Person('John').myFriends6(friends);

  */



  // lecture: Destructuring !!!
  // extract data from data structure like an object or data araay, we have an array and want to store each element in a single variable

  // ES5 
  /*
  var saba5 = ['Saba', 26];
  var name5 = saba5[0];
  var age5 = saba5[1];

  // ES6
        //distract     //structure
  const [name, year] = ['Saba', 26];
  console.log(name);
  console.log(year);

  */

  /*

  const obj = {
    firstName: 'Saba',
    lastName: 'Megrelishvili'
  };

  const {firstName, lastName} = obj;

  console.log(firstName, lastName);

  const {firstName: a, lastName: b} = obj;
  console.log(a, b);

  */

  /*

  // more practical example

  function calcAgeRetirement(year) {
    const age = new 
    Date().getFullYear() - year;
    return [age, 65 - age]

  }

  const [age, retirement] = 
  calcAgeRetirement(1990);
  console.log(age);
  console.log(retirement);

  */

  

  // Arrays !!!

  //
  //const boxes = document.querySelectorAll('.box');

  // ES5
  /*
  var boxesArr5 =
  Array.prototype.slice.call(boxes);
  boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 
    'dodgerblue';
  });
  
  */
  // ES6
  /*
  const boxesArr6 = Array.from(boxes)
  Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');
  */


  /*
  // ES5
  for (var i = 0; i < boxesArr5.length; i++) {

    if(boxesArr5[i].className === 'box blue') {
      continue;
    }
  
    boxesArr5[i].textContent = 'I changed to blue!'; 
  }
  */

  // ES6
  /*
  for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
      continue;
    }
    cur.textContent = 'I changed to blue';

  }
  */

  /*
  // 2 new useful array method, which allows to find elements in the array

  // ES5
  var ages = [12, 17, 8, 21, 14, 11];

  var full = ages.map(function(cur){
    return cur >= 18;
  })

  console.log(full);

  console.log(full.indexOf(true));
  console.log(ages[full.indexOf(true)]);

  // ES6

  console.log(ages.findIndex(cur => cur >= 18));
  console.log(ages.find(cur => cur >= 18));

  */


  // Spread Operator !!!
  /*
  function addFourAges (a, b, c, d) {
    return a + b + c + d;
  }

  var sum1 = addFourAges(18, 30, 12, 21);
  console.log(sum1);

  // ES5
  var ages = [18, 30, 12, 21]; 
  // apply method-- receives an array and calls function using elements of an array as arguments

  var sum2 = addFourAges.apply(null, ages);
  console.log(sum2);
  */



  // ES6
  // ... - expanding array into its components

  /*
  const sum3 = addFourAges(... ages);
  console.log(sum3);

  const familySmith = ['John', 'Jane', 'Mark'];
  const familyMiller = ['Mary', 'Bob', 'Ann'];
  const bigFamily = [...familySmith, 'Lily', ... familyMiller]
  console.log(bigFamily);

  // we can use on nodelist as well and etc...

  const h = document.querySelector('h1');
  const boxes = document.querySelectorAll('.box');

  const all = [h, ...boxes];
  Array.from(all).forEach(cur => cur.style.color = 'purple' );

  */




  // Function parameters: Rest parameters !!!
  // rest paramers allows us to pass an orbitary number of arguments into a function adn use this arguments in that function (they use same ... )
  // spread operator takes an array transforms it into single values and rest parameters recieve cupple sinlge values and transforms then into an array when we call a function with a multiple parameters


  // ES 5
  /*
  function isFullAge5() {
    //console.log(arguments);
    var argsArr = 
    Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur) {
      console.log((2022 - cur) >= 18);
    })
  }

  //isFullAge5(1990, 2005, 1965);
  //isFullAge5(1990, 2005, 1965, 2016, 1987);

  */

  /*
  // ES6
  function isFullAge6(...years) {
    years.forEach(cur => console.log((2022 - cur) >= 18));
    //console.log(years);
  }

  isFullAge6(1990, 2005, 1965, 2016, 1987);

  //spread opperator is used in function call
  // rest operator in a function declaration

  */

  
  
  // ES 5
  /*
  function isFullAge5(limit) {
    //console.log(arguments);
    var argsArr = 
    Array.prototype.slice.call(arguments, 1);

    argsArr.forEach(function(cur) {
      console.log((2022 - cur) >= limit);
    })
  }

  isFullAge5(21, 1990, 2005, 1965);
  //isFullAge5(1990, 2005, 1965, 2016, 1987);

  */
  // ES6

  /*
  
  function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2022 - cur) >= limit));
    //console.log(years);
  }

  isFullAge6(16, 1990, 2005, 1965, 2016, 1987);

  */

  // Default parameters !!!
  // one or more parameters of a functiion to be preset so ( to have them default values)

  // ES5 
  /*
  function SmithPerson(firstName, yearofBirth,lastName, nationality) {

    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ?
    nationality = 'american' : nationality = nationality;
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearofBirth = yearofBirth;
    this.nationality = nationality;
  }
  var john = new SmithPerson('John', 1990);
  var emily = new SmithPerson('emily', 1983, 'Diaz', 'spanish');

  */

  // ES6
  // rest and default parameters make it easier to work with functions with js
  /*
  function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearofBirth = yearOfBirth;
    this.nationality = nationality;

  }
  


  var john = new SmithPerson('John', 1990);
  var emily = new SmithPerson('emily', 1983, 'Diaz', 'spanish');

  */


  // Maps !!!
  // to use obejct as hash maps which means we map string keys to orbitary values
  // in objects we are limited to strings, but in maps we can use any type of primitive values adn we can use functions and objects as a keys

  /*
  const question = new Map();
                //key       //value
  question.set('question', 'What is the official name of the latest major Javascript version');
  question.set(1, 'ES5');
  question.set(2, 'ES6');
  question.set(3, 'ES2015');
  question.set(4, 'ES7');
  question.set('correct', 3);
  question.set(true, 'Correct answer :)');
  question.set(false, 'Wrong, please try again!');
  // for retrieve
  
  console.log(question.get('question'));
  //console.log(question.size);
  
  */
  
 // if(question.has(4)) {
    //question.delete(4);
 // };
  //clear everything
  //question.clear(); 
  
  
  //question.delete(4);
  

  // we can loop trough maps
  /*
  question.forEach((value, key) =>
  console.log(`this is ${key}, and it's set to ${value}`));
  */

  //quesion.entries()- return all entries of our question map and we can use then destructioring to store the key and values in 2 seperate values;
  // it will return all the key,value pairs
  /*
  for (let [key, value] of question.entries()) {
    console.log(`this is ${key}, and it's set to ${value}`);
  }
  
  */

  /*
  for (let [key, value] of question.entries()) {
        if (typeof(key) === 'number') {
          console.log(`Answer ${key}: ${value}`);
        }
  }

  const ans = parseInt(prompt('Write the correct answer'));

  console.log(question.get(ans === question.get('correct')));
  //console.log(question.get(true));

  */

  // why maps are better than objects to create hash maps??
  // we can use everything as keys and second maps ar literable and makes it easy to loop through them and to manipulate data with them and its really easy to get size of map, also we can easily add and remove from maps, this is why maps are better then objects if we want to build hash maps



  // Classes !!!
  // syntatic sugar over the way we do prototype inheritance in js, classes make it easier to implement iheritence adn to create objects based on blueprints
  // in ES5 blueprint is function constructor

  // ES5
  /*
  var Person5 = function(name, yearOfBirth, job) {
    this.name =  name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
  }

  var john5 = new Person5('John', 1990, 'teacher');

  */


  /*
  // ES6
  class Person6 {
    constructor (name, yearOfBirth, job) {
      this.name = name;
      this.yearOfBirth = yearOfBirth;
      this.job = job;
    }

    calculateAge() {
      var age = new Date().getFullYear() - this.yearOfBirth;
      console.log(age);
      
    }

    static greeting() {
      console.log('Hey there!');
    }

  }

  const john6 = new Person6('John', 1990, 'teacher');

  Person6.greeting();

  */

  // class definitons are not hoisted, unlike function constructors we need to first implement class and only later in our code we can start using it
  // we can only add methods to classes but not properties







  // classes and subclasses !!!

  var Person5 = function(name, yearOfBirth, job) {
    this.name =  name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }

  var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals){
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }


  // object.create allows us to manually set prototype of an object and we want of prototype of an athlete to be the prototype of the person

  //person5 is a super class and athlete5 is sub class

  Athlete5.prototype = Object.create(Person5.prototype);
  
  Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
  }
  
  var johnAthlete5 = new Athlete5('John', 1990,'swimmer', 3, 10);

  johnAthlete5.calculateAge();
  johnAthlete5.wonMedal();





  // ES6

  class Person6 {
    constructor (name, yearOfBirth, job) {
      this.name = name;
      this.yearOfBirth = yearOfBirth;
      this.job = job;
    }

    calculateAge() {
      var age = new Date().getFullYear() - this.yearOfBirth;
      console.log(age);
      
    }

  }
  // in a subclass we need to say that it extends the superclass
  class Athlete6 extends Person6  {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
      super(name, yearOfBirth, job);
      this.olympicGames = olympicGames;
      this.medals = medals;
    }

    wonMedal() {
      this.medals++;
      console.log(this.medals);
    }

  }

  const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
  johnAthlete6.calculateAge();
  johnAthlete6.wonMedal();
  






































