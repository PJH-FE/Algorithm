function solution(X, Y) {
    let answer = "";

    // 0 ~ 9까지 반복
    for (let i = 0; i < 10; i++) {
        // 0 ~ 9 중 몇개 있는지 확인
        let xLength = X.split("").filter((n) => Number(n) === i).length;
        let yLength = Y.split("").filter((n) => Number(n) === i).length;

        // 숫자(i)를 xLength, yLength 중 더 작은 개수만큼 answer에 더함
        answer += String(i).repeat(Math.min(xLength, yLength));
    }
    
    if (answer === "") {
        return "-1";
    } else if (Number(answer) === 0) {
        return "0";
    }
    
    // 내림차순 정렬
    return answer.split("").sort((a, b) => Number(b) - Number(a)).join("");
}