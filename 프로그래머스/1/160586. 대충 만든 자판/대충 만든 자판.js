function solution(keymap, targets) {
    var answer = [];
    
    for( let i = 0; i < targets.length; i++ ){
        const targetArray = targets[i].split('');
        let press = []
        
        for( let j = 0; j < keymap.length; j++ ){
            const keyArray = keymap[j].split('');
            
            targetArray.forEach((item, idx) => {
                let count = keyArray.indexOf(item) + 1;
                
                if( press[idx] === undefined) press[idx] = 101;
                
                if( count !== 0 &&  press[idx] > count ){
                    press[idx] = count
                }
            })
        }
        
        if( press.includes(101) ) {
            answer.push(-1)
        } else {
            let pressCount = 0
            press.forEach(item => {
                pressCount += item
            })
            answer.push(pressCount)
        }
    }
    
    return answer;
}