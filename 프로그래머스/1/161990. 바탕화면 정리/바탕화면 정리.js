function solution(wallpaper) {
    var answer = [null,50,null,null];
    
    let test = [];
    
    for(let i=0; i < wallpaper.length; i++){
        if(wallpaper[i].indexOf('#') != -1){
            test.push([i,wallpaper[i].indexOf('#'),wallpaper[i].lastIndexOf('#')])
        }
    }
    test.map(item => {
        console.log(item)
        if(item[0] < answer[0] || answer[0] === null) answer[0] = item[0]
        if(item[1] < answer[1]) answer[1] = item[1]
        
        if(item[0] >= answer[2] || answer[0] === null) answer[2] = item[0] +1
        if(item[2] >= answer[3] || answer[0] === null) answer[3] = item[2] + 1
    })
    
    
    return answer;
}