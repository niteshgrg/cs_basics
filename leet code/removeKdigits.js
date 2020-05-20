var removeKdigits = function(num, k) {
    let digitsAvailableToRemove = k;
    let optimisedTillIndex = 0;
    let i = 0;
    
    while(digitsAvailableToRemove > 0 && optimisedTillIndex < num.length) {
        let modifiableString = num.substring(optimisedTillIndex, digitsAvailableToRemove + optimisedTillIndex + 1);

        let minElementIndex = modifiableString.indexOf(Math.min(...(modifiableString.split('').map(x => parseInt(x)))));

        
        modifiableString = modifiableString.substring(minElementIndex);

        
        num = num.substring(0, optimisedTillIndex) + modifiableString + num.substring(digitsAvailableToRemove + optimisedTillIndex + 1);

        
        optimisedTillIndex++;
        digitsAvailableToRemove -= minElementIndex;
        i++;
    }
    if(digitsAvailableToRemove > 0) {
        num = num.substring(0, num.length - digitsAvailableToRemove)
    }
    return num.replace(/^0+/, '');
};

console.log(removeKdigits("10111119999", 3));