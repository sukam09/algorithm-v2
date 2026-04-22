function solution(players, callings) {
    const ans = [];
    const map = new Map();
    for (let i = 0; i < players.length; i++) {
        map.set(players[i], i);
        ans.push(players[i]);
    }
    for (let i = 0; i < callings.length; i++) {
        const rank = map.get(callings[i]);
        const victim = ans[rank - 1];
        [ans[rank - 1], ans[rank]] = [ans[rank], ans[rank - 1]];
        map.set(callings[i], rank - 1);
        map.set(victim, rank);
    }
    return ans;
}