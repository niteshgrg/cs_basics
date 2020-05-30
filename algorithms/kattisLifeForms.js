/**

You may have wondered why most extraterrestrial life forms resemble humans, differing by superficial traits such as height, 
colour, wrinkles, ears, eyebrows and the like. A few bear no human resemblance; these typically have geometric or amorphous shapes 
like cubes, oil slicks or clouds of dust.

The answer is given in the 146th episode of Star Trek - The Next Generation, titled The Chase. It turns out that in the vast 
majority of the quadrant’s life forms ended up with a large fragment of common DNA.

Given the DNA sequences of several life forms represented as strings of letters, you are to find the longest substring that is 
shared by more than half of them.

Input
Standard input contains several test cases. Each test case begins with 1≤𝑛≤100, the number of life forms. 
𝑛 lines follow; each contains a string of lower case letters representing the DNA sequence of a life form. 
Each DNA sequence contains at least one and not more than 1006 letters and consists solely of lower case ’a’-’z’. 
A line containing 0 follows the last test case.

Output
For each test case, output the longest string or strings shared by more than half of the life forms. 
If there are many, output all of them in alphabetical order. If there is no solution with at least one letter, 
output “?”. Leave an empty line between test cases.

sample input - 
3
abcdefg
bcdefgh
cdefghi
3
xxx
yyy
zzz
0

sample output - 
bcdefg
cdefgh

?

 */

function addSentinals(stringArray, sentinalIndexes) {
  let sentinal = 35;
  let t = [];

  for (let s of stringArray) {
    t = t.concat(s.split(""));
    sentinalIndexes.push(t.length);
    if (sentinal < 97) {
      t.push(String.fromCharCode(sentinal));
    } else {
      t.push(String.fromCharCode(sentinal - 62, sentinal - 62));
    }
    sentinal++;
  }
  return t;
}

function constructLcpArr(strArr) {
  let lcpArray = [];
  for (let i = 0; i < strArr.length; i++) {
    lcpArray.push(i);
  }

  return lcpArray;
}

function sortLcpArr(lcpArray, combinedStringArray) {
  lcpArray.sort((a, b) => {
    let cmp = combinedStringArray
      .slice(a)
      .join("")
      .localeCompare(combinedStringArray.slice(b).join(""));
    return cmp;
  });
  return lcpArray;
}

function getOverlapArr(lcpArray, combinedStringArray) {
  let storeCommonChar = [0];

  for (let i = 1; i < lcpArray.length; i++) {
    let commonElements = 0;
    while (
      combinedStringArray[lcpArray[i]][commonElements] ===
      combinedStringArray[lcpArray[i - 1]][commonElements]
    ) {
      commonElements++;
    }
    storeCommonChar.push(commonElements);
  }

  return storeCommonChar;
}

function getVarities(startIndex, endIndex) {}

let sentinalIndexes = [];
let stringArray = ["abcd", "bcda", "abc", "defg"];

let combinedStringArray = addSentinals(stringArray, sentinalIndexes);

let lcpArray = constructLcpArr(combinedStringArray);

lcpArray = sortLcpArr(lcpArray, combinedStringArray).slice(
  sentinalIndexes.length
);

let storeCommonChar = getOverlapArr(lcpArray, combinedStringArray);

console.log(combinedStringArray);
console.log(lcpArray);
console.log(sentinalIndexes);
