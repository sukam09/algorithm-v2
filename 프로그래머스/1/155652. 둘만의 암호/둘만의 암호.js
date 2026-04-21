function solution(s, skip, index) {
    let ans = '';
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    for (const s of skip) {
        alpha = alpha.replace(s, '');
    }
    // console.log(alpha);
    for (const c of s) {
        const idx = alpha.indexOf(c);
        const nextIdx = (idx + index) % alpha.length;
        ans += alpha[nextIdx];
    }
    return ans;
}