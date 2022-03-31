export const CheckLettersAndNumbers = (string) => {
  const pattern = '[a-zA-Z0-9]';

  for (var char of string) {
    if (!char.match(pattern)) {
      return true;
    }
  }
}

export const CheckJustLetters = (string) => {

  const newString = string.replace(/\s+/g, '');
  const pattern = '[a-zA-Z]';

  for (var char of newString) {
    if (!char.match(pattern)) {
      return true;
    }
  }
}

export const CheckCPF = (string) => {

  const pattern = '[0-9]';

  for (var char of string) { 
    if (!char.match(pattern)) {
      return true;
    }
  }
}


export const CheckJustNumbers = (string) => {

  const pattern = '[0-9]';

  for (var char of string) {
    if (!char.match(pattern)) {
      return true;
    }
  }
}