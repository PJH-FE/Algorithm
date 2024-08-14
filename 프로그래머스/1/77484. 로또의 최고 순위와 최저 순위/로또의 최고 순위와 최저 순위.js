function solution(lottos, win_nums) {
    let answer = [];
    let match = 0;
    let ifMatch = 0;
          
    lottos.forEach((num) => {
     if(!!win_nums.includes(num)){
         match++;
         ifMatch++;
     }
    num === 0 && ifMatch++
    })
    answer.push((7 - match) > 5 ? 6 : (7 - match));
    answer.push((7 - ifMatch) > 5 ? 6 : (7 - ifMatch));
    return answer.sort()
}