function palindrome(str) {
  let mod = str.trim().toLowerCase().replace(/[\W_]/g, '');
  let str2 = mod.split("").reverse().join(""); 
  if (mod === str2) {return true}
  else {return false} ;
}

console.log(palindrome("five|\_/|four"));