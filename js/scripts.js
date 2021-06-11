//Business

function numberConverter(numberInput, nameInput) {
  array = []
  userName = nameInput
  console.log(userName)
  for (let index = 0; index <= numberInput; index += 1) {
    let indexToString = index + ""
    array.push(indexToString)
    
  }
  const robotArray = array.map(function (string) {
    if (string.includes("3") === true) {
      return string = "Won't you be my neighbor?" + userName;
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
    const nameInput = $("input#name").val();
    const robotLang = numberConverter(numberInput)
    console.log(nameInput)
    numberConverter(numberInput,nameInput);
    console.log(nameInput)
    $("#output").html(robotLang);
  });
});
