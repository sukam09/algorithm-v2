function solution(t, p) {
    let ans = 0;
    const len = p.length;
    for (let i = 0; i <= t.length - len; i++) {
        const x = t.slice(i, i + len);
        // console.log(x, Number(x));
        if (Number(x) <= Number(p)) {
            ans++;
        }
    }
    return ans;
}