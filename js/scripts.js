
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
//UI Logic

$(document).ready(function(){
  $("form#number-converter").submit(function(event){
    event.preventDefault();
    const numberInput = $("input#number").val();
    $("#output").html(numberInput);
    numberConverter(numberInput);
  });
});
