
var inputBox = document.querySelector("#inputText");
var result1 = "";
var result2 = "";
function appendValue(value){
  if(  inputBox.value == "0"){
    inputBox.value = " ";
  }

     result1 = inputBox.value += value;
}

function clearInput() {
  inputBox.value = "0";
}

function appendopretor(value) {
   result1 = inputBox.value += value;
}
function equal() {
  result2 = eval(result1);
  inputBox.value = result2;
}