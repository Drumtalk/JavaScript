function rot13(str) {
  const cypher = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let key = 0;
  let key2 = 0;
  let answer = [];
  for (let i = 0; i < str.length; i++) {
    if (cypher.includes(str[i])) {
      key = cypher.indexOf(str[i]);
      key2 = key + 13;
      if (key2 > 25) {
        key2 -= 26
      }
      answer.push(cypher[key2]);
    } else {
      answer.push(str[i]);
  } 
 }
  return answer.join("");
}

console.log(rot13("SERR PBQR PNZC"));