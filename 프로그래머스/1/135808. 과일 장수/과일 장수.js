function solution(k, m, score) {
    let ans = 0;
    score.sort((a, b) => b - a);
    for (let i = 0; i <= score.length - m; i += m) {
        const cand = score.slice(i, i + m);
        const min = Math.min(...cand);
        ans += min * m;
    }
    return ans;
}