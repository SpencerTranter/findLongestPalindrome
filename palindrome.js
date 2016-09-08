var args = process.argv.slice(2);

if(args.length < 2){
  console.log(`Error, please enter a longer string`);
} else {
  var noSpaces = args.join('').toLowerCase().split('');
}

function isPalindrome(str) {
  var str = str.toLowerCase().split('').join('');
  var mid = Math.floor(str.length/2);
  var last = str.length - 1;

  for (var i = 0; i < mid; i++) {
    if (str[i] !== str[last - i]) {
      return false;
    }
  }
  return true;
}

function findLongestPalindrome(palindromeArr) {
  var length = palindromeArr.length;
  var largestPal = '';

  palindromeArr.map(function(curr) {
    var currSearch = curr;
    for(var x = palindromeArr.indexOf(curr) + 1; x < length; x ++) {
      currSearch += palindromeArr[x];
      if(isPalindrome(currSearch) && currSearch.length > largestPal.length) {
        largestPal = currSearch;
      }
    }
  })
  return `Largest palindrome is: ${largestPal}!`;
}

console.log(findLongestPalindrome(noSpaces));
// Test driver code. These should all log true.
// console.log(isPalindrome('p') === true);
// console.log(isPalindrome('foo') === false);
// console.log(isPalindrome('racecar') === true);
// console.log(isPalindrome('Kayak') === true);
// console.log(isPalindrome('a santa at NASA') === true);
// console.log(isPalindrome('live without evil') === false);
// console.log(isPalindrome('just some random words') === false);
//console.log(longestPalindrome)('')
