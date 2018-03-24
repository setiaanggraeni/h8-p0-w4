function changeVocals (str) {
    return str.replace(/[a-zA-Z]/g, function(i){
        return String.fromCharCode(i.charCodeAt(0)+1);
    });
}

function reverseWord (str) {
  return str.split("").reverse().join("");
}

function setLowerUpperCase (str) {
  return str.replace(/([a-zA-Z])/g, function(a) {
        return String.fromCharCode(a.charCodeAt() ^ 32);
      });
}

function removeSpaces (str) {
  return str.split(' ').join('');
}

function passwordGenerator (name) {
    return name.replace(/[a-zA-Z]/g, function(i){
          return String.fromCharCode(i.charCodeAt(0)+1);
      });
      str.split("").reverse().join("");
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'