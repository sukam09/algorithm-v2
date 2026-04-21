function solution(babbling) {
    let ans = 0;
    const cand = {'a': 'aya', 'y': 'ye', 'w': 'woo', 'm': 'ma'};
    for (const b of babbling) {
        let i = 0;
        let last = null;
        let success = true;
        while (i < b.length) {
            if (b[i] in cand) {
                const word = cand[b[i]];
                const bb = b.slice(i, i + word.length);
                if (word === last) {
                    success = false;
                    break;
                }
                if (word !== bb) {
                    success = false;
                    break;
                }
                last = word;
                i += word.length;
            } else {
                success = false;
                break;
            }
        }
        if (success) {
            ans++;
        }
    }
    return ans;
}