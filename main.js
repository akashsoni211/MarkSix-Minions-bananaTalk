var textInput = document.querySelector("#textinput");
var textTranslate = document.querySelector("#btntranslate");
var textOutput = document.querySelector("#textoutput");

textTranslate.addEventListener("click", translateText);
function translateText(){
    textOutput.innerHTML = textInput.value;
}
