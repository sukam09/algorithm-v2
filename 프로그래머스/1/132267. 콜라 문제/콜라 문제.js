function solution(a, b, n) {
    let ans = 0;
    let empty = n;
    while (empty >= a) {
        const q = Math.floor(empty / a);
        ans += q * b;
        const coke = q * a;
        empty = empty - coke + q * b;
        // console.log(empty, ans);
    }
    return ans;
}