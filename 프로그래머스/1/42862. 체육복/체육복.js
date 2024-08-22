function solution(n, lost, reserve) {
    const noReserve = lost.filter(num => reserve.includes(num) === true).length;
    const filteredLost = lost.filter(num => reserve.includes(num) === false).sort((a,b) => a - b);
    const filteredReserve = reserve.filter(num => lost.includes(num) === false).sort((a,b) => a - b);
    
    
    var answer = n - lost.length + noReserve;
    
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