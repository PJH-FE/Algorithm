function solution(nums) {
    let answer = 0;
    
    for(let i = 0; i < nums.length; i ++){
        for(let j = i; j < nums.length; j ++){
            for(let k = j; k < nums.length; k ++){
                if( i !== j && i !== k && j !== k ){
                    const sum = nums[i] + nums[j] + nums[k];
                    let divisor = 2;
                    let isPrime = 0;
                    while(divisor < sum){
                        sum % divisor === 0 && isPrime++
                        divisor++
                    }
                    isPrime === 0 &&  answer++
                }
            }   
        }   
    }
    return answer;
}