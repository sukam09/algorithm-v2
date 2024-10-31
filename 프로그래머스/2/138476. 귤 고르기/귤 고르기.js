function solution(k, tangerine) {
    const m = new Map();
    for (const x of tangerine) {
        if (m.has(x)) {
            m.set(x, m.get(x) + 1);
        } else {
            m.set(x, 1);
        }
    }
    const a = [...m]
    a.sort((a, b) => a[1] - b[1]);
    let ans = 0;
    const n = tangerine.length;
    let cnt = 0;
    const goal = n - k;
    for (const [key, val] of a) {
        if (cnt + val <= goal) {
            cnt += val;
        } else {
            ans++;
        }
    }
    return ans;
}