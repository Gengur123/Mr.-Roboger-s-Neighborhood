
function numberConverter(numberInput) {
  array = []
  for (let index =0; index <=numberInput; index +=1){
    let indexToString = index + ""
    array.push(indexToString)
    }
    console.log(array)
    const robotArray = array.map (function(string) {
      if  (string.includes("3") === true) {
        return string = "Won't you be my neighbor?";
      } else if (string.includes("2") === true) {
        return string = "Boop";
      } else if (string.includes("1") === true) {
        return string = "Beep";
      } else {
        return string;
      }
    });
    console.log(robotArray)
    const robotString = robotArray.join(", ");
    return robotString
    console.log(robotString)
}
//UI Logic

$(document).ready(function(){
  $("form#number-converter").submit(function(event){
    event.preventDefault();
    const numberInput = $("input#number").val();
    numberConverter(numberInput);
    $("#output").html(robotString);
  });
});
