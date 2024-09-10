function solution(today, terms, privacies) {
    let answer = [];
    let term = {}
    
    terms.map(item => {
        const type = item.split(' ')[0]
        const month = item.split(' ')[1]
        return term = {...term, [type] : month}
    })
    
    privacies.map((privacy, idx) => {
        const date = new Date(privacy.split(' ')[0])
        const type = Number(term[privacy.split(' ')[1]])
        

        
        if(new Date(today) >= new Date(date.setMonth(date.getMonth() + type))){
            return answer.push(idx + 1)
        }
    })
    
    return answer;
}