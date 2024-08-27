function solution(s, skip, index) {
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
    
    let answer = '';
    

    skip.split('').map(item => {
        const idx = alphabet.findIndex(eng => eng === item)
        alphabet.splice(idx,1)
    })
    
    
    s.split('').map(alp => {
        let idx = alphabet.findIndex(e => e === alp) + index;
        
        while( idx >= alphabet.length){
            idx -= alphabet.length
        }
        
        answer += idx >= alphabet.length ? alphabet[idx - alphabet.length] : alphabet[idx];
    })
    
    return answer;
}