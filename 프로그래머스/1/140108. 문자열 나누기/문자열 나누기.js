function solution(s) {
    let ans = 0;
    let x = null;
    let xx = 0;
    let yy = 0;
    for (let i = 0; i < s.length; i++) {
        if (x === null) {
            x = s[i];
            xx = 1;
            yy = 0;
        } else if (s[i] === x) {
            xx++;
        } else {
            yy++;
        }
        if (xx === yy) {
            ans++;
            x = null;
        }
    }
    if (x !== null && xx !== yy) {
        ans++;
    }
    return ans;
}