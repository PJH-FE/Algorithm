function solution(number, limit, power) {
    var answer = 0;
    
    for(let i = 1; i <= number; i++){
        let maxPower = 1;
        for(let j = 1; j <= i/2; j++){
            i%j === 0 && maxPower++;
        }
        
        answer += maxPower > limit ? power : maxPower
    }
    
    return answer;
}