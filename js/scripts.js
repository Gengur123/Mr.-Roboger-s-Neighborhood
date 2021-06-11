//Business

function numberConverter(numberInput) {
  array = []
  for (let index = 0; index <= numberInput; index += 1) {
    let indexToString = index + ""
    array.push(indexToString)
  }
  const robotArray = array.map(function (string) {
    if (string.includes("3") === true) {
      return string = "Won't you be my neighbor?";
    } else if (string.includes("2") === true) {
      return string = "Boop!";
    } else if (string.includes("1") === true) {
      return string = "Beep!";
    } else {
      return string;
    }
  });
  robotString = robotArray.join(" ");
  return robotString
}

//UI Logic

$(document).ready(function () {
  $("form#number-converter").submit(function (event) {
    event.preventDefault();
    const numberInput = $("input#number").val();
    const robotLang = numberConverter(numberInput)
    numberConverter(numberInput);
    $("#output").html(robotLang);
  });
});
