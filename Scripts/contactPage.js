function checkChars(){

    var len = document.getElementById('textInput').value.length;

    console.log(len);

    var text = (750-len) + '/750 Characters Left';

    document.getElementById('charsLeft').innerHTML = text;





}