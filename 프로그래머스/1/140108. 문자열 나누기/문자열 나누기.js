function solution(s) {
    var answer = 0;
    
    let sArray = s.split('');
    let passIdx = -1; 
    let equals = 1;
    let noEquals =0;
    
    sArray.map((str,idx) => {
        if(passIdx === idx) return;
        sArray[passIdx+1] === sArray[idx + 1] ? equals++ : noEquals++;
        
        if( equals === noEquals ){
            answer++;
            passIdx = idx + 1;
            equals = 1;
            noEquals =0;
        } else if (sArray[idx + 1] === undefined){
            answer ++;
        }
    })
    return answer;
}