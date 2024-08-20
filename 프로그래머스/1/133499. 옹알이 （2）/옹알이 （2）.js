function solution(babbling) {
    var answer = 0;
    const canWord = ["aya","ye","woo","ma"]
    
    babbling.forEach(word => {
        for( let i=0; i < 4; i++ ){
            const isCan = canWord[i]
             if(word.includes(isCan.repeat(2)) ){
                return;
            }
           word = word.replaceAll(isCan,' ')
        }
        word.trim().length === 0 && answer++
    })
    return answer;
}