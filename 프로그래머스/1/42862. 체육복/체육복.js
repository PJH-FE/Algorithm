function solution(n, lost, reserve) {
    // 도난 당했지만, 여벌있는 학생 수    
    const noReserve = lost.filter(num => reserve.includes(num)).length;
    
    // 여벌없는 ㄹㅇ 급한 도난당한 학생들
    const filteredLost = lost.filter(num => !reserve.includes(num)).sort((a,b) => a - b);
    
    // 여벌있는 금수저들
    const filteredReserve = reserve.filter(num => !lost.includes(num)).sort((a,b) => a - b);
    
    let answer = n - lost.length + noReserve;
    
    filteredReserve.forEach((num)=>{
        for( let i = 0; i < filteredLost.length; i++ )    {
            if(num - 1 === filteredLost[i]) {
                filteredLost[i] = -1;
                return answer++
            } else if ( num + 1 === filteredLost[i] ) {
                filteredLost[i] = -1;
                return answer++
            }
        }
    })
    
    return answer >  n ? n : answer;
}