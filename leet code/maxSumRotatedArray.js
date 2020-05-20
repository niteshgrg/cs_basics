var maxSubarraySumCircular = function(A) {
    let max_so_far = A[0];
    let curr_sum = A[0];
    let sum_array = [A[0]];
    let sum_from_index = 0;
    let biggest_negative_element = 0;
    let biggest_negative_element_index = -1;
    let end_index = 0;
    
    for(let i = 1; i < A.length; i++) {
        if(A[i] > curr_sum + A[i]) {
            sum_from_index = i;
        }
        sum_array.push(sum_array[i-1] + A[i]);
        if(A[i] < biggest_negative_element) {
            biggest_negative_element = A[i];
            biggest_negative_element_index = i;
        }
        curr_sum = Math.max(A[i], curr_sum + A[i]);
        
        if(curr_sum >= max_so_far) {
            end_index = i
        }
        max_so_far = Math.max(curr_sum, max_so_far); 
    }
    
    // if(sum_from_index == 0) {
    //     if(end_index == (A.length - 1))
    //         max_so_far -= biggest_negative_element;
    //     else {
    //         let end_sum = 0;
    //         for(let i = end_index + 1; i < A.length; i++) {
    //             end_sum += A[i];
    //         }
    //         if(end_sum )
    //     }
    // }

    // console.log(max_so_far);
    // console.log(sum_from_index);
    // console.log(curr_sum);
    
    let inside_sum = 0;
    
    for(let i = 0; i < A.length - 1; i++) {
        let temp;
        if(i < sum_from_index) {
            curr_sum = curr_sum + A[i];
            max_so_far = Math.max(curr_sum, max_so_far); 
        } else {
            
            temp = Math.max(curr_sum - inside_sum, curr_sum - A[i]);
            inside_sum += A[i];
            max_so_far = Math.max(temp, max_so_far); 
            // curr_sum = Math.max(curr_sum, curr_sum + A[i] - inside_sum);
        }
        
    }
    
    return max_so_far;
};

console.log(maxSubarraySumCircular([-5,-2,  5 ,6,-2,-7,0,2,8]));


console.log(maxSubarraySumCircular([3,-2,2,-3]));

console.log(maxSubarraySumCircular([1,-2,3,-2]));

console.log(maxSubarraySumCircular([5,-3,5]));

console.log(maxSubarraySumCircular([-9,14,24,-14,12,18,-18,-10,-10,-23,-2,   -23,  11,12,18,-9,9,-29,12,4,-8,15,11,-12,-16,-9,19,-12,22,16]));


