export const CheckLettersAndNumbers = (string) => {
  const pattern = '[a-zA-Z0-9]';

  for (var char of string) {
    if (!char.match(pattern)) {
      return true;
    }
  }
}

export const CheckJustNumbers = (string) =>  {
  const pattern = '[0-9]';

  for (var char of string) {
    if (!char.match(pattern)) {
      return true;
    }
  }
}