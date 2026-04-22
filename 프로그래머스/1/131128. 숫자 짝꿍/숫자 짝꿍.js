function solution(X, Y) {
    let ans = '';
    const arr1 = Array(10).fill(0);
    const arr2 = Array(10).fill(0);
    const arr3 = Array(10).fill(0);
    for (const x of X) {
        arr1[+x]++;
    }
    for (const y of Y) {
        arr2[+y]++;
    }
    // console.log(arr1, arr2);
    for (let i = 0; i < 10; i++) {
        arr3[i] = Math.min(arr1[i], arr2[i]);
    }
    // console.log(arr3);
    for (let i = 9; i >= 0; i--) {
        ans += String(i).repeat(arr3[i]);
    }
    if (ans !== '') {
        if (ans[0] === '0') {
            return '0';
        }
        return ans;
    }
    return '-1';
}