var findWords = function (board, words) {
  let output = new Set();
  let indexWords = words.map((word, index) => [word, index]);
  let rowLength = board.length;
  if (rowLength === 0) {
    return [];
  }
  let columnLength = board[0].length;

  function filterWords(positionRow, positionColumn, path, list) {
    if (
      list.length === 0 ||
      positionRow < 0 ||
      positionRow >= rowLength ||
      positionColumn < 0 ||
      positionColumn >= columnLength
    ) {
      return;
    }

    let currentPath = `${positionRow}${positionColumn}`;

    if (path.includes(currentPath)) {
      return;
    }

    let newList = [];

    list.forEach((x) => {
      if (x[0][0] === board[positionRow][positionColumn]) {
        if (x[0].length === 1) {
          output.add(words[x[1]]);
        } else {
          newList.push([x[0].slice(1), x[1]]);
        }
      }
    });

    filterWords(
      positionRow + 1,
      positionColumn,
      [...path, currentPath],
      newList
    );
    filterWords(
      positionRow - 1,
      positionColumn,
      [...path, currentPath],
      newList
    );
    filterWords(
      positionRow,
      positionColumn + 1,
      [...path, currentPath],
      newList
    );
    filterWords(
      positionRow,
      positionColumn - 1,
      [...path, currentPath],
      newList
    );
  }

  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < columnLength; j++) {
      filterWords(i, j, [], indexWords);
    }
  }

  return Array.from(output);
};

console.log(findWords([["a", "a"]], ["aaa"]));

//["aabbbbabbaababaaaabababbaaba","abaabbbaaaaababbbaaaaabbbaab","ababaababaaabbabbaabbaabbaba"]
console.log(
  findWords(
    [
      ["b", "a", "a", "b", "a", "b"],
      ["a", "b", "a", "a", "a", "a"],
      ["a", "b", "a", "a", "a", "b"],
      ["a", "b", "a", "b", "b", "a"],
      ["a", "a", "b", "b", "a", "b"],
      ["a", "a", "b", "b", "b", "a"],
      ["a", "a", "b", "a", "a", "b"],
    ],
    [
      "bbaabaabaaaaabaababaaaaababb",
      "aabbaaabaaabaabaaaaaabbaaaba",
      "babaababbbbbbbaabaababaabaaa",
      "bbbaaabaabbaaababababbbbbaaa",
      "babbabbbbaabbabaaaaaabbbaaab",
      "bbbababbbbbbbababbabbbbbabaa",
      "babababbababaabbbbabbbbabbba",
      "abbbbbbaabaaabaaababaabbabba",
      "aabaabababbbbbbababbbababbaa",
      "aabbbbabbaababaaaabababbaaba",
      "ababaababaaabbabbaabbaabbaba",
      "abaabbbaaaaababbbaaaaabbbaab",
      "aabbabaabaabbabababaaabbbaab",
      "baaabaaaabbabaaabaabababaaaa",
      "aaabbabaaaababbabbaabbaabbaa",
      "aaabaaaaabaabbabaabbbbaabaaa",
      "abbaabbaaaabbaababababbaabbb",
      "baabaababbbbaaaabaaabbababbb",
      "aabaababbaababbaaabaabababab",
      "abbaaabbaabaabaabbbbaabbbbbb",
      "aaababaabbaaabbbaaabbabbabab",
      "bbababbbabbbbabbbbabbbbbabaa",
      "abbbaabbbaaababbbababbababba",
      "bbbbbbbabbbababbabaabababaab",
      "aaaababaabbbbabaaaaabaaaaabb",
      "bbaaabbbbabbaaabbaabbabbaaba",
      "aabaabbbbaabaabbabaabababaaa",
      "abbababbbaababaabbababababbb",
      "aabbbabbaaaababbbbabbababbbb",
      "babbbaabababbbbbbbbbaabbabaa",
    ]
  )
);
