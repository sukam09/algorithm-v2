function solution(cards1, cards2, goal) {
    const map = new Map();
    for (let i = 0; i < cards1.length; i++) {
        map.set(cards1[i], 'a' + String(i));
    }
    for (let i = 0; i < cards2.length; i++) {
        map.set(cards2[i], 'b' + String(i));
    }
    // console.log(map);
    let aidx = -1;
    let bidx = -1;
    for (const g of goal) {
        const idx = map.get(g);
        if (idx[0] === 'a') {
            const num = Number(idx.slice(1));
            if (aidx !== num - 1) {
                return 'No';
            }
            aidx = num;
        } else {
            const num = Number(idx.slice(1));
            if (bidx !== num - 1) {
                return 'No';
            }
            bidx = num;
        }
    }
    return 'Yes';
}