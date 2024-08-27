var array =[11,23,36]
console.log("array", array);

//~* Higher order Function (HoF)
//* A function which takes function as a parameter
//* A function which returns a function

//* Passing an external  function to HoF
console.log("Pass an external function");
//*array  -> [11,23,36]
//*           |  |  |
//*           V  V  V
array.forEach(printElement); //* forEach is a HoF
//*             |
//*             V
function printElement(element) {
    console.log(element);
}

//~* 2. Pass function directly as parameter
console.log("Pass function directly as parameter");
array.forEach(function(element){console.log(element);});

//~* 3. Pass  Fat arrow function  as parameter
console.log("Pass  Fat arrow function  as parameter");
array.forEach(element => {console.log(element);});

//~* Array has variety of Higher order functions
//~* Find out  if all the elements pass the condition
console.log("every element is >10",array.every(elem => elem >10));

//~* Find out  if all the elements pass the condition
console.log("Some elements > 30",array.some(elem => elem > 30));

//~* Find the first element passing the condition
console.log("first element > 20",array.find(elem => elem > 20));


