function changeVocals (str) {
    var result = ''
    for (var i=0; i<str.length; i++){
        // console.log(str[i])
        if (str[i]==="a"){
            result+="b"
        }
        else if (str[i]==="i"){
            result+="j"
        }
        else if (str[i]==="u"){
            result+="v"
        }
        else if (str[i]==="e"){
            result+="f"
        }
        else if (str[i]==="o"){
            result+="p"
        }
        else if (str[i]==="A"){
            result+="B"
        }
        else if (str[i]==="I"){
            result+="J"
        }
        else if (str[i]==="U"){
            result+="V"
        }
        else if (str[i]==="E"){
            result+="F"
        }
        else if (str[i]==="O"){
            result+="P"
        }
        else {
            result+=str[i]
        }

    }
    return result;
  }
  
  function reverseWord (str) {
    var reverse="";
    for (var i=str.length-1; i>=0; i--){
        reverse+=str[i];
        // console.log(reverse)
    }
    return reverse;
  }
  
  function setLowerUpperCase (str) {
    var word="";
    for (var i=0; i<str.length; i++){
        if (str[i]===str[i].toUpperCase()){
            word+=str[i].toLowerCase();
        }
        else if (str[i]===str[i].toLowerCase()){
            word+=str[i].toUpperCase();
        }
    }
    return word;
  }
  
  function removeSpaces (str) {
        var hasil = "";
        for (var i=0; i<str.length; i++){
            if (str[i]===" "){
                str[i]=""
            }
            else {
                hasil+=str[i]
            }
        }
        return hasil;
  }
  
  function passwordGenerator (name) {
    if (name.length <5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
      }
    var ganti = changeVocals(name);
    // return ganti;
    var balik = reverseWord(ganti);
    // return balik;
    var kata = setLowerUpperCase(balik)
    // return kata;
    var finalResult = removeSpaces(kata);
    return finalResult
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'