function solution(keymap, targets) {
    const ans = [];
    const map = new Map();
    for (const k of keymap) {
        for (let i = 0; i < k.length; i++) {
            if (!map.has(k[i])) {
                map.set(k[i], i + 1);
            } else if (i + 1 < map.get(k[i])) {
                map.set(k[i], i + 1);
            }
        }
    }
    for (const target of targets) {
        let res = 0;
        for (const t of target) {
            if (!map.has(t)) {
                res = -1;
                break;
            }
            res += map.get(t);
        }
        ans.push(res);
    }
    return ans;
}