var prisonAfterNDays = function (cells, N) {
  function nextDay(cells) {
    let temp = [...cells];

    for (let j = 1; j < cells.length - 1; j++) {
      if (cells[j - 1] === cells[j + 1]) {
        temp[j] = 1;
      } else {
        temp[j] = 0;
      }
    }
    temp[0] = 0;
    temp[cells.length - 1] = 0;

    return temp;
  }

  let seen = {};
  let is_fast_forwarded = false;

  while (N > 0) {
    if (!is_fast_forwarded) {
      let state_key = JSON.stringify(cells);
      if (state_key in seen) {
        N %= seen[state_key] - N;
        is_fast_forwarded = true;
      } else {
        seen[state_key] = N;
      }
    }

    if (N > 0) {
      N -= 1;
      let next_day_cells = nextDay(cells);
      cells = next_day_cells;
    }
  }

  return cells;
};

console.log(prisonAfterNDays([1, 0, 0, 1, 0, 0, 1, 0], 1000000000));
