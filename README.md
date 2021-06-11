# _Arthur Lee's Mr. Robogers Website_

#### _A simple portfolio website about Arthur Lee_

#### By _**Arthur Lee**_


## Technologies Used

* _HTML_
* _CSS_
* _Javascript_

## Description

_This application allows the user to input any number and based on the number entered, return a custom robot message to the user._

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Mavigate to the top level of the directory._
* _Open **index.html** to your browser_


## Known Bugs

* _No known bugs_

## License

[MIT](https://en.wikipedia.org/wiki/MIT_License)
 
 Copyright (c) 2020 Arthur Lee

## Contact Information

_Arthur Lee [meleearthur@gmail.com](meleearthur@gmail.com)_

# Tests

Describe: numberToWordConverter()

Test: "It should loop through all numbers in a range to that user inputs"
Input = 3
Code: 
function numberConverter(numberInput) {
  array = []
  for (let index =1; index <=numberInput; index +=1){
    array.push(index)
    console.log(array)
  }
  }
expected output: [ 1,2,3]

Test: "It should loop through all numbers starting at 0 to a range user inputs."
Input = 3
Code:
function numberConverter(numberInput) {
  array = []
  for (let index =0; index <=numberInput; index +=1){
    array.push(index)
    console.log(array)
  }
  }
Expected output: [ 0,1,2,3]

Test: "It should make all intergers into a string to have .include later."
Input = 3
Code:
function numberConverter(numberInput) {
  array = []
  for (let index =1; index <=numberInput; index +=1){
    let indexToString = index + ""
    array.push(indexToString)
    console.log(array)
  }
  }
expected output: [ "0","1","2","3"]

Test: "It should compare numbers in array and return true or false"(Has bugs?)
Input = 3
Code: 
  function numberConverter(numberInput) {
  array = []
  for (let index =0; index <=numberInput; index +=1){
    let indexToString = index + ""
    array.push(indexToString)
    }
    console.log(array)
    const roboArray = array.map (function(string) {
      if  (string.includes("3")) {
        return true;
      } else if (string.includes("2")) {
        return true;
      } else if (string.includes("1")) {
        return true;
      } else {
        return false;
      }
      console.log(roboArray)

    });
}

Expected output: [ false, true, true, true]