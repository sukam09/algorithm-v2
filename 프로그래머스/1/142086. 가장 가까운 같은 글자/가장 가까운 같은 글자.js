function solution(s) {
    const ans = [];
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (map.has(c)) {
            ans.push(i - map.get(c));
        } else {
            ans.push(-1);
        }
        map.set(c, i);
    }
    return ans;
}