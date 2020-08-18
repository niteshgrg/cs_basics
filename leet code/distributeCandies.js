var distributeCandies = function (candies, num_people) {
  let output = new Array(num_people).fill(0);
  let i = 0,
    candy = 1;

  while (candies > 0) {
    if (candy <= candies) {
      output[i % num_people] += candy;
      candies -= candy;
      candy++;
    } else {
      output[i % num_people] += candies;
      candies = 0;
    }
    i++;
  }

  return output;
};

console.log(distributeCandies(11, 3));

// 1 2 3 4
