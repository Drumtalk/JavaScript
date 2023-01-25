function telephoneCheck(str) {
  let regex = /^1?[-\s]?\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}$/;
  let count = 0;
  if (str.match(regex)) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] == "(") {
        count += 1;
      } else if (str[i] == ")") {
        count -= 1;
      }
    }
    if (count == 0) {
      return true;
    } else {
      return false;
    }
  } else {
  return false;
}
}

console.log(telephoneCheck("11 555-555-5555"));