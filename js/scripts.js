
function numberConverter(numberInput) {
  array = []
  for (let index =0; index <=numberInput; index +=1){
    array.push(index)
    console.log(array)
  }
  }

//UI Logic

$(document).ready(function(){
  $("form#number-converter").submit(function(event){
    event.preventDefault();
    const numberInput = $("input#number").val();
    $("#output").html(numberInput);
    numberConverter(numberInput)
  });
});