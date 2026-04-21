function solution(food) {
    let left = '';
    const n = food.length;
    for (let i = 1; i < n; i++) {
        const num = Math.floor(food[i] / 2);
        left += String(i).repeat(num);
    }
    let rev = '';
    for (let i = left.length - 1; i >= 0; i--) {
        rev += left[i];
    }
    const ans = left + '0' + rev;
    return ans;
}