function solution(people, limit) {
    people.sort((a, b) => a - b);
    let ans = 0;
    let st = 0;
    let en = people.length - 1;
    while (st <= en) {
        if (people[st] + people[en] <= limit) {
            st++;
            en--;
        } else {
            en--;
        }
        ans++;
    }
    return ans;
}