function solution(number) {
    let ans = 0;
    const n = number.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                if (number[i] + number[j] + number[k] === 0) {
                    ans++;
                }
            }
        }
    }
    return ans;
}