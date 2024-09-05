function solution(survey, choices) {
    var answer = '';
    
    let result = [];
    
    for(let i=0; i <  survey.length; i++){
        if( choices[i] > 4 ){
            result.push(...survey[i][1].repeat(choices[i] - 4).split(''))
        } else if (choices[i] < 4){
            result.push(...survey[i][0].repeat(4 - choices[i]).split(''))
        }
    }
    
    if(result.includes('R') || result.includes('T')){
        const R_length = result.filter(cate => cate === 'R').length
        const T_length = result.filter(cate => cate === 'T').length
        answer += T_length > R_length ? 'T' : 'R'
    } else answer += 'R'
    
    if(result.includes('C') || result.includes('F')){
        const C_length = result.filter(cate => cate === 'C').length
        const F_length = result.filter(cate => cate === 'F').length
        answer += F_length > C_length ? 'F' : 'C'
    } else answer += 'C'
    
    if(result.includes('J') || result.includes('M')){
        const J_length = result.filter(cate => cate === 'J').length
        const M_length = result.filter(cate => cate === 'M').length
        answer += M_length > J_length ? 'M' : 'J'
    } else answer += 'J'
    
    if(result.includes('A') || result.includes('N')){
        const A_length = result.filter(cate => cate === 'A').length
        const N_length = result.filter(cate => cate === 'N').length
        answer += N_length > A_length ? 'N' : 'A'
    } else answer += 'A'
    
    return answer;
}