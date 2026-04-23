function solution(signals) {
    const n = signals.length;
    const arr = Array(10000000).fill(0);
    for (const [g, y, r] of signals) {
        const st = g + 1;
        const period = r + g + 1;
        let cur = st;
        while (cur < 10000000) {
            for (let i = 0; i < y; i++) {
                arr[cur]++;
                if (arr[cur] === n) {
                    return cur;
                }
                cur++;
            }
            cur = cur - 1 + period;
        }
        // console.log(arr);
    }
    return -1;
}