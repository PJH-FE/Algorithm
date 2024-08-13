function solution(n, m, section) {
    let answer = 1;
    let min = section[0]
    section.forEach( num => {
        if( num > min + m - 1 ){
            min = num;
            answer++;
        }
    })
    
    return answer;
}