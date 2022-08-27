var textInput = document.querySelector("#textinput");
var textTranslate = document.querySelector("#btntranslate");
var textOutput = document.querySelector("#textoutput");
textTranslate.addEventListener("click", translateText);

function createUrl(){
    return "https://api.funtranslations.com/translate/minion.json"+"?"+"text="+textInput.value;
}

function errorHandler(error){
    return console.log("Error Occured" + error)
}

function outputText(text){
    return textOutput.innerHTML = text;
}

function fetchurl(url){
    fetch(url)
    .then(response=>response.json())
    .then(json=>json.contents.translated)
    .then(outputText)
    .catch(errorHandler)
}

function translateText(){
    var output = fetchurl(createUrl());
    textOutput.innerHTML = output;
}
