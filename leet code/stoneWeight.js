var lastStoneWeight = function(stones) {
    if(stones.length === 0) {
        return 0;
    } else if (stones.length === 1) {
        return stones[0];
    }
    stones.sort(function(a, b){return a-b});
    console.log(stones);
    let last2Elements = stones.splice(-2);
    let diff = Math.abs(last2Elements[0] - last2Elements[1]);
    if(diff > 0) {
        stones.push(diff);
    }
    return lastStoneWeight(stones);
};

console.log(lastStoneWeight([8,10,4]));